import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Form from "react-bootstrap/Form";
import NavBar from "../NavBars";

const DataValidationSchema = yup.object({
  id: yup.number().required(),
  name: yup.string().required().min(4),
  gender:yup.string().required().min(4),
  email: yup.string().email().required().min(8),
  img: yup.string().required().min(1),
  subject: yup.string().required().min(1),
});

const AddMentor = () => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        id: "",
        name: "",
        gender:"",
        email: "",
        img: "",
        subject: "",
      },
      validationSchema: DataValidationSchema,
      onSubmit: (values) => {
        console.log("form values", values);
        addData(values);
      },
    });
  const addData = (values) => {
    fetch("https://6354ef52483f5d2df3a96755.mockapi.io/mentor", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-type": "application/json" },
    }).then(() => navigate("/teacher"));
  };

  return (
    <div>
      <NavBar />
      <section className="container my-5">
        <Form onSubmit={handleSubmit} className="add-student">
        <TextField
          label="Mentor-Id"
          variant="outlined"
          type="number"
          value={values.id}
          name="id"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.id && errors.id}
          helperText={touched.id && errors.id ? errors.id : null}
        />
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          value={values.name}
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.name && errors.name}
          helperText={touched.name && errors.name ? errors.name : null}
        />
         <TextField
          label="gander"
          variant="outlined"
          type="text"
          value={values.gender}
          name="gender"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.gender && errors.gender}
          helperText={touched.gender && errors.gender ? errors.gender : null}
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          value={values.email}
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
          helperText={touched.email && errors.email ? errors.email : null}
        />
        <TextField
          label="Image"
          variant="outlined"
          type="text"
          value={values.img}
          name="img"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.img && errors.img}
          helperText={touched.img && errors.img ? errors.img : null}
        />
        <TextField
          label="subject Mark"
          variant="outlined"
          type="text"
          value={values.subject}
          name="subject"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.subject && errors.subject}
          helperText={touched.subject && errors.subject ? errors.subject : null}
        />

          <Button variant="dark" type="submit">
            Add Mentor
          </Button>
        </Form>
      </section>
    </div>
  );
};

export default AddMentor;
