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
import ProductModal from "./ProductModal";
const ProductList = () => {
  const [productos, setProductos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [editingProductId, setEditingProductId] = useState(null);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/productos");
      setProductos(response.data);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
    }
  };
  const handleCreateProduct = () => {
    setOpenModal(true);

    console.log("Crear producto");

  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8000/api/productos/${id}`);
      fetchProductos(); 
      alert("Producto eliminado con exito!");
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
    }
  };
  const handleEdit = (id) => {
    setEditingProductId(id);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setEditingProductId(null);
  };
  const handleProductSaved = () => {
    fetchProductos(); // Recarga los productos
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
          Productos
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateProduct}
        >
          Crear Producto
        </Button>
        <ProductModal
          open={openModal}
          handleClose={handleCloseModal}
          onProductSaved={handleProductSaved}
          productId={editingProductId}
          isEdit={editingProductId !== null}
        />
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nombre</TableCell>
              <TableCell>Código</TableCell>
              <TableCell>Descripción</TableCell>
              <TableCell>Precio</TableCell>
              <TableCell>Stock</TableCell>
              <TableCell>Imagen</TableCell>
              <TableCell>Disponible</TableCell>
              <TableCell>Acciones</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {productos.map((producto) => (
              <TableRow key={producto.id}>
                <TableCell>{producto.nombre}</TableCell>
                <TableCell>{producto.codigo}</TableCell>
                <TableCell>{producto.descripcion}</TableCell>
                <TableCell>${producto.precio}</TableCell>
                <TableCell>{producto.stock}</TableCell>
                <TableCell>
                  <img
                    src={producto.imagen}
                    alt={producto.nombre}
                    style={{ width: "50px" }}
                  />
                </TableCell>
                <TableCell>{producto.disponible ? "Sí" : "No"}</TableCell>
                <TableCell>
                  <IconButton onClick={() => handleEdit(producto.id)}>
                    <EditIcon color="primary" />
                  </IconButton>
                  <IconButton onClick={() => handleDelete(producto.id)}>
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
export default ProductList;
