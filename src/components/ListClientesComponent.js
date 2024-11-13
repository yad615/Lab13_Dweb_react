import React, { useEffect, useState } from 'react';
import ClienteService from '../services/ClienteService';
import { Link } from 'react-router-dom';

export const ListClientesComponent = () => {
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
        listarClientes()
    }, []);

    const listarClientes = () => {
        ClienteService.getAllClientes().then(response => {
            setClientes(response.data);
        }).catch(error => {
            console.log(error);
        });
    }

    const deleteCliente = (clienteId) => {
        ClienteService.deleteCliente(clienteId).then(() => {
            listarClientes();
        }).catch(error => {
            console.log(error);
        });
    }

    return (
        <div className="container">
            <h2 className='text-center my-4'>Listado de Clientes</h2>
            <div className='d-flex justify-content-between align-items-center'>
                <Link to='/add-cliente' className='btn btn-primary mb-3'>
                    Agregar Cliente
                </Link>
            </div>
            <table className="table table-bordered table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Email</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {clientes.map(cliente => (
                        <tr key={cliente.id}>
                            <td>{cliente.id}</td>
                            <td>{cliente.nombre}</td>
                            <td>{cliente.apellidos}</td>
                            <td>{cliente.email}</td>
                            <td>
                                <div className="btn-group">
                                    <Link className='btn btn-info btn-sm' to={`/edit-cliente/${cliente.id}`}>Actualizar</Link>
                                    <button className='btn btn-danger btn-sm ms-2' onClick={() => deleteCliente(cliente.id)}>Eliminar</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            
        </div>
    );
}

export default ListClientesComponent;
