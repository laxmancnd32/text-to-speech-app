import { useState } from "react";
import TextArea from "../../common/textArea";
import Voices from "../../components/voices";
import Button from "../../common/button";
import Header from "../header";
import VoiceItem from "../../common/voiceItem";
import ReactPlayer from "react-player";

import { getSpeechFromText } from '../../apiService/api';

import strings from '../../i18n/en'

import { isEmpty } from "lodash";

import "./style.scss";


const TtsContainer = () => {
    const [userInput, setUserInput]= useState('');
    const [selectedVoice, setSelectedVoice] = useState({});
    const [textToSpeechObject, setTextToSpeechObject] = useState({});
    const [isConverting, setIsConverting] = useState(false);

    const convertToSpeech = async () => {
        try {
            setIsConverting(true);
            let payload = {
                "text": userInput,
                "voice_settings": {
                    "stability": 0.5,
                    "similarity_boost": 0.75,
                    "style": 0
                }
            }
            const audioBlob = await (await getSpeechFromText(selectedVoice?.voice_id, payload)).blob();
            const audioUrl = URL.createObjectURL(audioBlob);

            setTextToSpeechObject({
                ...selectedVoice,
                preview_url: audioUrl
            })
            setIsConverting(false);
        } catch(err){
            setIsConverting(false);
        }
    }

    const handleOnChange = (text = '') => {
        setUserInput(text);
    }

    return (
        <div className="tts-container">
            <div className="tts-main">
                <Header />
                {!isEmpty(selectedVoice) &&
                    <div className="selected-voice-wrapper">
                        <div className="selected-voice-title">{`Selected Voice`}</div>
                        <VoiceItem isSelected={false} voice={selectedVoice} />
                    </div>
                }
                <div className="tts-input">
                    <TextArea placeholder={strings?.textPlaceholder}onChange={handleOnChange} />
                    <div className="actions">
                        <div className="converted-speech-player">
                                <ReactPlayer
                                    url={textToSpeechObject?.preview_url}
                                    playing={true}
                                    controls={!isEmpty(textToSpeechObject)}
                                    width="100%"
                                    height="38.5px"
                                    config={{
                                        file: { attributes: { controlsList: 'nodownload'}}
                                    }}
                                />
                        </div>
                        <Button
                            label={`Convert to speech`}
                            onClick={convertToSpeech}
                            loading={isConverting}
                            disabled={userInput?.length <= 0 || isConverting}
                        />
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <Voices selectedVoice={selectedVoice} onVoiceSelect={(voice) => setSelectedVoice(voice)} />
            </div>
        </div>
      );
}

export default TtsContainer;