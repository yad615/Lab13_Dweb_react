import React, { useEffect, useState } from 'react';
import ProductoService from '../services/ProductoService';
import { Link } from 'react-router-dom';

export const ListProductosComponent = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        listarProductos();
    }, []);

    const listarProductos = () => {
        setLoading(true);
        ProductoService.getAllProductos()
            .then(response => {
                setProductos(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.log(error);
                setLoading(false);
            });
    }

    const deleteProducto = (productoId) => {
        if (window.confirm('¿Está seguro de eliminar este producto?')) {
            ProductoService.deleteProducto(productoId)
                .then(() => {
                    listarProductos();
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }

    return (
        <div className='container fade-in'>
            <h2 className='section-title my-4 text-center'>Gestión de Productos</h2>
            
            <div className="card mb-4">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h5 className="mb-0">Listado de Productos</h5>
                    <Link to='/add-producto' className='btn btn-primary'>
                        <i className="fas fa-plus me-2"></i>
                        Agregar Producto
                    </Link>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        {loading ? (
                            <div className="text-center py-4">
                                <div className="spinner-border text-primary" role="status">
                                    <span className="visually-hidden">Cargando...</span>
                                </div>
                            </div>
                        ) : (
                            <table className="table table-hover">
                                <thead>
                                    <tr>
                                        <th>Código</th>
                                        <th>Nombre</th>
                                        <th>Descripción</th>
                                        <th>Precio</th>
                                        <th>Stock</th>
                                        <th>Categoría</th>
                                        <th>Estado</th>
                                        <th>Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {productos.map(producto => (
                                        <tr key={producto.id}>
                                            <td>{producto.codigo}</td>
                                            <td>{producto.nombre}</td>
                                            <td>
                                                <small className="text-muted">{producto.descripcion}</small>
                                            </td>
                                            <td>
                                                <span className="fw-bold">S/. {parseFloat(producto.precio).toFixed(2)}</span>
                                            </td>
                                            <td>
                                                <span className={`badge ${producto.stock > 10 ? 'bg-success' : 'bg-warning'}`}>
                                                    {producto.stock}
                                                </span>
                                            </td>
                                            <td>
                                                <span className="badge bg-info">{producto.categoria}</span>
                                            </td>
                                            <td>
                                                <span className={`badge ${producto.stock > 0 ? 'bg-success' : 'bg-danger'}`}>
                                                    {producto.stock > 0 ? 'Disponible' : 'Agotado'}
                                                </span>
                                            </td>
                                            <td>
                                                <div className="btn-group">
                                                    <Link 
                                                        to={`/edit-producto/${producto.id}`}
                                                        className="btn btn-info btn-sm"
                                                        title="Editar"
                                                    >
                                                        <i className="fas fa-edit"></i>
                                                    </Link>
                                                    <button
                                                        className="btn btn-danger btn-sm"
                                                        onClick={() => deleteProducto(producto.id)}
                                                        title="Eliminar"
                                                    >
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ListProductosComponent;
