import axios from 'axios'

const db_api = "http://localhost:3000/products"
const store_api = "https://fakestoreapi.com/products"

let products;
async function getProducts(){
    try {
        const response = await axios.get(store_api)
        const data = await response.data
        return data      
    } catch (error) {
        console.log("Error: ",error.message);
    }
}

async function addProducts(url,data){
    try {
        for(const item of data){
            const response = await axios.post(url,item)
            console.log(response.data)
        }
    } catch (error) {
        console.log("Error: ",error.message);        
    }
}

products = await getProducts()

addProducts(db_api,products)




