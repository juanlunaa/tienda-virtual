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
      title: p.nombre,
      description: p.descripcion,
      brand: p.marca,
      price: p.precio,
      numberUnits: p.numeroUnidades,
      thumbnail: p.miniatura,
      images: p.imagenes.map(i => ({
        id: i.id,
        url: i.urlImagen
      }))
    }))
  } catch (error) {
    console.error('Error fetching products')
    return []
  }
}
