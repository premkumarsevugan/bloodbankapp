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
const FindResult = () =>{
    const [resview,setResview] = useState(false);
    const [selectedState,setSelectedState]=useState("");
    const [city,setCity]=useState("");
    const [need,setNeed] = useState("");
    const [group,setGroup] = useState("");
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
      }
    return(
        <div>
            <Header />
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
        <div className="text-center">
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
        <div className="row">
            <div className="col-3">S.No</div>
            <div className="col-3">Name</div>
            <div className="col-3">Blood</div>
            <div className="col-3">Mobile</div>
        </div>
      </div>):null}
      </div>
      
    );
}
export default FindResult;