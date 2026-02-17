import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";
import { getProducts, getProductsByCategory } from "../data/products";

const ItemListContainer = ({ greeting }) => {
    const { categoryId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        const request = categoryId ? getProductsByCategory(categoryId) : getProducts();

        request
            .then((res) => setItems(res))
            .finally(() => setLoading(false));
    }, [categoryId]);

    return (
        <main style={{ maxWidth: 1100, margin: "0 auto", padding: "24px 16px" }}>
            <h2 style={{ marginTop: 0 }}>
                {categoryId ? `Categoría: ${categoryId}` : greeting}
            </h2>

            {loading ? <p>Cargando...</p> : <ItemList items={items} />}
        </main>
    );
};

export default ItemListContainer;
