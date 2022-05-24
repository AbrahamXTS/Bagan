export const filterResults = (busqueda, array, propiedad, setArrayFiltrado) => {
	if (busqueda == "") {
		setArrayFiltrado(array);
	} else {
		setArrayFiltrado(
			array.filter((elemento) =>
				elemento[propiedad].toLowerCase().includes(busqueda)
			)
		);
	}
};
