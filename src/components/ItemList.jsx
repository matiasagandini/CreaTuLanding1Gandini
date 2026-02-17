import ItemCard from "./ItemCard";

const ItemList = ({ items }) => {
    if (items.length === 0) return <p>No hay productos en esta categoría.</p>;

    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                gap: 16,
            }}
        >
            {items.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </div>
    );
};

export default ItemList;
