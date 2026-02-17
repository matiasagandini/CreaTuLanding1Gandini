import { Link } from "react-router-dom";

const ItemCard = ({ item }) => {
    return (
        <article style={{ border: "1px solid #eee", borderRadius: 12, padding: 12 }}>
            <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", borderRadius: 10, display: "block" }}
            />

            <h3 style={{ margin: "10px 0 6px" }}>{item.title}</h3>
            <p style={{ margin: "0 0 10px" }}>${item.price}</p>

            <Link to={`/item/${item.id}`}>Ver detalle</Link>
        </article>
    );
};

export default ItemCard;
