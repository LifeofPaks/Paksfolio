import React,{useEffect, useState} from 'react'
import './Home.css'
import AnimatedLetters from '../AnimatedLetters/AnimatedLetters'
import ProfileImage from '../ProfileImage/ProfileImage'
import Loader from 'react-loaders'


const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ','P','a', 'k', 's', ' ', 'P', 'r', 'o', 'm', 'i', 's', 'e', ]
    const jobArray = [ 'W', 'e', 'b', ' ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.']

    useEffect(()=>{
      setTimeout(()=>{
        return setLetterClass('text-animate-hover')
      }, 4000)
    }, [])

  return (
    <>
      <div className='container home-page'>
          <div className="text-zone">
              <h1> 
                <span className={letterClass}>H</span>
                  <span className={`${letterClass} _12`}>i,</span>
                  <br /> 
                  <span className={`${letterClass} _13`}>I</span>
                  <span className={`${letterClass} _14`}>'m</span>
                  <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
                  <br />
                  <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={22}/>
              </h1>
              <h2>Frontend Developer / JavaScript / React/ Next/ Typescript </h2>
              <div className="hire-me">
                <a href="Paksresume.pdf" download className='flat-button'>View Resume</a>
              </div>
          </div>

        <ProfileImage/>
    </div>
    <Loader type='pacman'/>
    </>
    
  )
}

export default Home 