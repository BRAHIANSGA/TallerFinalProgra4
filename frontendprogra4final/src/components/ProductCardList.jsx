import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material';

const ProductCardList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/productos');
                setProductos(response.data);
            } catch (error) {
                console.error('Error al obtener los productos:', error);
            }
        };
        fetchProductos();
    }, []);

    const handleAddToCart = (id) => {
        // Implementar la lógica de agregar al carrito aquí
        console.log('Agregar al carrito producto con id:', id);
    };

    return (
        <Grid container spacing={2}>
            {productos.map((producto) => (
                <Grid item xs={12} sm={6} md={4} key={producto.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            height="140"
                            image={producto.imagen || 'placeholder-image-url'}
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
                            <Typography variant="body1">
                                Stock: {producto.stock}
                            </Typography>
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
