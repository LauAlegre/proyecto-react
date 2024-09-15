import React from 'react'
import "../ItemDetail/ItemDetail.css"


const ItemDetail = ({id, nombre, precio, img,descripcion}) => {

    return (
      <div className='cardProducto'>
        <img className='img_item' src={img} alt={nombre} />
        <div className='descripcion'>
          <h2> {nombre} </h2>
          <h3>${precio} </h3>
          <p>{descripcion}</p>
          <button>AGREGAR AL CARRITO</button>
        </div>
      </div>
    )
  }
  
  export default ItemDetail