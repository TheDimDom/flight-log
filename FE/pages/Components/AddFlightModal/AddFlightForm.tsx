import { Box, Button, TextField, Typography } from "@mui/material";
import { format } from "date-fns";
import { useFormik } from "formik";
import * as yup from "yup";
import calculateTimeDifference from "../../../utils/totalTachoTime";

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

const validationSchema = yup.object().shape({
  tachoEnd: yup
    .string()
    .matches(/^\d{3}:\d{2}$/, "Must be in the format 000:00")
    .required("This field is required"),
  name: yup.string().required("This field is required"),
});

export default function AddFlightForm({
  tachoStart,
  setFlightData,
  setAddFlightModalOpen,
}: AddFlightFormProps) {
  const { values, handleChange, handleSubmit, errors, setFieldValue } =
    useFormik({
      initialValues: {
        id: Date.now(),
        date: Date.now(),
        name: "Bot",
        tachoStart: tachoStart,
        tachoEnd: "",
        total: "",
        comments: "",
      },
      validationSchema: validationSchema,
      validateOnChange: true,
      onSubmit: () => {
        const total = calculateTimeDifference(
          values.tachoStart,
          values.tachoEnd
        );

        setFieldValue("total", total);

        const dataToAppend = {
          ...values,
          total,
        };

        setFlightData((prevState) => {
          return [dataToAppend, ...prevState];
        });

        setAddFlightModalOpen(false);
      },
    });

  return (
    <form onSubmit={handleSubmit}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box sx={{ pb: 3 }}>
          <TextField
            name="date"
            label="Date"
            value={format(values.date, "dd/MM/yyyy")}
            onChange={handleChange}
            disabled
          />
        </Box>
        <Box sx={{ pb: 3 }}>
          <TextField
            name="name"
            label="Name"
            error={!!errors["name"]}
            value={values.name}
            onChange={handleChange}
          />
          {errors["name"] && (
            <Typography color="error">{errors["name"]}</Typography>
          )}
        </Box>
        {formFields.map((field) => {
          return (
            <Box key={field.name} sx={{ pb: 3 }}>
              <TextField
                disabled={field.name === "tachoStart" || field.name === "total"}
                error={!!errors[field.name]}
                name={field.name}
                label={field.label}
                value={
                  field.name === "total"
                    ? calculateTimeDifference(
                        values.tachoStart,
                        values.tachoEnd
                      )
                    : values[field.name]
                }
                onChange={handleChange}
              />
              {errors[field.name] && (
                <Typography color="error">{errors[field.name]}</Typography>
              )}
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
