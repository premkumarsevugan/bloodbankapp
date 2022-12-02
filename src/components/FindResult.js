import React, { useState } from "react";
import Header from "./HeaderComponent";
import {
    Form,
    FormGroup,
    Input,
    Label,
    Modal,
    ModalBody,
    ModalHeader,
    Button,
    Row,
    Col
  } from "reactstrap";
import csc from "country-state-city";
import axios from "axios";
const FindResult = () =>{
    const [resview,setResview] = useState(false);
    const [selectedState,setSelectedState]=useState("");
    const [city,setCity]=useState("");
    const [need,setNeed] = useState("");
    const [group,setGroup] = useState("");
    const[data,setData]=useState([]);
    const states = csc
      .getStatesOfCountry("IN")
      .map((state) => <option value={state.isoCode}>{state.name}</option>);
    const cities = csc
      .getCitiesOfState("IN", `${selectedState}`)
      .map((city) => <option value={city.name}>{city.name}</option>);
      const resultShow = (e) =>{
        e.preventDefault();
        console.log(selectedState,city,need,group);
        setResview(true);
        const config = {
          headers:{
            'content-Type': 'application/json'
          }
        }
        axios.post("https://1ddd-117-193-28-201.in.ngrok.io/donor/retrieve-donors/O%2B/Tamil%20Nadu/Coimbatore/Blood",config)
        .then((res) => setData(res.data.data))
        .catch(err => console.log(err))

      }
    return(
        <div>
            <Header />
            <h1 className="heading">Enter The Details To Search</h1>
            <Form className="mt-3">
        <FormGroup row>
            <div className="col-3"></div>
          <Label htmlFor="bloodgroup" md={3}>
            Blood Group :
          </Label>
          <Col md={3}>
            <Input
              required
              type="select"
              id="bloodgroup"
              name="bloodgroup"
            //   value={this.state.bloodgroup}
              onChange={(e)=> setGroup(e.target.value)}
            >
              <option></option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
            </Input>
          </Col>
          <div className="col-3"></div>
        </FormGroup>
        <Row form>
        <div className="col-3"></div>
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="state">State</Label>
              <Input
                required
                type="select"
                id="state"
                name="state"
                value={selectedState}
                onChange={(e)=> setSelectedState(e.target.value)}
              >
                <option></option>
                {states}
              </Input>
            </FormGroup>
          </Col>
          <Col md={3}>
            <FormGroup>
              <Label htmlFor="city">City</Label>
              <Input
                required
                type="select"
                id="city"
                name="city"
                value={city}
                onChange={(e)=>setCity(e.target.value)}
              >
                <option></option>
                {cities}
              </Input>
            </FormGroup>
          </Col>
          <div className="col-3"></div>
        </Row>
        <Row form>
        <div className="col-3"></div>
          <p md={2}>Covid-19 Plasma Donor?</p>
          <Col md={2}>
            <FormGroup check>
              <Label check>
                <Input
                  required
                  type="radio"
                  name="coviddonor"
                //   value="yes"
                  onChange={(e) => setNeed("plasma")}
                />
                Yes
              </Label>
            </FormGroup>
          </Col>
          <Col md={2}>
            <FormGroup check>
              <Label check>
                <Input
                  type="radio"
                  value="no"
                  name="coviddonor"
                  onChange={(e) => setNeed("blood")}
                />
                No
              </Label>
            </FormGroup>
          </Col>
          <div className="col-3"></div>
        </Row>
        <Row>
        <div className="col-3"></div>
        <div className="text-center mb-2">
        <Button type="submit" color="primary" onClick={resultShow}>
          Find Donor
        </Button>
        </div>
        </Row>
        
      </Form>
      {resview ? (<div>
        {/* <table>
            <th>
                <td md={3}>S.No</td>
                <td md={3}>Name</td>
                <td md={3}>Blood</td>
                <td md={3}>Mobile</td>
            </th>
        </table> */}
        <h1 className="heading">Available Donars</h1>
        <div className="row">
        <div className="col-2 t-h"></div>
            <div className="col-2 t-h">S.No</div>
            <div className="col-2 t-h">Name</div>
            <div className="col-2 t-h">Blood</div>
            <div className="col-2 t-h">Mobile</div>
            <div className="col-2 t-h"></div>
        </div>
        {data.map((item,index) => (<div className="row">
          <div className="col-2 item"></div>
          <div className="col-2 item">{index+1}</div>

            <div className="col-2 item">{item.fullName}</div>
            <div className="col-2 item">{item.bloodGroup}</div>
            <div className="col-2 item">{item.mobileNumber}</div>
            <div className="col-2 item"></div>
        </div>))}
      </div>):null}
      </div>
      
    );
}
export default FindResult;