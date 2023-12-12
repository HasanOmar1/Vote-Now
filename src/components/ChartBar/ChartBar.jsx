import React from "react";

export default function ChartBar() {
  return (
    <div className="chart">
      <Bar
        data={{
          labels: cardsArr.map((cat) => cat.title),

          datasets: [
            {
              label: "Total Votes",
              data: votes.map((vote) => vote),
              backgroundColor: ["#97008e", "#90fc0f", "#77aee9", "#ebf369"],
              borderRadius: 10,
            },
          ],
        }}
      />
    </div>
  );
}
