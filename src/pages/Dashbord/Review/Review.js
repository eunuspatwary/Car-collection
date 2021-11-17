import React from 'react';

import axios from 'axios';

import { useForm } from "react-hook-form";





const Review = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://powerful-chamber-23197.herokuapp.com/review', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert("Added successfully")

                }
                reset()
            })
    }
    return (
        <div>
            <h1>Please add a Review</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                < textarea input {...register("review")} placeholder='review' />
                <div> </div>

                <input type="submit" />
            </form>


        </div>
    );
};

export default Review;