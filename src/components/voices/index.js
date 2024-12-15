import React, { useEffect, useState } from 'react';
import VoiceItem from "../../common/voiceItem";

import { getVoices } from '../../apiService/api';

import "./style.scss";

const Voices = (props) => {
    const [voices, setVoices] = useState([]);

    useEffect(() => {
        fetchVoices();
    }, [])

    const fetchVoices = async () => {
        try {
            const { voices = [] } = await (await getVoices()).json();
            setVoices(voices);
            props?.onVoiceSelect(voices[0]);
        } catch(err) {
        }
    }

    return (
        <div className="voices-container">
            <div className="title">Voices</div>
            <div className="voice-list">
                {voices?.map((voice, i) => {
                    const isSelected = props?.selectedVoice?.voice_id == voice?.voice_id;
                    return (
                        <React.Fragment key={`${i}`}>
                            <VoiceItem isSelected={isSelected} voice={voice} onVoiceSelect={props?.onVoiceSelect} />
                        </React.Fragment>
                    )
                })
                }
            </div>
        </div>
      );
}

export default Voices;