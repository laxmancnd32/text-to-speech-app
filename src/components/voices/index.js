import React, { useEffect, useState } from 'react';
import VoiceItem from "./voiceItem";

import { getVoices } from '../../apiService/api';

import "./style.scss";

const Voices = () => {
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        fetchVoices();
    }, [])

    const fetchVoices = async () => {
        try {
            const { voices = [] } = await (await getVoices()).json();
            setVoices(voices);
        } catch(err) {
        }
    }

    return (
        <div className="voices-container">
            <div className="title">Voices</div>
            <div className="voice-list">
                {voices?.map((voice, i) => {
                    return (
                        <React.Fragment key={`${i}`}>
                            <VoiceItem voice={voice} />
                        </React.Fragment>
                    )
                })
                }
            </div>
        </div>
      );
}

export default Voices;