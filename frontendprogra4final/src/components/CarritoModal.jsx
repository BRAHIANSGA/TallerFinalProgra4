import React from 'react';
import { Modal, Box, Typography, List, ListItem, Divider, Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const CarritoModal = ({ open, handleClose, carrito, cliente }) => {
  const calcularTotal = () => {
    return carrito.reduce((total, item) => total + item.precio * item.cantidad, 0);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <Typography variant="h6" component="h2">
          Carrito de Compras
        </Typography>
        {cliente && (
          <Typography sx={{ mt: 2 }}>
            Cliente: {cliente.nombre} {cliente.apellidos}

          </Typography>
        )}
        <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
          {carrito.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem>
                <Typography variant="body1">{item.nombre}</Typography>
                <Typography sx={{ ml: 2 }} variant="body2">
                  {item.cantidad} x ${item.precio}
                </Typography>
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </List>
        <Typography sx={{ mt: 2 }} variant="h6">
          Total: ${calcularTotal()}
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button variant="contained" color="primary" onClick={() => {/* confirmar compra recordar  */}}>
            Confirmar Compra
          </Button>
          <Button sx={{ ml: 2 }} variant="outlined" onClick={handleClose}>
            Cerrar
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default CarritoModal;
