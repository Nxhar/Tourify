import React, { useState, useEffect } from 'react';
import 'regenerator-runtime/runtime';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import SendIcon from '@mui/icons-material/Send';
import { SyncLoader } from 'react-spinners';
import '../Nav/nav.css';
import { useSpeechSynthesis } from 'react-speech-kit';

import ChatbotIcon from '../assets/chatboticon.png';
import { async } from 'regenerator-runtime';

function VoiceChat() {

  

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser does not support Speech Recognition.</span>;
  }

  // MESSAGES PART

  const [message, setMessage] = useState('');
  const [loadingResponse, setLoadingResponse] = useState(false)
  const [chatbotMessage, setChatbotMessage] = useState(
    'Hello! I am Mistral, your tour guide to help you navigate through India!'
  );
  

  // EFFECT TO LOG TRANSCRIPT
  

  return (
    <div className="container">
      <MicrophoneIcon
        isListening={listening}
        startListening={SpeechRecognition.startListening}
        stopListening={SpeechRecognition.stopListening}
        transcript={transcript}
        resetTranscript={resetTranscript}
        setChatbotMessage={setChatbotMessage}
        setLoadingResponse={setLoadingResponse}
      />

      <div className="chatSpace" style={{ marginTop: 'auto' }}>
        <img className="chatIcon" src={ChatbotIcon} alt="" />
        <div className="chatText">{loadingResponse ? <SyncLoader /> : chatbotMessage}</div>
      </div>
    </div>
  );
}

const MicrophoneIcon = ({ isListening, startListening, stopListening, transcript, resetTranscript, setChatbotMessage, setLoadingResponse }) => {
  const [listening, setListening] = useState(false);
  const {speak} = useSpeechSynthesis()

  const handleStartListening = () => {
    resetTranscript();
    setListening(true);
    startListening();

  };

  const getResponse = async () => {
    // LOGIC TO GET A RESPONSE
    setLoadingResponse(true)
    let response = '';

    const prompt_template = `
    You are Mistral, an AI assistant that helps answers queries about Tourism and Culture in India within 100 words, only when asked. 
    You are also able to chat with the user like a normal chatbot.
    Question : ${transcript}
    Answer : 
    `
    
    let prev_text = prompt_template;
    let generated_text = '';
    let resp;

    try {
      const response = await fetch('http://127.0.0.1:5000/message', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: prompt_template }),
      });

      resetTranscript();

      const data = await response.json();
      console.log(data)

      
      setChatbotMessage(data['response']);
      setLoadingResponse(false)

      return data['response']
    } catch (error) {
      console.error('Error sending message:', error);
    }
  }

  const handleStopListening = async () => {
    stopListening();
    setListening(false);

    // TIME TO FETCH A RESPONSE FRM BACKEND
    const response = await getResponse()

    setChatbotMessage(response)
    speak({text: response})
  };

  return (
    <div className={`microphone-container ${isListening ? 'listening' : ''}`}>
      <div className="microphone-icon" onClick={listening ? handleStopListening : handleStartListening}>
        <div className="mic-body"></div>
        <div className="mic-stem"></div>
        <div className="shine"></div>
      </div>
      <div className="speakTo">Speak with Mistral!</div>
      <div className="note" style={{marginTop:'-14px'}}>Click on the Mic again to get a response.</div>
      <div className="" style={{marginBottom:'20px'}}>You said : {transcript}</div>
      
    </div>
  );
};

export default VoiceChat;
