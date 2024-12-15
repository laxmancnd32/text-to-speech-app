import ReactPlayer from "react-player";
import PlayAudioButton from "../playAudioButton";

import "./style.scss";

const VoiceItem = (props) => {
    const { voice = {}, onVoiceSelect = () => {}, playing = false} = props;
    const audioUrl = voice?.preview_url || '';
    return (
        <div className={'voice-item'} onClick={() => onVoiceSelect(voice)}>
            <div className="name-wrapper">
                <div>{voice?.name || ''}</div>
                <PlayAudioButton url={audioUrl} />
                {props?.isSelected && <div className="selected">
                    <div className="tick">&#10003;</div>
                </div>}
            </div>
            <div className="voice-labels">
                {Object.values(voice?.labels ?? []).map((label, i) => {
                    return <label className="voice-label" key={`${i}`}>{label}</label>
                })
                }
            </div>
            
        </div>
    )
                
}

export default VoiceItem;