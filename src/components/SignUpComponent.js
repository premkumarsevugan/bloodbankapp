import emailjs from '@emailjs/browser';
import axios from "axios";
import React, { useRef,useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import {
  Modal,
  FormGroup,
  FormFeedback,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  Button,
  Col,
  Row
} from "reactstrap";

function SignUp(props) {
  const [emailid, setEmail] = useState("");
  const [GottenOtp, setGottenOtp] = useState(0);
  const [Otp, setOtp] = useState("");
  const [verfiedOtp, setVerifiedOtp] = useState(false);
  const [password, setpassword] = useState("");
  const [conpassword, setconpassword] = useState("");
  const [passwordMatches, setpasswordMatches] = useState(false);
  const [showOtp, setShowOtp] = useState(false);
  const [showVerifyBtn, setShowVerifyBtton] = useState(true);
  const [otpMssg, setOtpMssg] = useState("X");
  const [touchedOtp, setTouchedOtp] = useState(false);
  const [buttonmssg,setButtonmssg]=useState("Verify Email");
  const [otpstate,setOtpstate] = useState(false);
  const [otp1,setOtp1] = useState("");
  const [successState,setSuccessStatus] = useState(false);
  const form = useRef();
  // axios.defaults.baseURL='https://1ddd-117-193-28-201.in.ngrok.io/';

  function handleotpChange(e){
      setOtp1(e.target.value);
  }
  function validate(event){
    event.preventDefault();
    if(otp1 === "1234"){
      setVerifiedOtp(true);
      setShowVerifyBtton(false);
    }
   

  }
  function handlepassword(e){
      setpassword(e.target.value)
  }
  function handleconfpassword(e){
    setconpassword(e.target.value);
    if(password === e.target.value){
      setpasswordMatches(true)
    }
    else{
      setpasswordMatches(false)
    }
  }
  function handleEmailChange(e) {
    setEmail(e.target.value);
  }
  function handleSubmitLocal(){

  }
function resetModal() {
  props.toggleModalUp();
  }
  const sendEmail = (e) => {
    e.preventDefault();
    setButtonmssg("Resend Otp");
    setOtpstate(true);
    emailjs.sendForm("service_uiajhjo", "template_0x7gbtg", form.current , "qCTbE4x6HyStqR962")
      .then((result) => {
          alert("Check Your Mail and Put OTP");
      }, (error) => {
          console.log(error.text);
      });
  };
  function finalpush(e){
    e.preventDefault();
    const datas={'emailId':emailid,'password':password};
    // const mydata = JSON.parse(datas);
    const config = {
      headers:{
        'content-Type': 'application/json'
      }
    }
    setSuccessStatus(true);
    if (props.isModalOpenUp) props.toggleModalUp();
    axios.post('https://1ddd-117-193-28-201.in.ngrok.io/signup', datas, config)
        .then(response => console.log(response))
        .catch(err => console.log(err));
    console.log(datas)
  }
  return (
    <Modal isOpen={props.isModalOpenUp} toggle={props.toggleModalUp} id="mai">
      <ModalHeader toggle={resetModal} onClick={() =>{
        // document.getElementById("mai").style.display="none";
        // return <Redirect to="/home"/>
      }}>Sign Up</ModalHeader>
      <ModalBody>
        <form ref={form} onSubmit={sendEmail}>
          <p className="text-center">
            <br /> Use your email address
          </p>
          <FormGroup>
            <Label htmlFor="email">Email ID</Label>
            <Row>
              <Col md={8}>
                <Input
                  type="email"
                  value={emailid}
                  onChange={handleEmailChange}
                  id="email"
                  name="email"
                />
              </Col>
              <Col md={4}>
                {showVerifyBtn ? (
                  <Button size="sm"  color="primary" type="submit">
                    {buttonmssg}
                  </Button>
                ) : (
                  <Button size="sm" color="success" >
                    Verified
                  </Button>
                )}
              </Col>
            </Row>
            
              
              {
                otpstate ? (
                  <Row>
                  <Col md = {8}>
                  <Input
                  type="text"
                  value={otp1}
                  onChange={handleotpChange}
                  id="otp"
                  name="otp"
                  className="mt-3"
                  placeholder="enter your otp"
                  ></Input>
                  </Col>
                  <Col md = {4}>
                    <Button color="primary" className="mt-3" size="sm" type="submit" onClick={validate} >Verify</Button>
                  </Col>
                  </Row>
                ):(<p>Enter your mail above </p>)
              }
              
            
          </FormGroup>
          
        </form>
        <Form onSubmit={finalpush}>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              value={password}
              id="password"
              name="password"
              onChange={handlepassword}
            />
            {password.length > 0 && password.length < 6 ? (
              <Label style={{ color: "red" }}>
                Password should be atleast 6 characters long
              </Label>
            ) : null}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="confirm_password">Confirm Password</Label>
            <Input
              type="password"
              id="confirm_password"
              name="confirm_password"
              value={conpassword}
              onChange={handleconfpassword}
            />
            {conpassword !== "" &&
              (passwordMatches ? (
                <Label style={{ color: "green" }}>Passwords match</Label>
              ) : (
                <Label style={{ color: "red" }}>Passwords don't match</Label>
              ))}
          </FormGroup>
          {verfiedOtp && passwordMatches && password.length > 5 ? (
            <Button type="submit" color="primary" >
              Sign Up
            </Button>
          ) : (
            <Button type="submit" value="submit" disabled={true}>
              Sign Up
            </Button>
          )}
          <p>{
            successState ? (<Label style={{ color: "green" }}>Passwords match</Label>):(<>Yet to succes</>)
          }</p>
        </Form>
      </ModalBody>
    </Modal>
  );
}

export default SignUp;
