CREATE TABLE `producto` (
  `partida` int(11) NOT NULL,
  `nombre_articulo` varchar(255) NOT NULL,
  `clave_articulo` int(11) NOT NULL,
  `tipo_unidad` varchar(255) NOT NULL,
  `numero_almacen` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  PRIMARY KEY (`clave_articulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `vale_entrada` (
  `no_factura` int(11) NOT NULL,
  `procedencia` varchar(255) NOT NULL,
  `fecha` date NOT NULL,
  PRIMARY KEY (`no_factura`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `vale_salida` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total_salida` int(11) NOT NULL,
  `solicitante` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `lista_vales_entrada` (
  `factura` int(11) NOT NULL,
  `clave_articulo` int(11) NOT NULL,
  `cantidad_entrada` int(11) NOT NULL,
  `precio_unitario` int(11) NOT NULL,
  `total_entrada` int(11) NOT NULL,
  PRIMARY KEY (`factura`),
  KEY `clave_articulo` (`clave_articulo`),
  CONSTRAINT `lista_vales_entrada_ibfk_2` FOREIGN KEY (`factura`) REFERENCES `vale_entrada` (`no_factura`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `lista_vales_entrada_ibfk_3` FOREIGN KEY (`clave_articulo`) REFERENCES `producto` (`clave_articulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `lista_vales_salida` (
  `id_vale_salida` int(11) NOT NULL,
  `precio_unitario` decimal(10,0) NOT NULL,
  `cantidad_salida` int(11) NOT NULL,
  `fecha_salida` date NOT NULL,
  KEY `Id_vale_salida` (`id_vale_salida`),
  CONSTRAINT `lista_vales_salida_ibfk_3` FOREIGN KEY (`id_vale_salida`) REFERENCES `vale_salida` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;