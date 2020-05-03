import React, { Component } from "react";
import axios from "axios";
import Loading from "./Loading";
import CovidReport from "./CovidReport";

class CovidMain extends Component {
  state = {
    isLoading: false,
    covidData: [],
  };

  componentDidMount() {
    axios
      .get("https://api.rootnet.in/covid19-in/stats/latest")
      .then((res) => {
        this.setState({
          isLoading: true,
          covidData: res.data.data,
        });
        // console.log("Covid Data :", this.state.covidData);
      })
      .catch(() => console.log("Error : Invalid URL"));
  }

  render() {
    const { isLoading, covidData } = this.state;

    return (
      <div>
        {!isLoading ? (
          <Loading />
        ) : (
          <div>
            <CovidReport data={covidData} />
          </div>
        )}
      </div>
    );
  }
}

export default CovidMain;
