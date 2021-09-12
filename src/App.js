import logo from "./logo.svg";
import "./App.css";
import { Chart } from "react-google-charts";

function App() {
  return (
    <div className="App">
      <div>
        <Chart
          width={"100%"}
          height={"200px"}
          chartType="Timeline"
          loader={<div>Loading Chart</div>}
          data={[
            [
              { type: "string", id: "Room" },
              { type: "string", id: "Name" },
              { type: "date", id: "Start" },
              { type: "date", id: "End" },
            ],
            [
              "Magnolia Room",
              "Beginning JavaScript",
              new Date(0, 0, 0, 12, 0, 0),
              new Date(0, 0, 0, 13, 30, 0),
            ],
            [
              "Magnolia Room",
              "Intermediate JavaScript",
              new Date(0, 0, 0, 14, 0, 0),
              new Date(0, 0, 0, 15, 30, 0),
            ],
            [
              "Magnolia Room",
              "Advanced JavaScript",
              new Date(0, 0, 0, 16, 0, 0),
              new Date(0, 0, 0, 17, 30, 0),
            ],
            [
              "Willow Room",
              "Beginning Google Charts",
              new Date(0, 0, 0, 12, 30, 0),
              new Date(0, 0, 0, 14, 0, 0),
            ],
            [
              "Willow Room",
              "Intermediate Google Charts",
              new Date(0, 0, 0, 14, 30, 0),
              new Date(0, 0, 0, 16, 0, 0),
            ],
            [
              "Willow Room",
              "Advanced Google Charts",
              new Date(0, 0, 0, 16, 30, 0),
              new Date(0, 0, 0, 18, 0, 0),
            ],
          ]}
          options={{
            timeline: { colorByRowLabel: true },
            backgroundColor: "#ffd",
          }}
          rootProps={{ "data-testid": "6" }}
        />
      </div>
      <div>
        <Chart
          width={"500px"}
          height={"300px"}
          chartType="WordTree"
          loader={<div>Loading Chart</div>}
          data={[
            ["Phrases"],
            ["cats are better than dogs"],
            ["cats eat kibble"],
            ["cats are better than hamsters"],
            ["cats are awesome"],
            ["cats are people too"],
            ["cats eat mice"],
            ["cats meowing"],
            ["cats in the cradle"],
            ["cats eat mice"],
            ["cats in the cradle lyrics"],
            ["cats eat kibble"],
            ["cats for adoption"],
            ["cats are family"],
            ["cats eat mice"],
            ["cats are better than kittens"],
            ["cats are evil"],
            ["cats are weird"],
            ["cats eat mice"],
          ]}
          options={{
            wordtree: {
              format: "implicit",
              word: "cats",
            },
          }}
          rootProps={{ "data-testid": "1" }}
        />
      </div>
      <div>
        <h1>https://react-google-charts.com/wordtree-chart</h1>
      </div>
    </div>
  );
}

export default App;
