import CartWidget from "./CartWidget";

const NavBar = () => {
return (
    <header style={{ borderBottom: "1px solid #ddd" }}>
        <nav
        style={{
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "16px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
        }}
    >
        <h1 style={{ margin: 0, fontSize: "20px" }}>MatiTienda</h1>

        <ul style={{ listStyle: "none", display: "flex", gap: "16px", margin: 0, padding: 0 }}>
            <li><a href="#" style={{ textDecoration: "none" }}>Inicio</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Productos</a></li>
            <li><a href="#" style={{ textDecoration: "none" }}>Contacto</a></li>
        </ul>

        <CartWidget />
        </nav>
    </header>
    );
};

export default NavBar;
