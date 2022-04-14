import React from "react";

function TableDescending(props) {
  const allCountryScores = props.data;

  return (
    <div className="container">
      {allCountryScores
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ name, scores }, index) => {
          return (
            <div className="wrapper" key={index}>
              <table className="table" key={index}>
                <thead className="table-header">
                  <tr>
                    <th>High scores: {name}</th>
                  </tr>
                </thead>
                <tbody>
                  {scores
                    .sort((a, b) => b.s - a.s)
                    .map(({ n, s }, index) => {
                      return (
                        <tr className="table-body" key={index}>
                          <td>{n}</td>
                          <td className="score">{s}</td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
}

export default TableDescending;
