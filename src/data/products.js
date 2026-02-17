export const products = [
    {
        id: "1",
        title: "Remera Blanca",
        price: 19999,
        category: "remeras",
        img: "https://picsum.photos/600/400?random=1",
        description: "Remera oversize de algodón premium. Súper cómoda para todos los días.",
    },
    {
        id: "2",
        title: "Zapatillas Urban",
        price: 59999,
        category: "zapatillas",
        img: "https://picsum.photos/600/400?random=2",
        description: "Zapatillas urbanas cómodas, ideales para caminar todo el día.",
    },
    {
        id: "3",
        title: "Gorra Negra",
        price: 9999,
        category: "accesorios",
        img: "https://picsum.photos/600/400?random=3",
        description: "Gorra clásica ajustable, combinable con todo.",
    },
];

// Promises con retardo (como pide la consigna)
export const getProducts = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve(products), 800);
    });

export const getProductsByCategory = (categoryId) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(products.filter((p) => p.category === categoryId)), 800);
    });

export const getProductById = (itemId) =>
    new Promise((resolve) => {
        setTimeout(() => resolve(products.find((p) => p.id === itemId)), 800);
    });