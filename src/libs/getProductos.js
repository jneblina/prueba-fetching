export async function obtenerProductos() {
	const response = await fetch('https://dummyjson.com/products')
	return response.json()
}

export async function obtenerProducto (id) {
	const response = await fetch(`https://dummyjson.com/products/${id}`)
	if(!response.ok) throw new Error('No se pudo obtener')
	return response.json();
  }