import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const ProductModal = ({
  open,
  handleClose,
  onProductSaved,
  productId,
  isEdit,
}) => {
  const [categorias, setCategorias] = useState([]);
  const [producto, setProducto] = useState({
    nombre: "",
    codigo: "",
    categoria_id: "",
    descripcion: "",
    precio: "",
    stock: "",
    imagen: "",
    disponible: false,
  });
  useEffect(() => {
    if (open && isEdit && productId) {
      fetchCategorias();
      loadProductData();
    } else {
      fetchCategorias();
      resetForm();
    }
  }, [open, isEdit, productId]);
   const resetForm = () => {
    setProducto({
      nombre: "",
      codigo: "",
      categoria_id: "",
      descripcion: "",
      precio: "",
      stock: "",
      imagen: "",
      disponible: false,
    });
  };
  const loadProductData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/productos/${productId}`
      );
      setProducto(response.data);
    } catch (error) {
      console.error("Error al cargar el producto:", error);
    }
  };

  const fetchCategorias = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/categorias");
      setCategorias(response.data);
    } catch (error) {
      console.error("Error al cargar categorías:", error);
    }
  };

  const handleChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.value });
  };

  const handleCheckChange = (e) => {
    setProducto({ ...producto, [e.target.name]: e.target.checked });
  };

  const handleSubmit = async () => {
    try {
      const method = isEdit ? "put" : "post";
      const url = isEdit
        ? `http://localhost:8000/api/productos/${productId}`
        : "http://localhost:8000/api/productos";
      const response = await axios[method](url, producto);
      console.log(response.data);
      handleClose();
      onProductSaved();
    } catch (error) {
      console.error("Error al crear producto:", error);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6">Crear Producto</Typography>
        {/* Campos del formulario */}
        <TextField
          label="Nombre"
          name="nombre"
          value={producto.nombre}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Código"
          name="codigo"
          value={producto.codigo}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel>Categoría</InputLabel>
          <Select
            label="Categoría"
            name="categoria_id"
            value={producto.categoria_id}
            onChange={handleChange}
          >
            {categorias.map((categoria) => (
              <MenuItem key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Descripción"
          name="descripcion"
          value={producto.descripcion}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Precio"
          name="precio"
          value={producto.precio}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Stock"
          name="stock"
          value={producto.stock}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Imagen URL"
          name="imagen"
          value={producto.imagen}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={producto.disponible}
              onChange={handleCheckChange}
              name="disponible"
            />
          }
          label="Disponible"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit}
          style={{ marginTop: "10px" }}
        >
          Guardar
        </Button>
      </Box>
    </Modal>
  );
};

export default ProductModal;
