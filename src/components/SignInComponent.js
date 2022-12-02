import React, { useState } from "react";
import { Redirect, useHistory } from "react-router-dom";
import {
  Modal,
  FormGroup,
  ModalHeader,
  ModalBody,
  Form,
  Label,
  Input,
  Button
} from "reactstrap";
import axios from "axios";

export default function SignIn(props) {
  const [isLoggedIn,setIsLoggedIn] = useState(false)
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: ""
  });
  const history = useHistory();

  function resetModal() {
    setUserInfo({
      email: "",
      password: ""
    });
    props.toggleModalIn();
  }

  function handleSubmitLocal(event) {
    // console.log(userInfo.email,userInfo.password);
    const datas={'emailId':userInfo.email,'password':userInfo.password};
    const config = {
      headers:{
        'content-Type': 'application/json'
      }
    }
    axios.post('https://1ddd-117-193-28-201.in.ngrok.io/login', datas, config)
        .then(response => {
          if(response.data.status === "200"){
            console.log("Success");
            // document.getElementById("mai").style.display="none";
            props.toggleModalIn();
            // setIsLoggedIn(true);
            history.push("/loggedIn")
            // return <Redirect push to="/aboutus" />
          }
        })
        .catch(err => console.log(err));
    event.preventDefault();
  }
  function handleFailure(res) {
    console.log("failed miserably");
  }
  return (
    <Modal isOpen={props.isModalOpenIn} toggle={props.toggleModalIn} id="mai">
      <ModalHeader toggle={resetModal}>Sign In</ModalHeader>
      <ModalBody>
        
        {/* <Button color="primary">Facebook</Button> */}
        <Form onSubmit={handleSubmitLocal}>
          <FormGroup>
            <Label htmlFor="email">Email ID</Label>
            <Input
              type="email"
              value={userInfo.email}
              onChange={(event) =>
                setUserInfo((prevValue) => {
                  return {
                    ...prevValue,
                    email: event.target.value
                  };
                })
              }
              id="email"
              name="email"
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              value={userInfo.password}
              onChange={(event) =>
                setUserInfo((prevValue) => {
                  return {
                    ...prevValue,
                    password: event.target.value
                  };
                })
              }
              id="password"
              name="password"
            />
          </FormGroup>
          <Button type="submit" value="submit" color="primary" >
            Sign In
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
}
