import "./Item.css"
import { Link } from "react-router-dom"


const ItemList = ({items}) => {

  return (
    <>
      {
        items.map((element) => (
          <div className="card">
            <h2>{element.name}</h2>
            <img src={element.img} alt="" />
            <h3>${element.price}</h3>
            <Link to={`/itemDetail/${element.id}`} size="large" variant="contained">
              Ver detalle
            </Link>
          </div>
        ))
      }
    </>
  )
}

export default ItemList
