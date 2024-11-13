import React, { useState, useEffect } from 'react';
import ProductoService from '../services/ProductoService';
import { useNavigate, useParams, Link } from 'react-router-dom';

export const AddProductoComponent = () => {
    const [codigo, setCodigo] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [categoria, setCategoria] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateProducto = (e) => {
        e.preventDefault();

        if (!codigo || !nombre || !precio || !stock || !categoria) {
            alert('Por favor complete todos los campos obligatorios');
            return;
        }

        const producto = {
            codigo: codigo,
            nombre: nombre,
            descripcion: descripcion || '', 
            precio: parseFloat(precio), 
            stock: parseInt(stock),
            categoria: categoria
        };

        if (id) {
            ProductoService.updateProducto(id, producto)
                .then(() => {
                    navigate('/productos');
                })
                .catch(error => {
                    console.log(error);
                    alert('Error al actualizar el producto');
                });
        } else {
            ProductoService.createProducto(producto)
                .then(() => {
                    navigate('/productos');
                })
                .catch(error => {
                    console.log(error);
                    alert('Error al crear el producto');
                });
        }
    }

    useEffect(() => {
        if (id) {
            ProductoService.getProductoById(id).then((response) => {
                setCodigo(response.data.codigo);
                setNombre(response.data.nombre);
                setDescripcion(response.data.descripcion || '');
                setPrecio(response.data.precio.toString());
                setStock(response.data.stock.toString());
                setCategoria(response.data.categoria);
            }).catch(error => {
                console.log(error);
            });
        }
    }, [id]);

    return (
        <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3'>
                    <h2 className='text-center'>
                        {id ? 'Actualizar Producto' : 'Registrar Producto'}
                    </h2>
                    <div className='card-body'>
                        <form>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Código: *</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el código'
                                    name='codigo'
                                    className='form-control'
                                    value={codigo}
                                    onChange={(e) => setCodigo(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Nombre: *</label>
                                <input
                                    type='text'
                                    placeholder='Ingrese el nombre'
                                    name='nombre'
                                    className='form-control'
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Descripción:</label>
                                <textarea
                                    placeholder='Ingrese la descripción'
                                    name='descripcion'
                                    className='form-control'
                                    value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Precio: *</label>
                                <input
                                    type='number'
                                    step="0.01"
                                    min="0"
                                    placeholder='Ingrese el precio'
                                    name='precio'
                                    className='form-control'
                                    value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Stock: *</label>
                                <input
                                    type='number'
                                    min="0"
                                    placeholder='Ingrese el stock'
                                    name='stock'
                                    className='form-control'
                                    value={stock}
                                    onChange={(e) => setStock(e.target.value)}
                                    required
                                />
                            </div>
                            <div className='form-group mb-2'>
                                <label className='form-label'>Categoría: *</label>
                                <select
                                    className='form-control'
                                    value={categoria}
                                    onChange={(e) => setCategoria(e.target.value)}
                                    required
                                >
                                    <option value="">Seleccione una categoría</option>
                                    <option value="Electrónicos">Electrónicos</option>
                                    <option value="Ropa">Ropa</option>
                                    <option value="Alimentos">Alimentos</option>
                                    <option value="Hogar">Hogar</option>
                                    <option value="Otros">Otros</option>
                                </select>
                            </div>
                            <div className='botones'>
                                <button className='btn btn-success' onClick={saveOrUpdateProducto}>
                                    Guardar
                                </button>
                                <Link to='/productos' className='btn btn-danger'>
                                    Cancelar
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddProductoComponent;