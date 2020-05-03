import React from "react";

const CovidWorldReport = (props) => {
  const covidWorldData = props.data;
  console.log(covidWorldData);
  return (
    <div style={{ borderBottom: "1px solid", marginBottom: 15 }}>
      <div
        className="card text-black mb-3"
        style={{ backgroundColor: "#bfbfbf" }}
      >
        <h3 style={{ margin: "auto", padding: 10 }}>Reports - Global</h3>
        <span
          style={{
            textAlign: "right",
            marginRight: 20,
            fontWeight: "bold",
            color: "#737373",
          }}
        >
          Last Update: {covidWorldData.last_update}
        </span>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="card text-white bg-warning mb-3">
            <h5 className="card-header" style={{ textAlign: "center" }}>
              Confirmed Cases:
            </h5>
            <div className="card-body" style={{ backgroundColor: "#ffa64d" }}>
              <h4
                className="card-text"
                style={{
                  margin: "auto",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {covidWorldData.total_cases}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-success mb-3">
            <h5 className="card-header" style={{ textAlign: "center" }}>
              Recovered Cases:
            </h5>
            <div className="card-body" style={{ backgroundColor: "#59b300" }}>
              <h4
                className="card-text"
                style={{
                  margin: "auto",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {covidWorldData.recovery_cases}
              </h4>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card text-white bg-danger mb-3">
            <h5 className="card-header" style={{ textAlign: "center" }}>
              Death Cases:
            </h5>
            <div className="card-body" style={{ backgroundColor: "#ff6633" }}>
              <h4
                className="card-text"
                style={{
                  margin: "auto",
                  textAlign: "center",
                  fontWeight: "bold",
                }}
              >
                {covidWorldData.death_cases}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidWorldReport;
