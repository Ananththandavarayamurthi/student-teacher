import React, { useEffect, useState } from "react";
import Card from 'react-bootstrap/Card';
import "./Student.css";
import NavBar from "../NavBars";

// import Table from "react-bootstrap/Table";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';

const Student = () => {
  const [studentData, setStudentData] = useState([]);
  const navigate = useNavigate();

  const getData = () => {
    fetch("https://6354ef52483f5d2df3a96755.mockapi.io/students", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setStudentData(data));
  };
  useEffect(() => getData(), []);

  const DeleteUser = (id) => {
    fetch(`https://6354ef52483f5d2df3a96755.mockapi.io/students/${id}`, {
      method: "DELETE",
    }).then((data)=>getData(data));
  };

  return (
        
        
        <div>
       <div className="button d-flex">
        <Button variant="dark" className="col-6" onClick={()=>navigate('/addstudent')}>
              Add New Student
        </Button>
      </div>
      <NavBar />
      <h2 className="text-center mt-3">Student List</h2>
      <div className="d-flex align-content-start flex-wrap m-2 ">
      {studentData.map((data,index)=>(<Card className="m-2"style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={data.avatar} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.gender}
        </Card.Text>
        <Card.Text>
          {data.class}
        </Card.Text>
        <IconButton
                      aria-label="delete"
                      onClick={() => navigate(`editstudent/${data.id}`)}
                    >
                      <EditIcon color="dark" />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="dark"
                      onClick={() => DeleteUser(data.id)}
                    >
                      <DeleteIcon color="dark" />
                    </IconButton>
      </Card.Body>
    </Card>))}
        
      </div>
     
    </div>
  );
};

export default Student;
