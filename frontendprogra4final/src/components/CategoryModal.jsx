import React, { useState, useEffect } from "react";
import axios from "axios";
import { Modal, Box, Typography, TextField, Button } from "@mui/material";

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

const CategoryModal = ({
    open,
    handleClose,
    onCategorySaved,
    categoryId,
    isEdit,
}) => {
    const initialState = {
        nombre: "",
        descripcion: "",
    };
    const [categoria, setCategoria] = useState(initialState);

    useEffect(() => {
        if (open && isEdit && categoryId) {
            loadCategoryData();
        } else {
            setCategoria(initialState);
        }
    }, [open, isEdit, categoryId]);

    const loadCategoryData = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/api/categorias/${categoryId}`);
            setCategoria(response.data);
        } catch (error) {
            console.error("Error al cargar la categoría:", error);
        }
    };

    const handleChange = (e) => {
        setCategoria({ ...categoria, [e.target.name]: e.target.value });
    };

    const handleSubmit = async () => {
        try {
            const method = isEdit ? "put" : "post";
            const url = isEdit ? `http://localhost:8000/api/categorias/${categoryId}` : "http://localhost:8000/api/categorias";
            await axios[method](url, categoria);
            handleClose();
            onCategorySaved();
        } catch (error) {
            console.error(`Error al ${isEdit ? "actualizar" : "crear"} la categoría:`, error);
        }
    };

    return (
        <Modal open={open} onClose={handleClose}>
            <Box sx={style}>
                <Typography variant="h6">{isEdit ? "Editar Categoría" : "Crear Categoría"}</Typography>
                <TextField label="Nombre" name="nombre" value={categoria.nombre} onChange={handleChange} fullWidth margin="normal" />
                <TextField label="Descripción" name="descripcion" value={categoria.descripcion} onChange={handleChange} fullWidth margin="normal" />
                <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: "10px" }}>
                    {isEdit ? "Actualizar" : "Guardar"}
                </Button>
            </Box>
        </Modal>
    );
};

export default CategoryModal;
