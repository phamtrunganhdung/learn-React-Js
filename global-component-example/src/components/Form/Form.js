import "../Form/Form.scss";
import InputComponent from "./Input/InputComponent";
import { useEffect, useRef, useState } from "react";
const Form = () => {
  const inputRef = useRef();
  const [text, setText] = useState("hello");
  const [number, setNumber] = useState(123);
  const [checkedCheckbox, setCheckedCheckbox] = useState(true);
  const handleOnChangeTextInput = (e) => {
    setText(e.target.value);
  };

  const handleOnChangeNumberInput = (e) => {
    setNumber(e.target.value);
  };

  const handleOnChangeCheckbox = (e) => {
    setCheckedCheckbox(!checkedCheckbox);
  };

  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div className="form">
      <InputComponent
        ref={inputRef}
        type="text"
        className="input-text"
        value={text}
        id="text-input"
        onChange={handleOnChangeTextInput}
      />

      <InputComponent
        type="number"
        className="input-number"
        value={number}
        onChange={handleOnChangeNumberInput}
      />

      <InputComponent
        type="checkbox"
        className="checkbox"
        checked={checkedCheckbox}
        onChange={handleOnChangeCheckbox}
      />

      <ul>
        <li>
          <InputComponent type="radio" className="radio" id="radio1" />
        </li>
        <li>
          <InputComponent type="radio" className="radio" id="radio2" />
        </li>
      </ul>
    </div>
  );
};

export default Form;
