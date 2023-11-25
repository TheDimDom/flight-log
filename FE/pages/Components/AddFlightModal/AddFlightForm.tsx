import { Box, Button, TextField } from "@mui/material";
import { format } from "date-fns";
import { useFormik } from "formik";

interface AddFlightFormProps {
  tachoStart: string;
  setFlightData: (flightData) => void;
  setAddFlightModalOpen: (open: boolean) => void;
}

const formFields = [
  {
    label: "Tacho Start",
    name: "tachoStart",
  },
  {
    label: "Tacho End",
    name: "tachoEnd",
  },
  {
    label: "Total",
    name: "total",
  },
  {
    label: "Comments",
    name: "comments",
  },
];

export default function AddFlightForm({
  tachoStart,
  setFlightData,
  setAddFlightModalOpen,
}: AddFlightFormProps) {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: {
      id: Date.now(),
      date: Date.now(),
      name: "Bot",
      tachoStart: tachoStart,
      tachoEnd: "",
      total: "TODO: calculate total from tachoStart and tachoEnd",
      comments: "",
    },
    onSubmit: () => {
      setFlightData((prevState) => {
        return [values, ...prevState];
      });
      setAddFlightModalOpen(false);
    },
  });

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box>
          <TextField
            name="date"
            label="Date"
            value={format(values.date, "dd/MM/yyyy")}
            onChange={handleChange}
            sx={{ pb: 3 }}
          />
        </Box>
        <Box>
          <TextField
            name="name"
            label="Name"
            value={values.name}
            onChange={handleChange}
            sx={{ pb: 3 }}
          />
        </Box>
        {formFields.map((field) => {
          return (
            <Box key={field.name}>
              <TextField
                disabled={field.name === "tachoStart" || field.name === "total"}
                name={field.name}
                label={field.label}
                value={
                  field.name === "total"
                    ? "tachoStart -> tachoEnd total"
                    : values[field.name]
                }
                onChange={handleChange}
                sx={{ pb: 3 }}
              />
            </Box>
          );
        })}
        <Button variant="contained" type="submit">
          Confirm
        </Button>
      </Box>
    </form>
  );
}
