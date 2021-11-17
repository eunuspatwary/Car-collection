import axios from 'axios';
import './PurchaseProduct.css'
import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PurchaseProduct = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('https://powerful-chamber-23197.herokuapp.com/purchase', data)
      .then(res => {
        if (res.data.insertedId) {
          alert("Added successfully")

        }
      })
  }


  //load product details
  const { user } = useAuth()
  const { purchaseId } = useParams()
  const [productPurchase, setProductPurchase] = useState([])
  useEffect(() => {
    fetch(`https://powerful-chamber-23197.herokuapp.com/products/${purchaseId}`)
      .then(res => res.json())
      .then(data => setProductPurchase(data))
  }, [productPurchase])
  const { name, img, exterior, price, key } = productPurchase;
  return (
    <div>
      <Container>
        {user.email}
        <div className='row'>
          <div className='col-md-6'> <Card style={{ width: '30rem' }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
              <Card.Title className='d-flex'><h4>{name}</h4> <h3 className='px-3 text-danger'>${price}</h3></Card.Title>
              <Card.Text>
                {exterior}
              </Card.Text>


            </Card.Body>
          </Card></div>
          <div className='col-md-6 froms'>
            <h3 className='text-warning'> Please fil up this form</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input className='w-75' {...register("userName", { required: true, maxLength: 20 })} defaultValue={user.displayName} placeholder='Your Name' />
              <input className='w-75' type="number" {...register("phone", { required: true, })} placeholder='Your phone number' />
              <input className='w-75' type="email" {...register("email",)} placeholder='Your phone number' defaultValue={user.email} />
              <input className='w-75' type="text" {...register("address",)} placeholder='Your Address' />
              < input className='w-75'  {...register("name", { required: true })} placeholder='modale name' defaultValue={name} />
              < input className='w-75'  {...register("img", { required: true })} placeholder='modale name' value={img} />
              <br />



              <input className='btn btn-warning my-2' type="submit" />
            </form>
          </div>

        </div>
      </Container>
    </div>
  );
};

export default PurchaseProduct;