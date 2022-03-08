import {
  Button,
  Container,
  makeStyles,
  Paper,
  TextField,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function ShowStudent() {
  const paperStyle = { padding: "50px 20px", width: 600, margin: "20px auto" };
  const location = useLocation();
  const classes = useStyles();
  const history = useHistory();
  const [name, setName] = useState("");
  const [id, setid] = useState("");
  const [address, setAddress] = useState("");
  

  const handleClick = (e) => {
    e.preventDefault();
    const student = { id, name, address };
    console.log(student);
    fetch("http://localhost:8080/student/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    }).then(() => {
      console.log("New Student added");
    });
    
    history.push('/')
  };

  useEffect(() => {
    const id = location.state.id;
    fetch(`http://localhost:8080/student/${id}`)
      .then((res) => res.json())
      .then((result) => {
        setid(result.id);
        setName(result.name);
        setAddress(result.address);
      });
  }, []);

  return (
    <div>
      <Container>
        <Paper elevation={3} style={paperStyle}>
          <h1 style={{ color: "blue" }}>Add Student</h1>

          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="outlined-basic"
              label="Id"
              variant="outlined"
              fullWidth
              value={id}
              inputProps={{ readOnly: true }}
            />

            <TextField
              id="outlined-basic"
              label="Student Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              id="outlined-basic"
              label="Student Adress"
              variant="outlined"
              fullWidth
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Button variant="contained" color="secondary" onClick={handleClick}>
              Update
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
}

export default ShowStudent;
