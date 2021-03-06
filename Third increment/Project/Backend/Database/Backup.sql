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
(1, 'Almac??n general');

INSERT INTO `areas` (`id`, `area`) VALUES
(4, 'direcci??n');

INSERT INTO `catalogo_partidas` (`partidas`, `id`) VALUES
('2000 - Materiales y suministros', 64);
INSERT INTO `catalogo_partidas` (`partidas`, `id`) VALUES
('2100 - Materiales de administraci??n, emisi??n de documenttos y art??culos oficiales', 74);
INSERT INTO `catalogo_partidas` (`partidas`, `id`) VALUES
('21101 - Materiales y ??tilies de oficina', 84);
INSERT INTO `catalogo_partidas` (`partidas`, `id`) VALUES
('21201 - Materiales y ??tiles de impresi??n y reproducci??n', 94),
('21301 - Material estad??stico y geogr??fico', 104),
('21401 - Materiales y ??tiles consumibles para el procesamiento en equipos y bienes inform??ticos', 114),
('21501 - Material de apoyo informativo', 124),
('21502 - Materil para informaci??n en actividades de investigaci??n cient??fica y tecnol??gica', 134),
('21601 - Material de limpieza', 144),
('2200 - Alimentos y utensilios', 154),
('22104 - Productos alimenticios para el personal en las instalaciones de las dependencias y entidades', 164),
('22031 - Utensilios para el servicio de alimentaci??n', 174),
('2400 - Materiales y art??culos de construcci??n y de reparaci??n', 184),
('24101 - Productos minerales no met??licos', 194),
('24201 - Cemento y productos de concreto', 204),
('24301 - Cal, yeso, y productos de yeso', 214),
('24401 - Madera y productos de madera', 224),
('24501 - Vidrio y productos de vidrio', 234),
('24601 - Material el??ctrico y electr??nico', 244),
('24701 - Art??culos met??licos para la construcci??n', 254),
('24801 - Materiales complementarios', 264),
('24901 - Otros materiales y art??culos de construcci??n y reparaci??n ', 274),
('2500 - Productos qu??micos, farmac??uticos y de laboratorio', 284),
('25101 - Productos qu??micos b??sicos', 294),
('25201 - Plaguicidas, abonos y fertilizantes', 304),
('25301 - Medicinas y productos farmac??uticos', 314),
('25401 - Materiales, accesorios y suministros m??dicos', 324),
('25501 - Materiales, accesorios y suministros de laboratorio', 334),
('2600 - Combustibles, lubricantes y aditivos', 344),
('26102 - Combustibles, lubricantes y aditivos para veh??culos teerestres, a??reos, mar??timo, lacustres y fluviales destinados a servicios p??blicos y la operaci??n de programas p??blicos.', 354),
('26103 - Combustibles, lubricantes y aditivos para vehpiculos terrestres, a??reos, mar??timos, lacustres y fluviales destinados a servicios administrativos', 364),
('26105 - Combustibles, lubricantes y aditivos para maquinaria, equipo de producci??n y servicios administrativos', 374),
('2700 - Vestuaria, blancos, prendas de protecci??n y art??culos deportivos', 384),
('27101 - Vestuario y uniformes', 394),
('27201 - Prenas de protecci??n personal', 404),
('27301 - Art??culos deportivos', 414),
('27401 - Productos textiles', 424),
('27501 - Blancos y otros productos textiles, excepto prendas de vestir', 434),
('2900 - Herramientas, refacciones y accesorios menores', 444),
('29101 - Herramientas menores', 454),
('29201 - Refacciones y accesorios menores de edificios', 464),
('29301 - Refacciones y accesorios menores de mobiliario y equipo de administraci??n, educacional y recreativo', 474),
('29401 - Refacciones y accesorios para equipo de c??mputo y telecomunicaciones', 484),
('29601 - Refacciones y accesorios menores de equipo de transporte', 494),
('29801 - Refacciones y accesorios menores de maquinaria y otros equipos', 504),
('29901 - Refacciones y accesorios menores otros bienes muebles', 514),
('3000 - Servicios generales', 524),
('3100 - Servicios b??sicos ', 534),
('31101 - Servicio de energ??a el??ctrica', 544),
('31201 - Servicio de gas', 554),
('31301 - Servicio de agua ', 564),
('31401 - Servicio telef??nico convencional', 574),
('31701 - Servicios de conducci??n de se??ales anal??gicas y digitales', 584),
('31801 - Servicio postal', 594),
('31802 - Servicio telegr??fico', 604),
('3200 - Servicios de arrendamiento', 614),
('32701 - Patentes, derechos de autor, regal??as y otros', 624),
('3300 - Servicios profesionales, cient??ficos, t??cnicos y otros servicios', 634),
('33104 - Otras asesor??as para la operaci??n de programas', 644),
('33303 - Servicios relacionados con la certificaci??n de procesos', 654),
('33401 - Servicios para capacitaci??n a servidores p??blicos', 664),
('33602 - Otros servicios comerciales', 674),
('33603 - Impresiones de documentos oficiales para la presentaci??n de servicios p??blicos, identificaci??n, formatos administrativos y fiscales, formas valoradas, certificados y t??tulos', 684),
('33604 - Impresi??n y elaboraci??n de material informativo derivado de la operaci??n y administraci??n de las dependencias y entidades', 694),
('33801 - Servicios de vigilancia', 704),
('3400 - Servicios financieros, bancarios y comerciales', 714),
('34101 - Servicios bancarios y financieros', 724),
('34501 - Seguros de bienes patrimoniales', 734),
('34601 - Almacenaje, embalaje y envase', 744),
('34701 - Fletes y maniobras', 754),
('3500 - Servicios de instalaci??n, reparaci??n, mantenimiento y conservaci??n', 764),
('35101 - Mantenimiento y conservaci??n de inmuebles para la prestaci??n de servicios administrativos', 774),
('35102 - Mantenimiento y conservaci??n de inmuebles para la prestaci??n de servicios p??blicos', 784),
('35201 - Mantenimiento y conservaci??n de mobiliario y equipo de administraci??n', 794),
('35301 - Mantenimiento y conservaci??n de bienes infrom??tivos', 804),
('35501 - Mantenimiento y conservaci??n de veh??culos terrestres, a??reos, mar??timos, lacustres y fluviales', 814),
('35701 - Mantenimiento y conservaci??n de maquinaria y equipo', 824),
('35801- Servicios de lavander??a, limpieza e higiene', 834),
('35901 - Servicio de jardiner??a y fumigaci??n', 844),
('3600 - Servicios de comunicacion social y publicidad', 854),
('36101 - Difusi??n de mensajes sobre programas y actividades gubernamentales', 864),
('3700 - Servicios de traslado y vi??ticos', 874),
('37101 - Pasajes apereos nacionales para labores en campo y de supervisi??n', 884),
('37104 - Pasajes a??reos nacionales para servidores p??blicos de mando en el desempe??o de comisiones y funciones oficiales', 894),
('37201 - Pasajes terrestres nacionales para labores en campo y de supervisi??n', 904),
('37204 - Pasajes terrestres nacionales para servidores p??blicos de mando en el desempe??p de comisiones y funciones oficiales', 914),
('37501 - Vi??ticos nacionales para labores en campo y de supervisi??n', 924),
('37504 - Vi??ticos nacionales para servidores p??blicos en el desempe??o de funciones oficiales', 934),
('37901 - Gastos para operativos y trabajos de campo en ??reas rurales', 944),
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
('5100 - Mobiliario y equipo de administraci??n', 1064),
('51101 - Mobiliario', 1074),
('51301 - Bienes art??sticos y culturales', 1084),
('51501 - Bienes inform??ticos', 1094),
('51901 - Equipo de administraci??n', 1104),
('5200 - Mobiliario y equipo educacional y recreativo', 1114),
('52101 - Equipos y aparatos audiovisuales', 1124),
('52201 - Aparatos deportivos', 1134),
('52301 - C??maras fotogr??ficas y de video', 1144),
('52901 - Otro mobiliario y equipo educacional y recreativo', 1154),
('5300 - Equipo e instrumental m??dico y de laboratorio', 1164),
('53101 - Equipo m??dico y de laboratorio', 1174),
('53201 - Instrumental m??dico y de laboratorio', 1184),
('5600 - Maquinaria, otros equipos y herramientas', 1194),
('56101  - Maquinaria y equipo agropecuarios', 1204),
('56201 - Maquinaria y equipo industrial', 1214),
('56501 - Equipos y aparatos de comunicaciones y telecomunicaciones', 1224),
('56601 - Maquinaria y equipo el??ctrico y electr??nico', 1234),
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