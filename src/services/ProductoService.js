import axios from 'axios';

const PRODUCTO_API_BASE_URL = "http://localhost:8080/api/v1/productos";

class ProductoService {
    getAllProductos() {
        return axios.get(PRODUCTO_API_BASE_URL);
    }

    createProducto(producto) {
        return axios.post(PRODUCTO_API_BASE_URL, producto);
    }

    getProductoById(productoId) {
        return axios.get(PRODUCTO_API_BASE_URL + '/' + productoId);
    }

    updateProducto(productoId, producto) {
        return axios.put(PRODUCTO_API_BASE_URL + '/' + productoId, producto);
    }

    deleteProducto(productoId) {
        return axios.delete(PRODUCTO_API_BASE_URL + '/' + productoId);
    }
}

export default new ProductoService();