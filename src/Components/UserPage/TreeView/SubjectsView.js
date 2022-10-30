import { useEffect, useState } from "react";
import Graph from "graphology";
import { SigmaContainer, useLoadGraph } from "@react-sigma/core";
import getNodeProgramImage from "sigma/rendering/webgl/programs/node.image";
import "@react-sigma/core/lib/react-sigma.min.css";
import logo from "../Assets/SubjectsView/math.png";
import ChartInsight from "./ChartInsight";
//bg-gradient-to-l via-teal-500/50 from-pink-500/75

const LoadGraph = () => {
  const loadGraph = useLoadGraph();

  useEffect(() => {
    const graph = new Graph();
    graph.addNode("math", {
      x: 0,
      y: 0,
      size: 60,
      color: "#FA4F40",
      image: logo,
    });
    graph.addNode("calcB", {
      x: 1,
      y: -1,
      size: 40,
      label: "Calculus Basics",
      color: "#14b8a6",
      // image: logo,
    });
    graph.addNode("algB", {
      x: 1,
      y: 0,
      size: 40,
      label: "Algebra Basics",
      color: "#7e81a0",
      //  image: logo,
    });
    graph.addNode("geoB", {
      x: 1,
      y: 1,
      size: 40,
      label: "Geometry Basics",
      color: "#ec4899",
      //  image: logo,
    });
    graph.addNode("ElemFunc", {
      x: 1.3,
      y: 0.3,
      size: 30,
      label: "Elementary Functions",
      color: "#7e81a0",
      // image: logo,
    });
    graph.addEdge("math", "algB", { size: 7 });
    graph.addEdge("math", "calcB", { size: 7 });
    graph.addEdge("algB", "calcB", { size: 7 });
    graph.addEdge("math", "geoB", { size: 7 });
    graph.addEdge("algB", "ElemFunc", { size: 7 });

    loadGraph(graph);
  }, [loadGraph]);

  return null;
};

function QuestView({ props }) {
  return (
    <div className="mb-3">
      <div className="alert shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-info flex-shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <div>
            <h3 className="font-bold">{props.task}</h3>
          </div>
        </div>
        <div className="flex-none">
          <div className="badge bg-gradient-to-l to-teal-500 from-pink-500 text-white">
            {props.difficulty}
          </div>
          <div className="badge badge-accent">{props.type}</div>
        </div>
      </div>
    </div>
  );
}

function CurrentTarget({ props }) {
  return (
    <div
      onClick={() => {
        console.log("click");
      }}
      className="mb-3"
    >
      <div className="alert shadow-lg">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <div>
            <h3 className="font-bold">{props.text}</h3>
          </div>
        </div>
        <div className="flex-none">
          <h1>230/300xp</h1>
          <div className="badge badge-accent">{props.type}</div>
        </div>
      </div>
    </div>
  );
}

function SubjectsOverview() {
  return (
    <div>
      <h1 className="text-5xl font-bold font-sans text-transparent bg-clip-text drop-shadow-2xl bg-gradient-to-l from-pink-500 to-teal-500">
        Overview
      </h1>
      <div className="divider"></div>
      <h2 className="text-4xl"> Current targets:</h2>
      <div className="mt-4">
        <CurrentTarget
          props={{ text: "Partial Derivatives", type: "Calculus" }}
        />
        <CurrentTarget props={{ text: "Groups", type: "Algebra" }} />
      </div>
      <div className="flex ">
        <h2 className="text-4xl flex-1">Quests:</h2>
        <div className="badge badge-accent place-self-end flex-none mr-4 text-lg">
          All
        </div>
      </div>
      <div className="mt-4">
        <QuestView
          props={{
            task: "Solve 30 partials",
            type: "Calculus",
            difficulty: "Legendary",
          }}
        />
        <QuestView
          props={{
            task: "Solve 30 partials",
            type: "Calculus",
            difficulty: "Legendary",
          }}
        />
      </div>
      <h2 className="text-4xl">Quick Insights:</h2>
      <div className="mt-2">
        <ChartInsight />
      </div>
      <div className="grid place-content-center mt-2">
        <div className="flex flex-row">
          <h1 className="place-self-center mr-4">
            Next Level - Math 10 (700/1000 xp)
          </h1>
          <div className="radial-progress" style={{ "--value": 70 }}>
            70%
          </div>
        </div>
      </div>
    </div>
  );
}

export default function SubjectsView() {
  const [Show, setShow] = useState(true);

  useEffect(() => {
    console.log("worked");
  }, [Show]);
  return (
    <div className=" ">
      <div className="flex">
        <div className="bg-base-100 h-screen flex-1">
          <SigmaContainer
            settings={{
              nodeProgramClasses: { image: getNodeProgramImage() },
              defaultNodeType: "image",
              defaultEdgeType: "arrow",
              labelDensity: 0.07,
              labelGridCellSize: 60,
              labelRenderedSizeThreshold: 15,
              labelFont: "Lato, sans-serif",
              labelColor: { color: "#ffffff" },
              zIndex: true,
            }}
            className="bg-base-300 "
            style={{ background: "inherit" }}
          >
            <LoadGraph />
          </SigmaContainer>
        </div>
        <div className="flex-none basis-1/3 h-screen bg-base-300 p-2 rounded">
          <SubjectsOverview />
        </div>
      </div>
    </div>
  );
}
