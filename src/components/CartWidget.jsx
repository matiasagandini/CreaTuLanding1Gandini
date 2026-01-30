const CartWidget = () => {
return (
    <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
        <span role="img" aria-label="carrito">🛒</span>
        <span>0</span>
    </div>
    );
};

export default CartWidget;
