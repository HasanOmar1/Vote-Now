import cardsArr from "../Cards/Cards";
import { Chart as ChartJS, Colors, Ticks, scales } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useData } from "../../Contexts/DataContext/DataContext";

export default function ChartBar() {
  const { votes } = useData();
  return (
    <div className="chart">
      <Bar
        data={{
          labels: cardsArr.map((cat) => cat.title),
          datasets: [
            {
              label: "Total Votes",
              data: votes.map((vote) => vote),
              backgroundColor: ["#97008E", "#90FC0F", "#77AEE9", "#EBF369"],
              borderRadius: 10,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              ticks: {
                color: ["#97008E", "#90FC0F", "#77AEE9", "#EBF369"],
              },
            },
          },
        }}
      />
    </div>
  );
}
