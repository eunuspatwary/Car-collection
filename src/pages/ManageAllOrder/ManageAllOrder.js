import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

const ManageAllOrder = () => {
  const [ManageAllOrder, setManageAllOrder] = useState([])
  useEffect(() => {
    fetch('https://powerful-chamber-23197.herokuapp.com/allOrders')
      .then(res => res.json())
      .then(data => setManageAllOrder(data))
  }, [])

  return (
    <Container>
      <div className='row'>
        {
          ManageAllOrder.map(allorder => <div className='col-md-3'>
            <Card.Img variant="top" src={allorder.img} className='img-hover' />
            <Card.Body>
              <h3 className='text-danger'>Cliant Name: {allorder.userName}</h3>
              <Card.Text className='text-secondary'>
                <h4>Model: {allorder.name}</h4>
              </Card.Text >
              <Card.Text className='text-secondary'>
                <h6> Cliant Email: {allorder.email}</h6>
              </Card.Text >
              <Card.Text className='text-secondary'>
                <h6> Cliant Number: {allorder.phone}</h6>
              </Card.Text >
              <Card.Text className='text-secondary'>
                <h6>  Cliant Address: {allorder.address}</h6>
              </Card.Text >

            </Card.Body>

          </div>)
        }
      </div>
    </Container>
  );
};

export default ManageAllOrder;