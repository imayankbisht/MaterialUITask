import React from "react";

import { Line } from "react-chartjs-2";

const LineChart = () => {
  return (
    <div style={{ marginTop: "2em", border: "1px solid silver" }}>
      <Line
        data={{
          labels: ["01/07/2020", "02/07/2020", "03/07/2020", "04/07/2020"],
          datasets: [
            {
              label: "Order Amount",
              data: ["20000", "30000", "22000", "45000"],
              tension: 0,
              fill: false,
              borderColor: "blue"
            }
          ]
        }}
        height={500}
        width={500}
        options={{
          maintainAspectRatio: false,
          legend: {
            position: "bottom"
          },
          layout: {
            padding: 20
          }
        }}
      />
    </div>
  );
};

export default LineChart;
