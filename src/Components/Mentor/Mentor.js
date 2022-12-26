import NavBar from "../NavBars";
import Card from 'react-bootstrap/Card';
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import React, { useEffect, useState } from "react";
import "./Mentor.css"
const Mentor = () => {
  const [mentorData, setMentorData] = useState([]);
  const navigate = useNavigate();
  const getData = () => {
    fetch("https://6354ef52483f5d2df3a96755.mockapi.io/mentor", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setMentorData(data));
  };
  useEffect(() => getData(), []);
  console.log(mentorData)

  const DeleteUser = (id) => {
    fetch(`https://6354ef52483f5d2df3a96755.mockapi.io/mentor/${id}`, {
      method: "DELETE",
    }).then((data) => getData(data));
  };
  return (
    <div>
      <NavBar />
      <div className="container my-3">
        <h2 className="text-center my-3">Mentor Details</h2>
        <div className="d-flex align-content-start flex-wrap m-2 ">
      {mentorData.map((data,index)=>(<Card className="m-2"style={{ width: '18rem' }} key={index}>
      <Card.Img variant="top" src={data.img} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.gender}
        </Card.Text>
        <Card.Text>
          {data.subject}
        </Card.Text>
        <IconButton
                      aria-label="delete"
                      onClick={() => navigate(`editmentor/${data.id}`)}
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

        <div className="button d-flex my-5">
          <Button
            variant="dark"
            className="col-6"
            onClick={() => navigate("/addmentor")}
          >
            Add New Mentor
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Mentor;
