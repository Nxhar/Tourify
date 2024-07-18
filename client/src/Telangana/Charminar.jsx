import React, { useState } from 'react'

function Charminar() {

    const [iframe, setIframe] = useState(true)

  return (
    <div>
        <h2 className='Tour'>Let's go on a Virtual Tour to Charminar!</h2>
        <div className="Options">
            <div className="option1" onClick={() => setIframe(true)}>
                Tour Yourself
            </div>
            <div className="option2" onClick={() => setIframe(false)}>
                Tour Guide
            </div>
        </div>


        {
            iframe ? 
            (<div style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'400px'}}> 
                <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!4v1701510687870!6m8!1m7!1sRydFL0nb5bIAAAQIt6BJSA!2m2!1d17.36185194173511!2d78.47471785695222!3f184.37234605834428!4f5.927187784776535!5f0.7820865974627469"
                width="1400"
                height="720"
                style={{ border: '0' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>        
             </div> ) :  
            (<div style={{display:'flex', justifyContent:'center', alignItems:'center', marginBottom:'400px'}}> 
                <iframe width="999" height="562" src="https://www.youtube.com/embed/qctv8iV7PeE" title="Charminar 360˚VR I Full Walk-through I 5K Video" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
             </div> )

        }

        
    </div>
  )
}

export default Charminar