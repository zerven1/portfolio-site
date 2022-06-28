import './index.scss'
import Loader from "react-loaders"
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef} from 'react'
import emailjs from '@emailjs/browser'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(()=>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },3000)
    })
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs
            .sendForm(
                'service_6f40use',
                'template_9l49pnw',
                refForm.current,
                'ez6o58vziebSae3SN'
            )
            .then(
                () => {
                    alert('Message successfully sent!')
                    window.location.reload(false);
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
    }
    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters 
                        letterClass={letterClass}
                        strArray={['C','o','n','t','a','c','t',' ','m','e']}
                        idx={15}
                        />
                    </h1>
                    <p>I am a beginner frontend developer looking for continuous development opportunities.
                   I am looking for a company offering interesting projects based on the latest technologies.</p>
                    <div className='contact-form'>
                        <form  ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' requred />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' requred />
                                </li>
                                <li>
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li>
                                    <textarea placeholder="Message"  name="message" required />
                                </li>
                                <li>
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>

                    </div>
                </div>
                <div className='info-map'>
                    Tomasz Grzebieniak,
                    <br/>
                    Poland
                    <br/>
                    Rzeszów 
                    <br/>
                    <span>tomek989831@gmail.com</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[50.0412,21.9991]} zoom={13}>
                        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[50.0412,21.9991]}>
                            <Popup> There is my location</Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )

}

export default Contact