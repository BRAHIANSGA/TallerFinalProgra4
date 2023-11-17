import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Box, Typography, TextField, Button,FormControl,Select,MenuItem,InputLabel} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxHeight: "90vh", // Ajusta el alto máximo
  overflowY: "auto", // Permite el scroll vertical si es necesario
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ClientModal = ({
  open,
  handleClose,
  onClientSaved,
  clientId,
  isEdit,
}) => {
  const [tiposUsuarios, setTiposUsuarios] = useState([]);
  const [usuario, setUsuario] = useState({
    cedula:"",
    name: "",
    email: "",
    password: "",
    type_user_id: "",
  });

  const initialState = {
    usuario_id: "",
    cedula: "",
    nombre: "",
    apellidos: "",
    numero_celular: "",
    direccion: "",
  };
  const [cliente, setCliente] = useState(initialState);
  const resetForm = () => {
    setCliente(initialState);
  };

  const handleUsuarioChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (open && isEdit && clientId) {
      loadClientData();
      fetchTiposUsuarios();
    } else {
      fetchTiposUsuarios();
      resetForm();
    }
  }, [open, isEdit, clientId]);
  const fetchTiposUsuarios = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/typeusers");
      setTiposUsuarios(response.data);
    } catch (error) {
      console.error("Error al cargar tipos de usuario:", error);
    }
  };

  const loadClientData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/clientes/${clientId}`
      );
      setCliente(response.data);
    } catch (error) {
      console.error("Error al cargar el cliente:", error);
    }
  };

  const handleChange = (e) => {
    setCliente({ ...cliente, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      let usuarioId = cliente.usuario_id;
      if (!isEdit) {
        const userResponse = await axios.post(
          "http://localhost:8000/api/users",
          usuario
        );
        usuarioId = userResponse.data.id;
      }
      const clienteData = { ...cliente, usuario_id: usuarioId };
      const method = isEdit ? "put" : "post";
      const url = isEdit
        ? `http://localhost:8000/api/clientes/${clientId}`
        : "http://localhost:8000/api/clientes";
      await axios[method](url, clienteData);
      handleClose();
      onClientSaved();
    } catch (error) {
      console.error(
        `Error al ${isEdit ? "actualizar" : "crear"} el cliente:`,
        error
      );
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6">
          {isEdit ? "Editar Cliente" : "Crear Cliente"}
        </Typography>
        
        {!isEdit && (
          <>
            <TextField
              label="Nombre de Usuario"
              name="name"
              value={usuario.name}
              onChange={handleUsuarioChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Email"
              name="email"
              value={usuario.email}
              onChange={handleUsuarioChange}
              fullWidth
              margin="normal"
            />
            <TextField
              label="Contraseña"
              name="password"
              value={usuario.password}
              onChange={handleUsuarioChange}
              fullWidth
              margin="normal"
              type="password"
            />
            <FormControl fullWidth margin="normal">
              <InputLabel>Tipo de Usuario</InputLabel>
              <Select
                label="Tipo de Usuario"
                name="type_user_id"
                value={usuario.type_user_id}
                onChange={handleUsuarioChange}
              >
                {tiposUsuarios.map((tipo) => (
                  <MenuItem key={tipo.id} value={tipo.id}>
                    {tipo.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </>
        )}
        <TextField
          label="Cedula"
          name="cedula"
          value={cliente.cedula}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Nombre de Usuario"
          name="nombre"
          value={cliente.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Apellidos"
          name="apellidos"
          value={cliente.apellidos}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Número Celular"
          name="numero_celular"
          value={cliente.numero_celular}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Dirección"
          name="direccion"
          value={cliente.direccion}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: "10px" }}
        >
          {isEdit ? "Actualizar" : "Guardar"}
        </Button>
      </Box>
    </Modal>
  );
};

export default ClientModal;
