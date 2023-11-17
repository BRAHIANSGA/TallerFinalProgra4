import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  TextField,
} from "@mui/material";
import CarritoModal from "./CarritoModal";

const ProductCardList = () => {
    const [productos, setProductos] = useState([]);
    const [cantidad, setCantidad] = useState({});
    const [cliente, setCliente] = useState(null);
    const [carrito, setCarrito] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
  

const agregarAlCarrito = async (producto, cantidad) => {
    // Agrega al carrito
    setCarrito([...carrito, { ...producto, cantidad }]);
    const nuevosProductos = productos.map(p => {
        if (p.id === producto.id) {
          return { ...p, stock: p.stock - cantidad };
        }
        return p;
      });
      setProductos(nuevosProductos);
  
      // Limpia el campo de cantidad
      setCantidad({ ...cantidad, [producto.id]: "" });

   
    await axios.post(`http://localhost:8000/api/productos/actualizarStock/${producto.id}`, { cantidad });
};
  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/productos");
        setProductos(response.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };
    fetchProductos();
    fetchClienteInfo();
  }, []);
  const fetchClienteInfo = async () => {
    const userId = localStorage.getItem("userId");
    try {
        const response = await axios.get(`http://localhost:8000/api/clienteUsuarioId/${userId}`);
        setCliente(response.data);
    } catch (error) {
        console.error("Error al obtener la información del cliente:", error);
    }
};

const handleAddToCart = (productoId) => {
    const producto = productos.find(p => p.id === productoId);
    const cantidadProducto = cantidad[productoId] || 0;

    if (cantidadProducto > 0 && cantidadProducto <= producto.stock) {
      agregarAlCarrito(producto, cantidadProducto);
      setIsModalOpen(true); // Abre el modal
    } else {
      
    }
  };
  const handleCantidadChange = (id, event) => {
    setCantidad({ ...cantidad, [id]: event.target.value });
  };

  return (
    <Grid container spacing={2}>
         <CarritoModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        carrito={carrito}
        cliente={cliente}
      />
      {productos.map((producto) => (
        <Grid item xs={12} sm={6} md={4} key={producto.id}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={producto.imagen || "placeholder-image-url"}
              alt={producto.nombre}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {producto.nombre}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {producto.descripcion}
              </Typography>
              <Typography variant="body1">
                Precio: ${producto.precio}
              </Typography>
              <Typography variant="body1">Stock: {producto.stock}</Typography><br />
              <TextField
                label="Cantidad"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                size="small"
                value={cantidad[producto.id] || ""}
                onChange={(e) => handleCantidadChange(producto.id, e)}
              />
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleAddToCart(producto.id)}>
                Agregar
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductCardList;
