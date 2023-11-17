import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Button,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import ClientModal from "./ClientModal";

const ClientList = () => {
  const [clientes, setClientes] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingClientId, setEditingClientId] = useState(null);

  useEffect(() => {
    fetchClientes();
  }, []);

  const fetchClientes = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/clientes");
      setClientes(response.data);
    } catch (error) {
      console.error("Error al obtener los clientes:", error);
    }
  };
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/clientes/${id}`);
      fetchClientes(); // Recarga la lista de clientes después de eliminar
      alert("Cliente eliminado con exito!");
    } catch (error) {
      console.error("Error al eliminar el cliente:", error);
    }
  };
  const handleCreateClient = () => {
    setEditingClientId(null);
    setOpenModal(true);
  };

  const handleEdit = (id) => {
    setEditingClientId(id);
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingClientId(null);
  };

  const handleClientSaved = () => {
    fetchClientes(); // Recarga los clientes
    handleCloseModal(); // Cierra el modal
  };


  return (
    <Paper style={{ margin: "20px", overflowX: "auto" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        padding={2}
      >
        <Typography variant="h4" gutterBottom>
          Clientes
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateClient}
        >
          Crear Cliente
        </Button>

        <ClientModal
          open={openModal}
          handleClose={handleCloseModal}
          onClientSaved={handleClientSaved}
          clientId={editingClientId}
          isEdit={editingClientId !== null}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Cedula</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Apellidos</TableCell>
              <TableCell>Número Celular</TableCell>
              <TableCell>Dirección</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {clientes.map((cliente) => (
              <TableRow key={cliente.id}>
                <TableCell>{cliente.cedula}</TableCell>
                <TableCell>{cliente.nombre}</TableCell>
                <TableCell>{cliente.apellidos}</TableCell>
                <TableCell>{cliente.numero_celular}</TableCell>
                <TableCell>{cliente.direccion}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(cliente.id)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(cliente.id)}>
                    <DeleteIcon color="secondary" />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
};

export default ClientList;
