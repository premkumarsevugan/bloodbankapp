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
const RequestList = () =>{
  const config = {
    headers:{
      'content-Type': 'application/json'
    }
  }
  axios.post("https://1ddd-117-193-28-201.in.ngrok.io/donor/retrieve-donors/O%2B/Tamil%20Nadu/Coimbatore/Blood",config)
  .then((res) => setData(res.data.data))
  .catch(err => console.log(err))
    const [resview,setResview] = useState(true);
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
        

      }
    return(
        <div>
           
      {resview ? (<div className="mb-3">
        {/* <table>
            <th>
                <td md={3}>S.No</td>
                <td md={3}>Name</td>
                <td md={3}>Blood</td>
                <td md={3}>Mobile</td>
            </th>
        </table> */}
        <h1 className="heading mb-3">Available Donars</h1>
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
export default RequestList;