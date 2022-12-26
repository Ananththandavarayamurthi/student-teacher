import React from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import Form from 'react-bootstrap/Form';
import NavBar from '../NavBars';

const DataValidationSchema = yup.object({
  id: yup.number().required(),
  class: yup.number().required(),
  name: yup.string().required().min(4),
  gender: yup.string().required().min(4),
  avatar: yup.string().required().min(4),
  
});


const AddStudent = () => {
  const navigate = useNavigate();
  const { handleBlur, handleChange, values, handleSubmit, touched, errors } =
    useFormik({
      initialValues: {
        id: "",
        name: "",
        class:"",
        gender: "",
        avatar: "",
        
      },
      validationSchema: DataValidationSchema,
      onSubmit: (values) => {
        console.log("form values", values);
        addData(values);
      },
    });
    const addData = (values) => {
      fetch("https://6354ef52483f5d2df3a96755.mockapi.io/students", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-type": "application/json" },
      }).then(() => navigate("/student"));
    };

  return (
  <div>
    <NavBar/>
  <section className="container my-5">
  <Form onSubmit={handleSubmit} className="add-student">
  <TextField
          label="Roll.No"
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
          label="class"
          variant="outlined"
          type="number"
          value={values.class}
          name="class"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.class && errors.class}
          helperText={touched.class && errors.class ? errors.class : null}
        />
        <TextField
          label="gender"
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
          label="avatar"
          variant="outlined"
          type="text"
          value={values.avatar}
          name="avatar"
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.avatar && errors.avatar}
          helperText={touched.avatar && errors.avatar ? errors.avatar : null}
        />
        <Button  variant="dark" type="submit">
        Add Student
      </Button>
    </Form>
  </section>
  </div>
  
  )
}

export default AddStudent