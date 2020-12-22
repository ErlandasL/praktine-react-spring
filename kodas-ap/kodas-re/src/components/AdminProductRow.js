import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class AdminProductRow extends Component {
  render() {
    const { id, firstName, lastName, imgUrl } = this.props;
    return (
      <React.Fragment>
        <th scope="row">{id}</th>
        <td>
          <img className="h-50" alt="laptop" src={imgUrl}></img>
        </td>

        <td>
          <Link to={`/admin/update-product/${id}`}>
            {firstName + " " + lastName}
          </Link>
        </td>
      </React.Fragment>
    );
  }
}
