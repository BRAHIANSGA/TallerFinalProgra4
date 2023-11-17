-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-11-2023 a las 21:45:16
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

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` bigint UNSIGNED NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `descripcion` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Producto', 'producto genericos', '2023-11-16 04:15:00', '2023-11-17 08:22:44', NULL),
(4, 'Ingeniería Sostenible', 'producto oton crear', '2023-11-17 08:26:00', '2023-11-17 08:26:00', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `clientes`
--

CREATE TABLE `clientes` (
  `id` bigint UNSIGNED NOT NULL,
  `usuario_id` bigint UNSIGNED NOT NULL,
  `cedula` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `numero_celular` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direccion` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `clientes`
--

INSERT INTO `clientes` (`id`, `usuario_id`, `cedula`, `nombre`, `apellidos`, `numero_celular`, `direccion`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, '12225555', 'Juan', 'Pérez', '1234567890', 'Calle Falsa 123', NULL, NULL, NULL),
(2, 1, '', 'María', 'González', '1234567891', 'Avenida Siempre Viva 456', NULL, NULL, NULL),
(3, 1, '', 'Carlos', 'Hernández', '1234567892', 'Boulevard de las Flores 789', NULL, NULL, NULL),
(4, 1, '', 'Ana', 'Martínez', '1234567893', 'Calle del Sol 101', NULL, NULL, NULL),
(5, 1, '', 'Luis', 'López', '1234567894', 'Avenida del Río 202', NULL, NULL, NULL),
(6, 1, '', 'Carmen', 'García', '1234567895', 'Paseo de los Olivos 303', NULL, NULL, NULL),
(7, 1, '', 'Fernando', 'Álvarez', '1234567896', 'Camino Largo 404', NULL, NULL, NULL),
(8, 1, '', 'Sofía', 'Ruiz', '1234567897', 'Vía Rápida 505', NULL, NULL, NULL),
(9, 1, '', 'Manuel', 'Gómez', '1234567898', 'Ronda del Valle 606', NULL, NULL, NULL),
(10, 1, '', 'Lucíammm', 'Jiménez', '1234567899', 'Travesía de la Montaña 707', NULL, '2023-11-17 07:10:36', '2023-11-17 07:10:36'),
(11, 1, '', 'BRAHIAN', 'gil', '1234567899', 'cr19c#14-86', '2023-11-17 07:12:58', '2023-11-17 07:52:20', '2023-11-17 07:52:20'),
(12, 2, '', 'BRAHIAN', 'gil arias', '3216203644', 'Travesía de la Montaña 707', '2023-11-17 07:47:17', '2023-11-17 07:47:17', NULL),
(13, 3, '31566656', 'brahian prueba', 'gil prueba', '23261', 'cr19c#14-86', '2023-11-18 00:30:58', '2023-11-18 00:30:58', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `compras`
--

CREATE TABLE `compras` (
  `id` bigint UNSIGNED NOT NULL,
  `cliente_id` bigint UNSIGNED NOT NULL,
  `producto_id` bigint UNSIGNED NOT NULL,
  `codigo` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `cantidad` int NOT NULL,
  `precio_unitario` decimal(8,2) NOT NULL,
  `total` decimal(8,2) NOT NULL,
  `fecha_compra` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'pendiente',
  `notas` text COLLATE utf8mb4_unicode_ci,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_09_12_000000_create_type_user_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_reset_tokens_table', 1),
(4, '2019_08_19_000000_create_failed_jobs_table', 1),
(5, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(6, '2023_11_13_002125_create_categorias_table', 1),
(7, '2023_11_14_000716_create_clientes_table', 1),
(8, '2023_11_14_000723_create_productos_table', 1),
(9, '2023_11_14_000736_create_compras_table', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` bigint UNSIGNED NOT NULL,
  `nombre` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `codigo` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `categoria_id` bigint UNSIGNED NOT NULL,
  `descripcion` text COLLATE utf8mb4_unicode_ci,
  `precio` decimal(8,2) NOT NULL,
  `stock` int NOT NULL,
  `imagen` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `disponible` tinyint(1) NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `nombre`, `codigo`, `categoria_id`, `descripcion`, `precio`, `stock`, `imagen`, `disponible`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'Laptop XYZ', 'LT123', 1, 'Laptop de alto rendimiento con pantalla de 15 pulgadas', 1200.00, 9, 'https://es.digitaltrends.com/wp-content/uploads/2023/08/apple-macbook-pro-14-rear-view-e1666806673134.jpg?fit=720%2C480&p=1', 1, NULL, '2023-11-18 01:37:43', NULL),
(2, 'Teléfono Inteligente ABC', 'TP456', 1, 'Smartphone de última generación con cámara de alta calidad', 800.00, 15, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, '2023-11-16 10:17:04', '2023-11-16 10:17:04'),
(3, 'Cámara Digital PRO', 'CD789', 1, 'Cámara digital con lente profesional y 100MP', 500.00, 6, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 0, NULL, '2023-11-18 01:37:53', NULL),
(4, 'Tableta Gráfica', 'TG012', 1, 'Tableta gráfica ideal para diseño y arte digital', 300.00, 11, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, '2023-11-18 01:44:19', NULL),
(5, 'Smartwatch Moderno', 'SW345', 1, 'Reloj inteligente con seguimiento de actividad física y notificaciones', 250.00, 20, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(6, 'Audífonos Bluetooth', 'AB678', 1, 'Audífonos inalámbricos con cancelación de ruido y alta fidelidad', 150.00, 29, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, '2023-11-18 01:44:27', NULL),
(7, 'Consola de Videojuegos', 'CV901', 1, 'Consola de última generación para juegos en 4K', 500.00, 5, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(8, 'Drone con Cámara', 'DC234', 1, 'Drone volador con cámara HD y control remoto', 400.00, 7, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(9, 'Impresora 3D', 'I3D567', 1, 'Impresora 3D de escritorio para modelado y prototipado', 600.00, 4, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(10, 'Router Inalámbrico', 'RI890', 1, 'Router WiFi de alta velocidad y largo alcance', 100.00, 15, 'https://cdn-icons-png.flaticon.com/512/1554/1554591.png', 1, NULL, NULL, NULL),
(11, 'producto prueba', 'iifof888', 1, 'producto oton crear', 20000.00, 5, 'https://copservir.vtexassets.com/arquivos/ids/765055/GASEOSA-QUATRO-TORONJA-NR_F.png?v=637950273843500000', 1, '2023-11-16 10:01:30', '2023-11-16 10:01:30', NULL),
(12, 'carro', 'car44', 1, 'carro 4x4', 34000.00, 3, 'https://www.elcarrocolombiano.com/wp-content/uploads/2022/01/kia-ev6-what-car-carro-del-an%CC%83o.jpg', 1, '2023-11-16 10:11:05', '2023-11-16 10:11:05', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `type_user`
--

CREATE TABLE `type_user` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `type_user`
--

INSERT INTO `type_user` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'administrador', '2023-11-16 03:06:04', '2023-11-16 03:06:28'),
(2, 'Cliente', '2023-11-17 02:46:19', '2023-11-17 02:46:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `type_user_id` bigint UNSIGNED NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `type_user_id`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'brahian', 'brahian776@gmail.com', NULL, '$2y$12$Fe4pVwAd8r3yxB6d5IS45ufGTExPqINjfrcKC1XKUwPL712N4e7hO', 1, NULL, NULL, NULL),
(2, 'Catolica1', 'brahian.gil@ucp.edu.co', NULL, '$2y$12$Fe4pVwAd8r3yxB6d5IS45ufGTExPqINjfrcKC1XKUwPL712N4e7hO', 2, NULL, '2023-11-17 07:47:17', '2023-11-17 07:47:17'),
(3, 'brahian12', 'prueba@gmail.com', NULL, '$2y$12$Hv2SWXwU0NuXk810zdl4H.mMGSN5SnKCfKF7JVC2DneToAunS0HlO', 1, NULL, '2023-11-18 00:30:57', '2023-11-18 00:30:57');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `clientes_usuario_id_foreign` (`usuario_id`);

--
-- Indices de la tabla `compras`
--
ALTER TABLE `compras`
  ADD PRIMARY KEY (`id`),
  ADD KEY `compras_cliente_id_foreign` (`cliente_id`),
  ADD KEY `compras_producto_id_foreign` (`producto_id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `productos_codigo_unique` (`codigo`),
  ADD KEY `productos_categoria_id_foreign` (`categoria_id`);

--
-- Indices de la tabla `type_user`
--
ALTER TABLE `type_user`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_type_user_id_foreign` (`type_user_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `clientes`
--
ALTER TABLE `clientes`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `compras`
--
ALTER TABLE `compras`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT de la tabla `type_user`
--
ALTER TABLE `type_user`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `clientes`
--
ALTER TABLE `clientes`
  ADD CONSTRAINT `clientes_usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `compras`
--
ALTER TABLE `compras`
  ADD CONSTRAINT `compras_cliente_id_foreign` FOREIGN KEY (`cliente_id`) REFERENCES `clientes` (`id`),
  ADD CONSTRAINT `compras_producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_categoria_id_foreign` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_type_user_id_foreign` FOREIGN KEY (`type_user_id`) REFERENCES `type_user` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
