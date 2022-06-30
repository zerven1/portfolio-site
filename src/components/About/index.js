import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faHtml5, faCss3, faJsSquare, faVuejs, faGitAlt} from '@fortawesome/free-brands-svg-icons'  
import Loader from 'react-loaders'


const About = () => {
    

    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(()=>{
        setTimeout(() =>{
            setLetterClass('text-animate-hover')
        },3000)
    })

    return (
        <>
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                        letterClass={letterClass}
                        strArray={['A','b','o','u','t',' ','m','e']}
                        idx={15}
                     />
                </h1>
                <p>I am a beginner frontend developer looking for continuous development opportunities.
                   I am looking for a company offering interesting projects based on the latest technologies.</p>
                <p>I am characterized by the ability to work in a team and quickly learn new technologies.</p>
                <p>In my projects im using:<br />
                     Vue.js <br />
                     Vuex <br />
                     React <br />
                     Redux<br />
                     Javascript <br />
                     CSS3 <br />
                     SASS <br />
                     Node.js - basic<br />
                     Express.js -basic<br />
                     </p>
            </div>

            <div className='stage-cube-cont'>
                <div className="cubespinner">
                    <div className='face1'>
                        <FontAwesomeIcon icon={faReact } color="#5ED4F4"></FontAwesomeIcon>
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faHtml5 } color="#F06529"></FontAwesomeIcon>
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faCss3 } color="#28A4D9"></FontAwesomeIcon>
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare } color="#EFD81D"></FontAwesomeIcon>
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faVuejs } color="Green"></FontAwesomeIcon>
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faGitAlt } color="black"></FontAwesomeIcon>
                    </div>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )

}

export default About