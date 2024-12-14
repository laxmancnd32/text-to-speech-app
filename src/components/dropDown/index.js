import React, { useEffect, useState, useRef } from 'react';

import './style.scss';

const DropDownSelect = (props) => {
  const {
    dropDownOptions = [],
    onClickAction = () => {},
    title = '',
    dropDownStyle = {},
    selectBy = 'value',
    defaultSelectedValue = {},
    defaultText = '',
    renderComponent = () => {},
    onDropDownToggle = () => {},
    className = '',
    automationId = '',
    dropDownContentAutomationId = '',
    disabled = false,
    displaySelected = true,
    classNameForSelectedOption = '',
    classNameForDropDownOptions = '',
    optionsUniqueBy = ''
  } = props;
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  const [dropDownValue, setDropDownValue] = useState(() => defaultSelectedValue);
  const dropDownRef = useRef(null);

  useEffect(() => {
    if (isDropDownOpen) {
      document.body.addEventListener('click', clickListener);

      return () => {
        document.body.removeEventListener('click', clickListener);
      };
    }
  }, [isDropDownOpen]);

  useEffect(() => {
    setDropDownValue(defaultSelectedValue);
  }, [defaultSelectedValue]);

  const clickListener = (event) => {
    const currentDropRef = dropDownRef.current;
    const isSourcePopover = currentDropRef && currentDropRef.contains && currentDropRef.contains(event.target);
    // if clicked source is parent or the popover-content, do not toggle dropdown.
    if (!currentDropRef || isSourcePopover) {
      return;
    }
    closeDropDown();
  };

  const handleDropDownOptionClick = (e, dropDownOption = {}) => {
    e.stopPropagation();
    setDropDownValue(dropDownOption);
    toggleDropDown(isDropDownOpen);
    onClickAction(dropDownOption);
  };

  const toggleDropDown = (isDropDownOpen) => {
    onDropDownToggle(!isDropDownOpen);
    setIsDropDownOpen(!isDropDownOpen);
  };

  const closeDropDown = () => {
    setIsDropDownOpen(false);
    onDropDownToggle(false);
  };

  return (
    <React.Fragment>
      <div className={'drop-down-container' + ` ${className}` + (isDropDownOpen ? ' open' : '')} style={dropDownStyle}>
        {title.length > 0 && <div className="drop-down-title">{title}</div>}
        <div
          className={'select-wrapper' + (disabled ? ' disable' : '')}
          ref={dropDownRef}
          onClick={() => toggleDropDown(isDropDownOpen)}
          data-automation-id={automationId}
        >
          <div className={'drop-down-select'}>
            {renderComponent(dropDownValue)}
            <div
              className={`selected-option-txt ${!dropDownValue[selectBy] ? 'empty' : ''} ${classNameForSelectedOption}`}
              data-automation-id={'selected-dropdown-value'}
            >
              {dropDownValue[selectBy] || defaultText}
              {dropDownValue?.option_tag?.length > 0 && <span className="option-tag">{dropDownValue?.option_tag}</span>}
            </div>
            {/* <DocViewerIcon iconType={isDropDownOpen ? 'chevron-up' : 'chevron-down'} /> */}
          </div>
          {isDropDownOpen && (
            <div className="drop-down-options" data-automation-id={dropDownContentAutomationId}>
              {dropDownOptions.map((dropDownOption) => {
                const optionTxt = dropDownOption[selectBy];
                const optionTag = dropDownOption?.option_tag || '';
                const dropDownSelectedValue = dropDownValue[selectBy] || defaultText;
                const selectByUniqueId = optionsUniqueBy?.length
                  ? dropDownOption[optionsUniqueBy] === dropDownValue[optionsUniqueBy]
                  : true;
                const isOptionSelected = displaySelected && optionTxt === dropDownSelectedValue && selectByUniqueId;

                return (
                  <div
                    key={`$drop-option-${optionTxt}`}
                    className={`option ${isOptionSelected ? 'selected' : ''}`}
                    onClick={(e) => handleDropDownOptionClick(e, dropDownOption)}
                  >
                    {renderComponent(dropDownOption)}
                    <span className={`option-label ${classNameForDropDownOptions}`}>
                      {optionTxt}
                      {optionTag?.length > 0 && <span className="option-tag">{optionTag}</span>}
                    </span>
                    {isOptionSelected && (
                      <div className="tick-wrapper">
                        {/* <DocViewerIcon iconType={'tick'} /> */}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default DropDownSelect;
