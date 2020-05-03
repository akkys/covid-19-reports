import React, { Component } from "react";
import axios from "axios";
import CovidWorldReport from "./CovidWorldReport";

class CovidWorld extends Component {
  state = {
    covidWorld: [],
  };

  componentDidMount() {
    axios
      .get(
        "https://corona-virus-stats.herokuapp.com/api/v1/cases/general-stats"
      )
      .then((res) => {
        this.setState({ covidWorld: res.data.data });
        console.log("World", this.state.covidWorld);
      })
      .catch((err) => console.log(err));
  }

  render() {
    const { covidWorld } = this.state;
    console.log(covidWorld);
    return (
      <div>
        <CovidWorldReport data={covidWorld} />
      </div>
    );
  }
}

export default CovidWorld;
