import React, { useState } from "react";
import axios from "axios";
import {
  Grid,
  Paper,
  Avatar,
  TextField,
  Button,
  Typography,
  Link,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import fondoLogin from "../img/fondoLogin.jpg";
import { useNavigate } from "react-router-dom";
const gridStyle = {
  backgroundImage: `url(${fondoLogin})`,
  backgroundSize: "cover", // Esto hace que la imagen cubra todo el Grid
  backgroundPosition: "center", // Esto centra la imagen en el Grid
  height: "95vh", // Esto hace que el Grid tenga el alto de toda la ventana

};

const Login = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 280,
    margin: "20px auto",
  };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const btnstyle = { margin: "8px 0" };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita el recargado de la página
    try {
      const response = await axios.post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      });
      setError("");
      console.log(response.data); 
      const userType = response.data.user.type_user_id;

      localStorage.setItem("userId", response.data.user.id);
      localStorage.setItem("userType", userType);
      localStorage.setItem("email", response.data.user.email);
      console.log('user id:',response.data.user.id);

      console.log("Tipo de usuario:", userType);
      // Redirigir al dashboard
      navigate("/dashboard");
    } catch (error) {
      console.error("Error en el inicio de sesión", error.response);
      setError("Credenciales incorrectas");
      
    }
  };

  return (
    <Grid style={gridStyle}>
      <Paper elevation={10} style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <h2>Sign In</h2>
        </Grid>
        <TextField
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <TextField
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && (
          <Typography color="error" align="center">
            {error}
          </Typography>
        )}
        <br />
        <br />
        <Button
          type="submit"
          color="primary"
          variant="contained"
          style={btnstyle}
          fullWidth
          onClick={handleSubmit}
        >
          Sign in
        </Button>
      </Paper>
    </Grid>
  );
};

export default Login;
