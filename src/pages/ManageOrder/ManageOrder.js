import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Card, Container } from 'react-bootstrap';

const ManageOrder = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `https://powerful-chamber-23197.herokuapp.com/order?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    // delet order 
    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to delete order.....');
        if (proceed) {
            const url = `https://powerful-chamber-23197.herokuapp.com/allOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted order successfully....');
                        const remainingOrders = orders.filter(order => order._id !== id);
                        setOrders(remainingOrders);
                    }
                });
        }
    }

    return (
        <Container>
            <div className='row'>
                {
                    orders.map(order => <div className='col-md-3'>
                        <Card.Img variant="top" src={order.img} className='img-hover' />
                        <Card.Body>
                            <h3 className='text-danger'>Cliant Name: {order.userName}</h3>
                            <Card.Text className='text-secondary'>
                                <h4>Model: {order.name}</h4>
                            </Card.Text >
                            <Card.Text className='text-secondary'>
                                <h6> Cliant Email: {order.email}</h6>
                            </Card.Text >
                            <Card.Text className='text-secondary'>
                                <h6> Cliant Number: {order.phone}</h6>
                            </Card.Text >
                            <Card.Text className='text-secondary'>
                                <h6>  Cliant Address: {order.address}</h6>
                            </Card.Text >

                        </Card.Body>
                        <button className="bg-dark text-white ms-3" onClick={() => handleDeleteOrder(order._id)}>Delete</button>
                    </div>)
                }
            </div>
        </Container>
    );
};

export default ManageOrder;