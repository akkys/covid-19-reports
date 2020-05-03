import React from "react";
import CovidMainReport from "./CovidMainReport";
import CovidWorld from "./CovidWorld";
// import CovidWorldReport from "./CovidWorldReport";

const CovidReport = (props) => {
  const covidMainData = props.data;
  const covid = props.data.regional;

  return (
    <div style={{ borderBottom: "1px solid", marginBottom: 15 }}>
      <CovidWorld />
      <CovidMainReport covidMainData={covidMainData} />
      <div className="card text-black bg-info mb-3">
        <h2 style={{ margin: "auto", padding: 10 }}>State-wise Reports</h2>
      </div>

      <div className="row">
        {covid.map((data, i) => {
          return (
            <div className="col-md-4" key={i} style={{ marginBottom: 20 }}>
              <div className="card text-white bg-light">
                <h4
                  className="card-header"
                  style={{
                    textAlign: "left",
                    color: "black",
                    backgroundColor: "#cccccc",
                  }}
                >
                  {data.loc}
                </h4>
                <div className="card-body">
                  <h6
                    className="card-text"
                    style={{
                      color: "orange",
                      fontWeight: "bold",
                    }}
                  >
                    Confirmed Cases : {data.confirmedCasesIndian}
                  </h6>
                  <h6
                    className="card-text"
                    style={{
                      color: "green",
                      fontWeight: "bold",
                    }}
                  >
                    Recovered Cases : {data.discharged}
                  </h6>
                  <h6
                    className="card-text"
                    style={{
                      color: "red",
                      fontWeight: "bold",
                    }}
                  >
                    Death Cases : {data.deaths}
                  </h6>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CovidReport;
