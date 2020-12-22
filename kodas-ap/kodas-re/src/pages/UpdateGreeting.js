import React, { Component } from "react";
import { Link } from "react-router-dom";
import GreetingService from "../services/GreetingService";

class UpdateProduct extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      imgUrl: "",
      text: "",
      audioUrl: "",
      dateAndTime: "",
    };

    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.changeImgUrlHandler = this.changeImgUrlHandler.bind(this);
    this.changeTextHandler = this.changeTextHandler.bind(this);
    this.changeAudioUrlHandler = this.changeAudioUrlHandler.bind(this);
    this.changeDateAndTimeHandler = this.changeDateAndTimeHandler.bind(this);
    this.updateGreeting = this.updateGreeting.bind(this);
  }
  // Event Handler Simple method to test after

  //   onChange = e => {
  //     const {name,value} = e.target;
  //     this.setState({
  //     [name]:value
  //     })
  //     }

  changeFirstNameHandler = (event) => {
    this.setState({ firstName: event.target.value });
  };

  changeLastNameHandler = (event) => {
    this.setState({ lastName: event.target.value });
  };

  changeImgUrlHandler = (event) => {
    this.setState({ imgUrl: event.target.value });
  };

  changeTextHandler = (event) => {
    this.setState({ text: event.target.value });
  };

  changeAudioUrlHandler = (event) => {
    this.setState({ audioUrl: event.target.value });
  };

  changeDateAndTimeHandler = (event) => {
    this.setState({ dateAndTime: event.target.value });
  };

  componentDidMount() {
    GreetingService.getGreetingById(this.state.id).then((res) => {
      let greeting = res.data;
      this.setState({
        firstName: greeting.firstName,
        lastName: greeting.lastName,
        imgUrl: greeting.imgUrl,
        audioUrl: greeting.audioUrl,
        text: greeting.text,
        dateAndTime: greeting.dateAndTime,
      });
    });
  }

  updateGreeting = (e) => {
    e.preventDefault();
    let greeting = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      imgUrl: this.state.imgUrl,
      audioUrl: this.state.audioUrl,
      text: this.state.text,
      dateAndTime: this.state.dateAndTime,
    };
    console.log("greeting => " + JSON.stringify(greeting));
    GreetingService.updateGreeting(greeting, this.state.id).then((res) => {
      this.props.history.push("/admin");
    });
  };

  render() {
    return (
      <div className="container">
        <h3 className="text-center mt-5">Update Greeting</h3>
        <form method="post">
          <div className="form-group font-weight-bold mt-5">
            <label>First Name</label>
            <input
              type="text"
              name="first-name"
              className="form-control"
              placeholder="first-name"
              value={this.state.firstName}
              onChange={this.changeFirstNameHandler}
            />
          </div>
          <div className="form-group font-weight-bold mt-5">
            <label>Last Name</label>
            <input
              type="text"
              name="last-name"
              className="form-control"
              placeholder="last-name"
              value={this.state.lastName}
              onChange={this.changeLastNameHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>Image Url</label>
            <input
              type="url"
              name="imgUrl"
              className="form-control"
              placeholder="Image url, max 255 characters long"
              value={this.state.imgUrl}
              onChange={this.changeImgUrlHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>Text (3 characters minimum)</label>
            <input
              type="text"
              name="details"
              className="form-control"
              placeholder="text"
              value={this.state.text}
              onChange={this.changeTextHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>Audio Url</label>
            <input
              type="url"
              className="form-control"
              name="audio-url"
              placeholder="Audio url, max 255 characters long"
              value={this.state.audioUrl}
              onChange={this.changeAudioUrlHandler}
            />
          </div>
          <div className="form-group font-weight-bold">
            <label>Date And Time</label>
            <input
              type="text"
              name="quantity"
              className="form-control"
              placeholder="Format example dd/mm/yyyy 00:00"
              value={this.state.dateAndTime}
              onChange={this.changeDateAndTimeHandler}
            />
          </div>
          <Link to="/admin">
            <button type="button" className="btn btn-success mr-3">
              Save
            </button>
          </Link>
          <Link to="/admin">
            <button type="button" className="btn btn-light">
              Cancel
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

export default UpdateProduct;
