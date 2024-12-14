import { useState } from "react";
import TextArea from "../textArea";
import DropDownSelect from "../../components/dropDown";
import Voices from "../../components/voices";
import Button from "../../components/button";
import Header from "../header";

import strings from '../../i18n/en'

import "./style.scss";


const TtsContainer = () => {
    const [userInput, setUserInput]= useState('');

    const onDropDownToggle = () => {
    }

    const onDropDownClick = () => {
    }

    const convertToSpeech = () => {
        
    }

    const handleOnChange = (text = '') => {
        setUserInput(text);
    }

    return (
        <div className="tts-container">
            <div className="tts-main">
                <Header />
                <div className="tts-input">
                    <TextArea placeholder={strings?.textPlaceholder}onChange={handleOnChange} />
                    <div className="actions">
                        <Button label={`Convert to speech`} onClick={convertToSpeech} />
                    </div>
                </div>
            </div>
            <div className="sidebar">
                <Voices />
            </div>
        </div>
      );
}

export default TtsContainer;