from langchain.llms import Ollama 

from PyPDF2 import PdfReader
from gtts import gTTS
from langchain.embeddings import HuggingFaceEmbeddings
from langchain.text_splitter import CharacterTextSplitter
from langchain.vectorstores import FAISS
from langchain.chains import ConversationalRetrievalChain
from langchain.memory import ConversationBufferMemory

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
from werkzeug.utils import secure_filename
import os
import speech_recognition as sr
from pydub import AudioSegment
from io import BytesIO

app = Flask(__name__)
CORS(app, supports_credentials=True)


llm = Ollama(model='mistral', temperature=0.7)


def get_conversation_chain(file):
    text = ''
    reader = PdfReader(file)
    for page in reader.pages:
        text += page.extract_text()

    text_splitter = CharacterTextSplitter(
    separator = "\n",
    chunk_size = 1000,
    chunk_overlap = 200,
    length_function = len
    )

    chunks = text_splitter.split_text(text)


    embeddings = HuggingFaceEmbeddings()

    vectorstore = FAISS.from_texts(texts = chunks , embedding = embeddings)

    memory = ConversationBufferMemory(memory_key='chat_history', return_messages=True)

    conversation_chain = ConversationalRetrievalChain.from_llm(
        llm = llm,
        retriever = vectorstore.as_retriever(search_kwargs={"k": 2}),
        memory = memory
    )

    return conversation_chain



@app.route('/message', methods=['POST','OPTIONS'])
def get_message():

    print('MESSAGE CALLED ')
    if request.method == 'OPTIONS':
        response = jsonify({'message': 'CORS preflight request handled successfully'})
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response
    
    data = request.get_json()

    if 'message' not in data:
        return jsonify({'error': 'data not found'})
    
    message = data['message']

    print('MESSAGE PROCESSING')

    result = llm(message)
    print('PROCESSED')
    print(result)

    return jsonify({'response':result})



@app.route('/audio/<fetext>')
def send_audio(fetext):

    print('Message sent , converting to audio')
    # Text to be converted to speech
    text = fetext
    # Choose the language and voice
    language = 'te'
    # Passing the text, language, and voice to the engine
    tts = gTTS(text=text, lang=language, slow=False,)
    audio_path = 'output.mp3'
    # Save the converted audio to a file
    tts.save(audio_path)

    
    return send_file(audio_path, as_attachment=True)
    

if __name__ == '__main__':
    app.run(debug=True)
