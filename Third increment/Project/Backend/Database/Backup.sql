CREATE TABLE `almacenes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `almacen` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8;

CREATE TABLE `areas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `area` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

CREATE TABLE `catalogo_partidas` (
  `partidas` varchar(255) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1274 DEFAULT CHARSET=utf8;

CREATE TABLE `usuarios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(255) NOT NULL,
  `contrasena` varchar(255) NOT NULL,
  `correo_electronico` varchar(255) NOT NULL,
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=494 DEFAULT CHARSET=utf8;

CREATE TABLE `vale_entrada` (
  `no_factura` int(11) NOT NULL,
  `procedencia` varchar(255) NOT NULL,
  `fecha` varchar(60) NOT NULL,
  `total_entrada` int(11) NOT NULL,
  PRIMARY KEY (`no_factura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `vale_salida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total_salida` int(11) NOT NULL,
  `id_solicitante` int(11) NOT NULL,
  `fecha` varchar(60) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_solicitante` (`id_solicitante`),
  CONSTRAINT `vale_salida_ibfk_1` FOREIGN KEY (`id_solicitante`) REFERENCES `areas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=104 DEFAULT CHARSET=utf8;


CREATE TABLE `producto` (
  `id_partida` int(11) NOT NULL,
  `nombre_articulo` varchar(255) NOT NULL,
  `clave_articulo` int(11) NOT NULL,
  `tipo_unidad` varchar(255) NOT NULL,
  `id_almacen` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`clave_articulo`),
  KEY `id_partida` (`id_partida`),
  KEY `numero_almacen` (`id_almacen`),
  CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_partida`) REFERENCES `catalogo_partidas` (`id`),
  CONSTRAINT `producto_ibfk_2` FOREIGN KEY (`id_almacen`) REFERENCES `almacenes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


CREATE TABLE `lista_vales_entrada` (
  `factura` int(11) NOT NULL,
  `clave_articulo` int(11) NOT NULL,
  `cantidad_entrada` int(11) NOT NULL,
  `precio_unitario` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `clave_articulo` (`clave_articulo`),
  KEY `factura` (`factura`),
  CONSTRAINT `lista_vales_entrada_ibfk_3` FOREIGN KEY (`clave_articulo`) REFERENCES `producto` (`clave_articulo`),
  CONSTRAINT `lista_vales_entrada_ibfk_4` FOREIGN KEY (`factura`) REFERENCES `vale_entrada` (`no_factura`)
) ENGINE=InnoDB AUTO_INCREMENT=74 DEFAULT CHARSET=utf8;

CREATE TABLE `lista_vales_salida` (
  `id_vale_salida` int(11) NOT NULL,
  `cantidad_salida` int(11) NOT NULL,
  `precio_unitario` decimal(10,0) NOT NULL,
  `clave_articulo` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`),
  KEY `Id_vale_salida` (`id_vale_salida`),
  KEY `clave_articulo` (`clave_articulo`),
  CONSTRAINT `lista_vales_salida_ibfk_3` FOREIGN KEY (`id_vale_salida`) REFERENCES `vale_salida` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lista_vales_salida_ibfk_4` FOREIGN KEY (`clave_articulo`) REFERENCES `producto` (`clave_articulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `almacenes` (`id`, `almacen`) VALUES
(1, 'Almacén general');

INSERT INTO `areas` (`id`, `area`) VALUES
(4, 'dirección');

INSERT INTO `catalogo_partidas` (`partidas`, `id`) VALUES
('2000 - Materiales y suministros', 64);
INSERT INTO `catalogo_partidas` (`partidas`, `id`) VALUES
('2100 - Materiales de administración, emisión de documenttos y artículos oficiales', 74);
INSERT INTO `catalogo_partidas` (`partidas`, `id`) VALUES
('21101 - Materiales y útilies de oficina', 84);
INSERT INTO `catalogo_partidas` (`partidas`, `id`) VALUES
('21201 - Materiales y útiles de impresión y reproducción', 94),
('21301 - Material estadístico y geográfico', 104),
('21401 - Materiales y útiles consumibles para el procesamiento en equipos y bienes informáticos', 114),
('21501 - Material de apoyo informativo', 124),
('21502 - Materil para información en actividades de investigación científica y tecnológica', 134),
('21601 - Material de limpieza', 144),
('2200 - Alimentos y utensilios', 154),
('22104 - Productos alimenticios para el personal en las instalaciones de las dependencias y entidades', 164),
('22031 - Utensilios para el servicio de alimentación', 174),
('2400 - Materiales y artículos de construcción y de reparación', 184),
('24101 - Productos minerales no metálicos', 194),
('24201 - Cemento y productos de concreto', 204),
('24301 - Cal, yeso, y productos de yeso', 214),
('24401 - Madera y productos de madera', 224),
('24501 - Vidrio y productos de vidrio', 234),
('24601 - Material eléctrico y electrónico', 244),
('24701 - Artículos metálicos para la construcción', 254),
('24801 - Materiales complementarios', 264),
('24901 - Otros materiales y artículos de construcción y reparación ', 274),
('2500 - Productos químicos, farmacéuticos y de laboratorio', 284),
('25101 - Productos químicos básicos', 294),
('25201 - Plaguicidas, abonos y fertilizantes', 304),
('25301 - Medicinas y productos farmacéuticos', 314),
('25401 - Materiales, accesorios y suministros médicos', 324),
('25501 - Materiales, accesorios y suministros de laboratorio', 334),
('2600 - Combustibles, lubricantes y aditivos', 344),
('26102 - Combustibles, lubricantes y aditivos para vehículos teerestres, aéreos, marítimo, lacustres y fluviales destinados a servicios públicos y la operación de programas públicos.', 354),
('26103 - Combustibles, lubricantes y aditivos para vehpiculos terrestres, aéreos, marítimos, lacustres y fluviales destinados a servicios administrativos', 364),
('26105 - Combustibles, lubricantes y aditivos para maquinaria, equipo de producción y servicios administrativos', 374),
('2700 - Vestuaria, blancos, prendas de protección y artículos deportivos', 384),
('27101 - Vestuario y uniformes', 394),
('27201 - Prenas de protección personal', 404),
('27301 - Artículos deportivos', 414),
('27401 - Productos textiles', 424),
('27501 - Blancos y otros productos textiles, excepto prendas de vestir', 434),
('2900 - Herramientas, refacciones y accesorios menores', 444),
('29101 - Herramientas menores', 454),
('29201 - Refacciones y accesorios menores de edificios', 464),
('29301 - Refacciones y accesorios menores de mobiliario y equipo de administración, educacional y recreativo', 474),
('29401 - Refacciones y accesorios para equipo de cómputo y telecomunicaciones', 484),
('29601 - Refacciones y accesorios menores de equipo de transporte', 494),
('29801 - Refacciones y accesorios menores de maquinaria y otros equipos', 504),
('29901 - Refacciones y accesorios menores otros bienes muebles', 514),
('3000 - Servicios generales', 524),
('3100 - Servicios básicos ', 534),
('31101 - Servicio de energía eléctrica', 544),
('31201 - Servicio de gas', 554),
('31301 - Servicio de agua ', 564),
('31401 - Servicio telefónico convencional', 574),
('31701 - Servicios de conducción de señales analógicas y digitales', 584),
('31801 - Servicio postal', 594),
('31802 - Servicio telegráfico', 604),
('3200 - Servicios de arrendamiento', 614),
('32701 - Patentes, derechos de autor, regalías y otros', 624),
('3300 - Servicios profesionales, científicos, técnicos y otros servicios', 634),
('33104 - Otras asesorías para la operación de programas', 644),
('33303 - Servicios relacionados con la certificación de procesos', 654),
('33401 - Servicios para capacitación a servidores públicos', 664),
('33602 - Otros servicios comerciales', 674),
('33603 - Impresiones de documentos oficiales para la presentación de servicios públicos, identificación, formatos administrativos y fiscales, formas valoradas, certificados y títulos', 684),
('33604 - Impresión y elaboración de material informativo derivado de la operación y administración de las dependencias y entidades', 694),
('33801 - Servicios de vigilancia', 704),
('3400 - Servicios financieros, bancarios y comerciales', 714),
('34101 - Servicios bancarios y financieros', 724),
('34501 - Seguros de bienes patrimoniales', 734),
('34601 - Almacenaje, embalaje y envase', 744),
('34701 - Fletes y maniobras', 754),
('3500 - Servicios de instalación, reparación, mantenimiento y conservación', 764),
('35101 - Mantenimiento y conservación de inmuebles para la prestación de servicios administrativos', 774),
('35102 - Mantenimiento y conservación de inmuebles para la prestación de servicios públicos', 784),
('35201 - Mantenimiento y conservación de mobiliario y equipo de administración', 794),
('35301 - Mantenimiento y conservación de bienes infromátivos', 804),
('35501 - Mantenimiento y conservación de vehículos terrestres, aéreos, marítimos, lacustres y fluviales', 814),
('35701 - Mantenimiento y conservación de maquinaria y equipo', 824),
('35801- Servicios de lavandería, limpieza e higiene', 834),
('35901 - Servicio de jardinería y fumigación', 844),
('3600 - Servicios de comunicacion social y publicidad', 854),
('36101 - Difusión de mensajes sobre programas y actividades gubernamentales', 864),
('3700 - Servicios de traslado y viáticos', 874),
('37101 - Pasajes apereos nacionales para labores en campo y de supervisión', 884),
('37104 - Pasajes aéreos nacionales para servidores públicos de mando en el desempeño de comisiones y funciones oficiales', 894),
('37201 - Pasajes terrestres nacionales para labores en campo y de supervisión', 904),
('37204 - Pasajes terrestres nacionales para servidores públicos de mando en el desempeñp de comisiones y funciones oficiales', 914),
('37501 - Viáticos nacionales para labores en campo y de supervisión', 924),
('37504 - Viáticos nacionales para servidores públicos en el desempeño de funciones oficiales', 934),
('37901 - Gastos para operativos y trabajos de campo en áreas rurales', 944),
('3800 - Servicios oficiales', 954),
('38201 - Gastos de orden social', 964),
('38301 - Congresos y conveciones ', 974),
('38401 - Esposiciones', 984),
('3900 - Otros servicios generales', 994),
('39202 - Otros impuestos y derechos', 1004),
('4000 - Transferencias, asignaciones, subidos y otras ayudas', 1014),
('4400 - Ayudas sociales', 1024),
('44101 - Gastos relacionados con actividades culturales, deportivas y de ayuda extraordinaria', 1034),
('44102 - Gastos por servicios de traslado de personas', 1044),
('5000 - Bienes muebles, inmuebles e intangibles', 1054),
('5100 - Mobiliario y equipo de administración', 1064),
('51101 - Mobiliario', 1074),
('51301 - Bienes artísticos y culturales', 1084),
('51501 - Bienes informáticos', 1094),
('51901 - Equipo de administración', 1104),
('5200 - Mobiliario y equipo educacional y recreativo', 1114),
('52101 - Equipos y aparatos audiovisuales', 1124),
('52201 - Aparatos deportivos', 1134),
('52301 - Cámaras fotográficas y de video', 1144),
('52901 - Otro mobiliario y equipo educacional y recreativo', 1154),
('5300 - Equipo e instrumental médico y de laboratorio', 1164),
('53101 - Equipo médico y de laboratorio', 1174),
('53201 - Instrumental médico y de laboratorio', 1184),
('5600 - Maquinaria, otros equipos y herramientas', 1194),
('56101  - Maquinaria y equipo agropecuarios', 1204),
('56201 - Maquinaria y equipo industrial', 1214),
('56501 - Equipos y aparatos de comunicaciones y telecomunicaciones', 1224),
('56601 - Maquinaria y equipo eléctrico y electrónico', 1234),
('56701 - Herramientas y maquinas herramienta', 1244),
('5900 - Activos Intangibles', 1254),
('59101 - Software', 1264);

INSERT INTO `lista_vales_entrada` (`factura`, `clave_articulo`, `cantidad_entrada`, `precio_unitario`, `id`) VALUES
(1401, 75000615, 5, 20, 44);
INSERT INTO `lista_vales_entrada` (`factura`, `clave_articulo`, `cantidad_entrada`, `precio_unitario`, `id`) VALUES
(1401, 2147483647, 10, 12, 54);
INSERT INTO `lista_vales_entrada` (`factura`, `clave_articulo`, `cantidad_entrada`, `precio_unitario`, `id`) VALUES
(12345, 12, 5, 10, 64);



INSERT INTO `producto` (`id_partida`, `nombre_articulo`, `clave_articulo`, `tipo_unidad`, `id_almacen`, `cantidad`) VALUES
(64, 'Cepillo', 12, 'Pieza', 1, 5);
INSERT INTO `producto` (`id_partida`, `nombre_articulo`, `clave_articulo`, `tipo_unidad`, `id_almacen`, `cantidad`) VALUES
(144, 'Cloralex 1lt', 75000615, 'Litro', 1, 5);
INSERT INTO `producto` (`id_partida`, `nombre_articulo`, `clave_articulo`, `tipo_unidad`, `id_almacen`, `cantidad`) VALUES
(154, 'Sopa Nissin', 2147483647, 'Pieza', 1, 10);

INSERT INTO `usuarios` (`id`, `nombre`, `contrasena`, `correo_electronico`) VALUES
(294, 'Abraham Espinosa', 'gAAAAABie1hGbthKBYAaI0wQw1AXIwjbVmzPu_yBSUb5-enKcbUEJQ7iez6KYnVF-fzRIOxIJTg3XztBdeSU1nFdLz0V5LFfKg==', 'admin@dgcft.sems.gob.mx');


INSERT INTO `vale_entrada` (`no_factura`, `procedencia`, `fecha`, `total_entrada`) VALUES
(1401, 'Tiendas Monterrey', '2022-05-12', 220);
INSERT INTO `vale_entrada` (`no_factura`, `procedencia`, `fecha`, `total_entrada`) VALUES
(12345, 'Monterrey', '2022-05-12', 50);