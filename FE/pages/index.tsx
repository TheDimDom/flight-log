import React from "react";
import FlightList from "./Components/FlightList";

const Index = () => {
  const rows = [
    {
      id: 1,
      name: "Douglas",
      date: "2023/11/10",
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
    {
      id: 2,
      name: "Parrish",
      date: "2023/11/10",
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
    {
      id: 3,
      name: "Samuels",
      date: "2023/11/10",
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
    {
      id: 4,
      name: "Dunne",
      date: "2023/11/10",
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
    {
      id: 5,
      name: "McAuley",
      date: "2023/11/10",
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
    {
      id: 6,
      name: "Fox",
      date: "2023/11/10",
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
  ];

  return (
    <div>
      <FlightList rows={rows} />
    </div>
  );
};

export default Index;
