import ReactPlayer from "react-player";

const VoiceItem = (props) => {
    const { voice = {}} = props;
    const audioUrl = voice?.preview_url || '';
    return (
        <div className={'voice-item'}>
            <div className="name-wrapper">
                <div>{voice?.name}</div>
                <ReactPlayer
                    url={audioUrl}
                    playing={false}
                    controls={true}
                    width="50%"
                    height="30px"
                    config={{
                        file: { attributes: { controlsList: 'nodownload'}} // Optionally, prevent download}
                    }}
                />
            </div>
            <div className="voice-labels">
                {Object.values(voice?.labels).map((label, i) => {
                    return <label className="voice-label" key={`${i}`}>{label}</label>
                })
                }
            </div>
            
        </div>
    )
                
}

export default VoiceItem;