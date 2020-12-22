import React, { Component } from "react";
import { Link } from "react-router-dom";
import { CardWrapper } from "./CardWrapper";

export default class Greeting extends Component {
  render() {
    const {
      id,
      imgUrl,
      text,
      firstName,
      lastName,
      audioUrl,
      dateAndTime,
    } = this.props;
    return (
      <CardWrapper className="col-sm-6 col-md-6 col-lg-6 col-xl-6">
        <div className="card">
          <div className="img-container">
            <div className="img-container">
              <Link to={`text/greeting/${id}`}>
                <img src={imgUrl} alt="greeting" className="card-img-top" />
              </Link>
            </div>
          </div>
          <div className="card-body">
            <h3 className="card-title">{firstName + " " + lastName}</h3>
            <h5 className="card-title">{lastName}</h5>
            <p className="text-center card-text">{text}</p>
            <p className="text-center">Date And Time {dateAndTime}</p>
            <p className="text-center">Audio Url: {audioUrl}</p>
            <Link to={`text/greeting/${id}`} className="btn btn-primary">
              Details
            </Link>
          </div>
        </div>
      </CardWrapper>
    );
  }
}
// Product.propTypes = {
//   product: PropTypes.shape({
//     id: PropTypes.number,
//     imgUrl: PropTypes.string,
//     price: PropTypes.number,
//     details: PropTypes.string,
//     model: PropTypes.string,
//     brand: PropTypes.string,
//     inCart: PropTypes.bool,
//   }).isRequired,
// };
