import React from 'react';

import {BsFillPlayFill, BsPauseFill} from 'react-icons/bs';
import {meal} from '../../constants';
import './Intro.css';

const Intro = () => {
  const [Video, setVideo] = React.useState(false);
  let vidRef = React.createRef();
  let handleVid = () => {
    setVideo((prevState)=>!prevState);

    if(Video){
      vidRef.current.pause();
    }else{
      vidRef.current.play();
    }
  }
  return (
    <section id='intro-section' className='relative'>
      <div className='intro-wrapper'>
        <div className='intro-content'>
          <video
          ref={vidRef}
          src={meal}
          type="video/mp4"
          loop
          controls={false}
          muted
          
          ></video>
          <div className='video-over-lay bg-black/50 absolute top-0 left-0 w-full h-full flex items-center justify-center'>
            <div className='button-border relative flex items-center justify-center rounded-full cursor-pointer border-[1px] p-6 border-[#DCCA87] ' onClick={()=>handleVid()}>
            {Video?<BsPauseFill color='#fff' fontSize={20}/>:<BsFillPlayFill color='#fff' fontSize={20} />}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default Intro;
