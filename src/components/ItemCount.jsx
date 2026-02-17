import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
    const [count, setCount] = useState(initial);

    const dec = () => setCount((c) => Math.max(initial, c - 1));
    const inc = () => setCount((c) => Math.min(stock, c + 1));

    return (
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginTop: 12 }}>
            <button onClick={dec}>-</button>
            <span>{count}</span>
            <button onClick={inc}>+</button>

            <button onClick={() => onAdd(count)} disabled={stock === 0}>
                Agregar
            </button>
        </div>
    );
};

export default ItemCount;
