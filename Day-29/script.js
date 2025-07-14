const products_api = "http://fakestoreapi.com/products"
const db_api = "http://localhost:3000/products"

let products;
async function getProductData(url) {
    try {
        const response = await fetch(url)
        const data = await response.json()
        return data

    } catch (error) {
        console.log("Error: ", error.message);

    }
}

async function addProductData(url, products) {
    try {
        for (const product of products) {

            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(product)
            })

            const data = await response.json()
            console.log(data);
            
        }
    } catch (error) {
        console.log("Error: ", error.message);

    }
}



products = await getProductData(products_api)
addProductData(db_api, products)
