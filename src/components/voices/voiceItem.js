const VoiceItem = (props) => {
    const { voice = {}} = props;
    return (
        <div className={'voice-item'}>
            <div className="name-wrapper">
                <span>{voice?.name}</span>
            </div>
            <div className="voice-labels">
                {Object.values(voice?.labels).map((label) => {
                    return <label className="voice-label">{label}</label>
                })
                }
            </div>
            
        </div>
    )
                
}

export default VoiceItem;