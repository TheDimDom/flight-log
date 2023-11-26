import { Box, Container, Dialog, Typography } from "@mui/material";
import AddFlightForm from "./AddFlightForm";

interface AddFlightModalProps {
  open: boolean;
  setAddFlightModalOpen: (open: boolean) => void;
  tachoStart: string;
  setFlightData: (flightData) => void;
}

export default function AddFlightModal({
  open,
  setAddFlightModalOpen,
  tachoStart,
  setFlightData,
}: AddFlightModalProps) {
  return (
    <Dialog open={open} onClose={() => setAddFlightModalOpen(false)}>
      <Container sx={{ p: 3 }}>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h4" gutterBottom>
            Add Flight
          </Typography>
          <AddFlightForm
            tachoStart={tachoStart}
            setFlightData={setFlightData}
            setAddFlightModalOpen={setAddFlightModalOpen}
          />
        </Box>
      </Container>
    </Dialog>
  );
}
