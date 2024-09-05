import { Box, TextField, Typography } from "@mui/material";
import { Formik } from "formik";

const TextInput = ({ label, name, type = "text", formik, placeholder }) => (
    <Box sx={{ display: "flex", flexDirection: "column"  }}>
      <Typography sx={{ marginLeft: "0.5vw", color: "green" }}>{label}</Typography>
      <TextField
        variant="outlined"
        name={name}
        placeholder={placeholder}
        type={type}
        value={Formik.value[name]}
        onChange={Formik.handleChange}
        error={formik.errors[name] ? true : false}
        helperText={formik.errors[name]}
        sx={{ marginBottom: "1vh"}}
        color="success"
      />
    </Box>
  );

  export default TextInput