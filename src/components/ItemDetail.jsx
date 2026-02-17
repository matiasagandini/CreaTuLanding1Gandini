import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const onAdd = (qty) => {
        // Por ahora solo mostramos en consola (carrito viene después)
        console.log("Agregar:", item.title, "Cantidad:", qty);
    };

    return (
        <main style={{ maxWidth: 900, margin: "0 auto", padding: "24px 16px" }}>
            <h2 style={{ marginTop: 0 }}>{item.title}</h2>

            <img
                src={item.img}
                alt={item.title}
                style={{ width: "100%", maxWidth: 520, borderRadius: 12, display: "block" }}
            />

            <p style={{ marginTop: 12 }}>{item.description}</p>
            <p>
                <b>Precio:</b> ${item.price}
            </p>

            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </main>
    );
};

export default ItemDetail;
