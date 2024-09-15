const misProductos = [
    { 
        id: 1, 
        nombre: "Mate de Madera", 
        stock: 15, 
        precio: 3000, 
        img: "../public/mateMadera.jpg", 
        idCat: "Mates", 
        descripcion: "Un mate rústico de madera, perfecto para el disfrute diario."
    },
    { 
        id: 2, 
        nombre: "Bombilla de Acero", 
        stock: 20, 
        precio: 500, 
        img: "../public/bombilla.jpg", 
        idCat: "Bombillas", 
        descripcion: "Una bombilla resistente y de acero inoxidable, ideal para un mate duradero."
    },
    { 
        id: 3, 
        nombre: "Termo 1 Litro", 
        stock: 8, 
        precio: 4500, 
        img: "../public/46839-TERMO-STANLEY-ADVENTURE-0.jpg", 
        idCat: "Termos", 
        descripcion: "Termo de 1 litro, conserva la temperatura por horas, perfecto para aventuras."
    }, 
    { 
        id: 4, 
        nombre: "Mate de Cuero", 
        stock: 10, 
        precio: 2500, 
        img: "../public/mateCuero.jfif", 
        idCat: "Mates", 
        descripcion: "Un elegante mate de cuero, hecho a mano con materiales de calidad."
    },
];


export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(misProductos);
        }, 100);
    });
}

// Obtener el detalle de un solo producto por su ID
export const getUnProducto = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const producto = misProductos.find(item => item.id === id);
            resolve(producto);
        }, 100);
    });
}

// Obtener productos por categoría
export const getProductosPorCategorias = (idCategoria) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const productos = misProductos.filter(item => item.idCat === idCategoria);
            resolve(productos);
        }, 100);
    });
}
