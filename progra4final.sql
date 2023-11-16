-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 16-11-2023 a las 06:18:40
-- Versión del servidor: 8.0.32
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `progra4final`
--

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`, `created_at`, `updated_at`) VALUES
(1, 'Producto', 'producto', '2023-11-16 04:15:00', '2023-11-16 04:15:00');



--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `codigo`, `categoria_id`, `descripcion`, `precio`, `stock`, `imagen`, `disponible`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Laptop XYZ', 'LT123', 1, 'Laptop de alto rendimiento con pantalla de 15 pulgadas', 1200.00, 10, 'https://es.digitaltrends.com/wp-content/uploads/2023/08/apple-macbook-pro-14-rear-view-e1666806673134.jpg?fit=720%2C480&p=1', 1, NULL, NULL, NULL),
(2, 'Teléfono Inteligente ABC', 'TP456', 1, 'Smartphone de última generación con cámara de alta calidad', 800.00, 15, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, '2023-11-16 10:17:04', '2023-11-16 10:17:04'),
(3, 'Cámara Digital PRO', 'CD789', 1, 'Cámara digital con lente profesional y 20MP', 500.00, 8, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(4, 'Tableta Gráfica', 'TG012', 1, 'Tableta gráfica ideal para diseño y arte digital', 300.00, 12, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(5, 'Smartwatch Moderno', 'SW345', 1, 'Reloj inteligente con seguimiento de actividad física y notificaciones', 250.00, 20, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(6, 'Audífonos Bluetooth', 'AB678', 1, 'Audífonos inalámbricos con cancelación de ruido y alta fidelidad', 150.00, 30, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(7, 'Consola de Videojuegos', 'CV901', 1, 'Consola de última generación para juegos en 4K', 500.00, 5, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(8, 'Drone con Cámara', 'DC234', 1, 'Drone volador con cámara HD y control remoto', 400.00, 7, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(9, 'Impresora 3D', 'I3D567', 1, 'Impresora 3D de escritorio para modelado y prototipado', 600.00, 4, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(10, 'Router Inalámbrico', 'RI890', 1, 'Router WiFi de alta velocidad y largo alcance', 100.00, 15, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(11, 'producto prueba', 'iifof888', 1, 'producto oton crear', 20000.00, 5, 'https://copservir.vtexassets.com/arquivos/ids/765055/GASEOSA-QUATRO-TORONJA-NR_F.png?v=637950273843500000', 1, '2023-11-16 10:01:30', '2023-11-16 10:01:30', NULL),
(12, 'carro', 'car44', 1, 'carro 4x4', 34000.00, 3, 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/01/kia-ev6-what-car-carro-del-an%CC%83o.jpg', 1, '2023-11-16 10:11:05', '2023-11-16 10:11:05', NULL);

--
-- Volcado de datos para la tabla `type_user`
--

INSERT INTO `type_user` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'administrador', '2023-11-16 03:06:04', '2023-11-16 03:06:28');

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `type_user_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'brahian', 'brahian776@gmail.com', NULL, 'brahiang321', 1, NULL, NULL, NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
