import api from "../config/api"

const productServices = {
    getProducts() {
        return api.get('/product')
    }
}

export default productServices