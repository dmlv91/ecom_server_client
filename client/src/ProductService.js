import axios from "axios";

const url = 'http://localhost:5000/api/products/';

class ProductService {
    //get products
    static getProducts() {
        return axios.get(url)
            .then((res) => {
                const data = res.data;
                const dataArray = Object.values(data);
                console.log(data);
                for (let product in data) {
                    console.log(data[product]["_id"])
                }
                return dataArray.map(product => ({
                    id: product._id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    qty: product.qty,
                    createdAt: new Date(product.createdAt)
                }));
            })
            .catch((err) => {
                throw err;
            });
        }
    //create products
    static createProduct(productData) {
        return axios.post(url, productData);
    }
    //edit products
    static editProduct(id, productData) {
        return axios.post(`${url}${id}`, productData);
    }
    //delete products
    static deleteProduct(id) {
        return axios.delete(`${url}${id}`);
    }
}

export default ProductService