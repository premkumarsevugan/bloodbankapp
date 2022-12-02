import React, {Component} from 'react';
import Header from './HeaderComponent';

class Contact extends Component{
  render() {
    return(
        <div style={{ backgroundImage: "url(assets/bloodBg.jpg)" }}>
          <Header />
        </div>
    );
  }
}

export default Contact;