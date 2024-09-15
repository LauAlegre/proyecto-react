import React, { useEffect, useState } from 'react'
import { getUnProducto } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'


const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)

    const {idItem} = useParams()

    useEffect(()=>{
        const idNumerico = Number(idItem);
        getUnProducto(idNumerico)
            .then(respuesta => setProducto(respuesta))
    }, [idItem])



  return (
    <div>
        <ItemDetail {...producto}/>
    </div>
  )
}

export default ItemDetailContainer