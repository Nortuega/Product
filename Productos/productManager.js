class ProductManager {
    static products = []
    
    create(data) {
        const products = {
            id: ProductManager.products.length === 0
            ? 1
            :ProductManager.products[ProductManager.products.length - 1].id + 1,
            title: data.title,
            photo: data.photo,
            price: data.price,
            stock: data.stock || 20,
        }
        ProductManager.products.push(products)
    }

    read() {
        return ProductManager.products
    }

    readById(id) {
        return ProductManager.products.find(each => each.id === Number(id))
    }
}

const products = new ProductManager({
    title: "productos",
    });

    products.create({
    title: "Monitor 20 pulgadas",
    photo: "../Productos/img/Monitor.jpg",
    price: 150000,
    });

    products.create({
    title: "Notebook",
    photo: "../Productos/img/Notebook.jpg",
    price: 1350000,
    });

    products.create({
    title: "Auriculares",
    photo: "../Productos/img/Auriculares.jpg",
    price: 320000,
    });

    products.create({
    title: "Impresoras",
    photo: "../Productos/img/Impresora.jpg",
    price: 890000,
    });

console.log(products.read());
console.log(products.readById(3));
