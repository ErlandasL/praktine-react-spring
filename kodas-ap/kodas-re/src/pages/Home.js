import React, { Component } from "react";
import GreetingService from "../services/GreetingService";
import Greeting from "../components/Greeting";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetings: [],
    };
  }

  componentDidMount() {
    GreetingService.getGreetings().then((res) => {
      this.setState({ greetings: res });
    });
  }

  render() {
    const { data } = this.state.greetings;
    if (data) {
      return (
        <div className="container">
          <div className="thumbnail row d-flex justify-content-center">
            {data.map(({ id, imgUrl, ...otherProps }) => (
              <Greeting key={id} id={id} imgUrl={imgUrl} {...otherProps} />
            ))}
          </div>
        </div>
      );
    } else {
      return (
        <div className="container mt-5">
          <h5>Greetings is loading...</h5>
        </div>
      );
    }
  }
  //   const { products } = this.state.products;
  //   console.log(products);

  //   console.log(products);
  //   return (
  //     <div>
  //       {products.map((item) => {
  //         return (
  //           <Product key={id} id={id} itemImge={itemImg} {...otherProps} />
  //         );
  //       })}
  //     </div>
  //   );
  // }
}

export default Home;
