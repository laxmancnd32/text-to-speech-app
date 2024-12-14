import strings from '../../i18n/en.js';

import "./style.scss";

const Header = () => {
    return (
        <header className="header-container">
            <div className="head-section header-left-section">
                <label>{strings?.textToSpeechLabel}</label>
            </div>
            <div className="head-section header-center-section"></div>
            <div className="head-section header-right-section"></div>
        </header>
      );
}

export default Header;