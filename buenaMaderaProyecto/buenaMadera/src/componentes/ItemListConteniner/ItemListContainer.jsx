import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductos, getProductosPorCategorias } from "../../asyncmock";
import ItemList from "../ItemList/ItemList";
import "./ItemsListContainer.css";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [categoria, setCategoria] = useState(""); 

  const { idCategoria } = useParams();

  useEffect(() => {
    const funcionProductos = idCategoria ? getProductosPorCategorias : getProductos;

    funcionProductos(idCategoria).then((res) => {
      setProductos(res);

      
      if (idCategoria) {
        setCategoria(idCategoria);
      } else {
        setCategoria(""); 
      }
    });
  }, [idCategoria]);

  return (
    <>
      {}
      <h2>{idCategoria ? ` ${categoria}` : "Tienda"}</h2>
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
