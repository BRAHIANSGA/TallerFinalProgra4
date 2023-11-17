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
import CategoryModal from "./CategoryModal"; // Asegúrate de tener este componente

const CategoryList = () => {
  const [categorias, setCategorias] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingCategoryId, setEditingCategoryId] = useState(null);

  useEffect(() => {
    fetchCategorias();
  }, []);

  const fetchCategorias = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/categorias");
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al obtener las categorías:", error);
    }
  };

  const handleCreateCategory = () => {
    setEditingCategoryId(null);
    setOpenModal(true);
  };

  const handleEdit = (id) => {
    setEditingCategoryId(id);
    setOpenModal(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/categorias/${id}`);
      fetchCategorias(); // Recarga la lista de categorías después de eliminar
      alert("Categoria eliminada con exito!");
    } catch (error) {
      console.error("Error al eliminar la categoría:", error);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingCategoryId(null);
  };

  const handleCategorySaved = () => {
    fetchCategorias(); // Recarga las categorías
    handleCloseModal(); // Cierra el modal
  };

  return (
    <Paper style={{ margin: "20px", overflowX: "auto" }}>
      <Box display="flex" flexDirection="column" alignItems="center" padding={2}>
        <Typography variant="h4" gutterBottom>
          Categorías
        </Typography>
        <Button variant="contained" color="primary" onClick={handleCreateCategory}>
          Crear Categoría
        </Button>
        <CategoryModal
          open={openModal}
          handleClose={handleCloseModal}
          onCategorySaved={handleCategorySaved}
          categoryId={editingCategoryId}
          isEdit={editingCategoryId !== null}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categorias.map((categoria) => (
              <TableRow key={categoria.id}>
                <TableCell>{categoria.nombre}</TableCell>
                <TableCell>{categoria.descripcion}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(categoria.id)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(categoria.id)}>
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

export default CategoryList;
