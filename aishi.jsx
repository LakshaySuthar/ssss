import React, { Component } from "react";
import "./myCss.css";
import { data } from "./data.json";
class Aishi extends Component {
  constructor() {
    super();
    this.state = {
      City_Name: "",
      status: false,
      finalString: {},
      searchString: "",
      e: "",
      popStatus: false,
      index: null
    };

    this.handleSearch = this.handleSearch.bind(this);
    this.cityIndex = this.cityIndex.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
    this.setState({ popStatus: false });
  };

  handleSearch = e => {
    this.setState({ popStatus: true });
  };

  cityIndex(input, City_Name) {
    var indexToGet = null;
    for (let dataIndex = 0; dataIndex < input.length; dataIndex++) {
      if (
        JSON.stringify(input[dataIndex].value.toLowerCase()) ===
        JSON.stringify(City_Name.toLowerCase())
      ) {
        indexToGet = dataIndex;
        break;
      }
    }
    if (indexToGet !== null) {
      return data[indexToGet].label.split(",").map((i, key) => {
        return <div key={key}>{i}</div>;
      });
    } else {
      return (
        <div>
          {/* <img
            src={require("./food/NoResult.jpeg")}
            alt="picture herer"
          /> */}
          <h3>Sorry no vender found !</h3>
        </div>
      );
    }
  }
  resultShit() {
    if (this.state.popStatus) {
      return (
        <div>
          <h2>Available Venders</h2>
          {this.cityIndex(data, this.state.City_Name)}
        </div>
      );
    }
  }
  render() {
    const { City_Name } = this.state;
    return (
      <div className="App">
        <div class="hero-bg">
          <section class="top">
            <h1>
              <span>The Ultimate</span> Momo and Biryani Eating Experience
            </h1>
            <p1>
              You need to enter your city name and my website will give you the
              best momos and Biryani selling area in that area
            </p1>

            <div class="form-container">
              <form action="">
                <div class="form-left">
                  <label for="city">Enter your city:</label>
                  <input
                    type="text"
                    name="City_Name"
                    value={City_Name}
                    placeholder="Enter City Name"
                    required
                    onChange={this.onChange}
                  />
                  <p>Example:'san diego'</p>
                </div>

                <input
                  type="button"
                  onClick={this.handleSearch}
                  value="Find food now"
                />
              </form>
            </div>
          </section>
        </div>
        <br></br>
        <div align="center">{this.resultShit()}</div>
        <br></br>
        {/* <div>{this.cityIndex(data, this.state.City_Name)}</div> */}
        <section class="authentic">
          <div class="right-col">
            <h2>Authentic, Awesome.</h2>
            <p2>
              Momos are extremely popular among the natives of the Indian
              subcontinent, and can be found in every kind of shops from
              restaurants to street vendors.
            </p2>
          </div>
          <img src={require("./food/food2.jpg")} alt="picture of momo herer" />
        </section>
        <section class="authentic">
          <div class="right-col">
            <h2>Authentic, Awesome.</h2>
            <p2>
              Biryani is a mixed rice dish with its origins among the Muslims of
              the Indian subcontinent. It can be compared to mixing a curry,
              later combining it with semi-cooked rice separately. This dish is
              especially popular throughout the Indian subcontinent, as well as
              among the diaspora from the region
            </p2>
          </div>
          <img
            src={require("./food/biryani.jpg")}
            alt="picture of biryani in a bowl"
          />
        </section>
      </div>
    );
  }
}

export default Aishi;
