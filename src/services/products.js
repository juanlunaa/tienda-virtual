export async function getAllProducts () {
  try {
    const res = await fetch('http://localhost:8081/products/list')
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`)
    }
    const json = await res.json()
    const products = json.products

    return products?.map(p => ({
      id: p.id,
      nombre: p.nombre,
      descripcion: p.descripcion,
      marca: p.marca,
      precio: p.precio,
      numeroUnidades: p.numeroUnidades,
      imagen: p.urlImagen
    }))
  } catch (error) {
    console.error('Error fetching products')
    return []
  }
}
