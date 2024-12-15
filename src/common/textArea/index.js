import { useEffect, useRef, useState, useMemo } from "react";

import { debounce } from 'lodash';

import "./style.scss";

const InputBox = (props) => {
  const [value, setValue] = useState('')
  const textAreaRef = useRef(null);

  const { onChange = () => {}, debounceDuration = 500 } = props;

  useEffect(() => {
    textAreaRef?.current?.focus()
  }, []);

  const debouncedOnInputChange = useMemo(
    () => debounce(onChange, debounceDuration),
    [onChange, debounceDuration]
  );

  useEffect(() => {
    return () => {
      debouncedOnInputChange.cancel();
    };
  }, [debouncedOnInputChange]);

  const onChangeHandler = (e) => {
    const text = e?.target?.value || '';
    setValue(text);
    debouncedOnInputChange(text);
  }

  return (
    <textarea
      className="text-area"
      ref={textAreaRef}
      value={value}
      placeholder={props?.placeholder}
      onChange={onChangeHandler}
    />
  );
}

export default InputBox;