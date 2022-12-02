import React, { Component } from "react";
import { UncontrolledCarousel, Button } from "reactstrap";
import HomeData from "./HomeDataComponent";
import Donor from "./DonorComponent";
import Find from "./FindComponent";
import Request from "./RequestComponent";
import { Link } from "react-router-dom";
import Header from "./HeaderComponent";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDonorOpen: false,
      isFindOpen: false,
      isReqOpen: false
    };
    this.toggleDonorOpen = this.toggleDonorOpen.bind(this);
    this.toggleReqOpen = this.toggleReqOpen.bind(this);
    this.toggleFindOpen = this.toggleFindOpen.bind(this);
  }

  toggleDonorOpen() {
    this.setState({ isDonorOpen: !this.state.isDonorOpen });
  }

  toggleReqOpen() {
    this.setState({ isReqOpen: !this.state.isReqOpen });
  }

  toggleFindOpen() {
    this.setState({ isFindOpen: !this.state.isFindOpen });
  }

  render() {
    return (
      <React.Fragment>
        <Header
          isLoggedIn={this.state.isLoggedIn}
          toggleLoggedIn={this.toggleLoggedIn}
        />
        <UncontrolledCarousel items={this.props.carousel} className="corou"/> <br />
        <div className="row ml-auto">
          <div className="col-12 col-md-4">
            <Button color="primary" size="lg" onClick={this.toggleDonorOpen}>
              Become a donor
            </Button>
          </div>
          <div className="col-12 col-md-4">
            {/* <Button color="primary" size="lg" onClick={this.toggleFindOpen}> */}
            <Link to="/result">
            <Button color="primary" size="lg">
              Find a Donor
            </Button>
            </Link>
          </div>
          <div className="col-12 col-md-4">
            <Button color="primary" size="lg" onClick={this.toggleReqOpen}>
              Request for Blood
            </Button>
          </div>
        </div>
        <br />
        <HomeData />
        <Donor
          isDonorOpen={this.state.isDonorOpen}
          toggleDonorOpen={this.toggleDonorOpen}
        />
        <Find
          isFindOpen={this.state.isFindOpen}
          toggleFindOpen={this.toggleFindOpen}
        />
        <Request
          isReqOpen={this.state.isReqOpen}
          toggleReqOpen={this.toggleReqOpen}
        />
      </React.Fragment>
    );
  }
}

export default Home;
