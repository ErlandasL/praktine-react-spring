import React from "react";
import { Link } from "react-router-dom";
import GreetingService from "../services/GreetingService";
import AdminProductRow from "../components/AdminProductRow";

class Admin extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      greetings: [],
    };
    this.deleteGreeting = this.deleteGreeting.bind(this);
  }

  componentDidMount = () => {
    GreetingService.getGreetings().then((res) => {
      console.log(res.data);
      this.setState({ greetings: res.data });
    });
  };

  deleteGreeting = (id) => {
    GreetingService.deleteGreeting(id).then((res) => {
      this.setState({
        greetings: this.state.greetings.filter((g) => g.id !== id),
      });
    });
  };

  render() {
    if (this.state.greetings) {
      return (
        <div className="container">
          <Link to="/admin/add-greeting">
            <button type="button" className="btn btn-success mt-3">
              Add new greeting
            </button>
          </Link>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Image</th>
                <th scope="col">Greeting Person Name</th>
                <th scope="col">Delete Greetings</th>
              </tr>
            </thead>
            <tbody>
              {this.state.greetings.map((item) => (
                <tr key={item.id}>
                  <AdminProductRow
                    id={item.id}
                    imgUrl={item.imgUrl}
                    firstName={item.firstName}
                    lastName={item.lastName}
                  />
                  <td>
                    <button
                      type="button"
                      class="btn btn-danger"
                      onClick={() => this.deleteGreeting(item.id)}
                    >
                      Delete Greeting
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}
export default Admin;
