import api from "../config/api"

const productServices = {
    getProducts(query = '') {
        return api.get(`/product${query}`)
    }
}

export default productServices