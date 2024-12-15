import ReactPlayer from "react-player";
import { FaPlay, FaPause } from 'react-icons/fa';

import { useState } from "react";
import "./style.scss";

const PlayAudioButton = (props) => {
    const [isPlaying, setIsPlaying] = useState(false);
    
    const handlePlayPause = () => {
        setIsPlaying((prev) => !prev);
    }

    return (
        <>
            <button className="play-audio-btn" onClick={handlePlayPause}>
                {isPlaying ? <FaPause /> : <FaPlay />}
            </button>
            <ReactPlayer
                url={props?.url}
                playing={isPlaying}
                controls={false}
                width="0"
                height="0"
                config={{
                    file: { attributes: { controlsList: 'nodownload' } }
                }}
                onEnded={() => setIsPlaying(false)} 
            />
      </>
    );
}

export default PlayAudioButton;