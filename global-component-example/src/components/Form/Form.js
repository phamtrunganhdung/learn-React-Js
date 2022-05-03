import "../Form/Form.scss";
import logo from "../../logo.svg";
import InputComponent from "./Input/InputComponent";
import { useEffect, useRef, useState } from "react";
const Form = () => {
  const inputRef = useRef();
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [checkedCheckbox, setCheckedCheckbox] = useState(false);
  const handleOnChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleOnChangeCheckbox = () => {
    setCheckedCheckbox(!checkedCheckbox);
  };

  const handleOnChangePassword = (e) => {
    setPassword(e.target.value);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <div className="container d-flex flex-md-row flex-sm-column flex-lg-row">
      <div className="logo col-md-6 col-md-4 col-sm-12 justify-content-center">
        <img src={logo} alt="logo"></img>
      </div>
      <div className="form d-flex flex-column col-md-6 col-sm-12 align-items-start">
        <p className="pt-2">User Name</p>
        <InputComponent
          ref={inputRef}
          type="text"
          className="input"
          value={userName}
          id="text-input"
          onChange={handleOnChangeUserName}
        />
        <p className="pt-2">Password</p>
        <InputComponent
          type="text"
          className="input"
          value={password}
          id="text-input"
          onChange={handleOnChangePassword}
        />
        <div className="rmb-pass d-flex flex-row justify-content-between">
          <p className="pt-1">Remember Password</p>
          <InputComponent
            type="checkbox"
            className="checkbox"
            checked={checkedCheckbox}
            onChange={handleOnChangeCheckbox}
          />
        </div>
        <div className="button d-flex flex-column justify-content-start">
          <button className="btn btn-primary px-5">Login</button>
          <a href="http://localhost:3000/" className="frg-pass pt-2">
            Forget Password
          </a>
        </div>
      </div>
    </div>
  );
};

export default Form;
