import React from 'react';
import axios from 'axios';

import { useForm } from "react-hook-form";

const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://powerful-chamber-23197.herokuapp.com/products', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")

                }
                reset()
            })
    }
    return (
        <div>
            <h1>Please add a product</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} />
                < input {...register("exterior")} placeholder='Exterior' />
                <input {...register("key")} placeholder="key" />
                <input type="number" {...register("price",)} placeholder='Price' />
                <input {...register("img")} placeholder='image url' />
                <input type="submit" />
            </form>
        </div>
    );
};

export default AddProducts;