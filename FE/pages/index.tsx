import { useState } from "react";
import FlightList from "./Components/FlightList/FlightList";
import { Button, Container } from "@mui/material";
import AddFlightModal from "./Components/AddFlightModal";
import { format } from "date-fns";

const Index = () => {
  const rows = [
    {
      id: 1,
      name: "Douglas",
      date: format(Date.now(), "dd/MM/yyyy"),
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
    {
      id: 2,
      name: "Parrish",
      date: format(Date.now(), "dd/MM/yyyy"),
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
    {
      id: 3,
      name: "Samuels",
      date: format(Date.now(), "dd/MM/yyyy"),
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
    {
      id: 4,
      name: "Dunne",
      date: format(Date.now(), "dd/MM/yyyy"),
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
    {
      id: 5,
      name: "McAuley",
      date: format(Date.now(), "dd/MM/yyyy"),
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
    {
      id: 6,
      name: "Fox",
      date: format(Date.now(), "dd/MM/yyyy"),
      tachoStart: "001:00",
      tachoEnd: "002:00",
      total: "1:00",
      comments: "Test",
    },
  ];
  const [addFlightModalOpen, setAddFlightModalOpen] = useState(false);
  const [flightData, setFlightData] = useState(rows);

  return (
    <Container>
      <Button onClick={() => setAddFlightModalOpen(true)}>Add Flight</Button>
      <AddFlightModal
        open={addFlightModalOpen}
        setAddFlightModalOpen={setAddFlightModalOpen}
        tachoStart={rows[0].tachoEnd}
        setFlightData={setFlightData}
      />
      <FlightList rows={flightData} />
    </Container>
  );
};

export default Index;
