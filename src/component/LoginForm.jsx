import { render } from "@testing-library/react";
import React from "react";

const LoginForm = () => {
    const handleSubmit = e => {
        e.preventDefault();
        const formData = {
          username: nameEl.current.value,
          email:emailEl.current.value,
          password: passwordEl.current.value,
          rememberMe: rememberMeEl.current.checked,
        }
        // it would be a more completely correct REACT approach
        // to make a JSX component to render formData out to a selector on the HTML
        console.log(formData);
      };
      const nameEl = React.useRef(null);
      const emailEl = React.useRef(null);
      const passwordEl = React.useRef(null);
      const rememberMeEl = React.useRef(null);
    
    return (
        <form onSubmit={handleSubmit}>
       <p> <input type="text" placeholder="Enter your username " className='input'ref={nameEl} /></p>
       <p><input type="email" placeholder="Enter your email ID" className='input' ref={emailEl} /></p>
        <p><input type="password" placeholder="Enter password here" className='input' ref={passwordEl} /></p>

        <label>
          <input type="checkbox" className='checkbox' ref={rememberMeEl} />
          Remember me
        </label>

       <p><button type="submit" className="myButton">Login</button></p>
      </form>
    );
        
}


export default LoginForm;