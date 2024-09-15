import { Link } from 'react-router-dom';
import "./item.css"

const Item = ({id, nombre, precio, img}) => {
  return (
    <div className='cardProductoItem'>
        <img src={img} alt={nombre} />
        <h3>{nombre} </h3>
        <p className='precio'> ${precio} </p>
        <Link className='ver-detalle' to={`/item/${id}`}>Ver Detalles</Link>
          
    </div>
  )
}

export default Item