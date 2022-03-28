import React from "react";
import allCountryScores from "./scores";

function Table() {
  return (
    <div>
      <h1>High score per Country</h1>
      <div>
        {allCountryScores
          .sort((a, b) => a.name.localeCompare(b.name))
          .map(({ name, scores }, index) => {
            return (
              <div key={index}>
                <table>
                  <thead>
                    <tr>
                      <th scope="col">{name}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {scores.map(({ n, s }, index) => {
                      return (
                        <tr key={index}>
                          <td>{n}</td>
                          <td>{s}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Table;
