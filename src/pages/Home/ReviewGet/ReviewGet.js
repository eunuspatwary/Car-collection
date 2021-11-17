import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const ReviewGet = () => {
    const { user } = useAuth()
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://powerful-chamber-23197.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='row'>
            <h2 className='text-center text-danger py-5'>Our Review</h2>
            {
                reviews.map(review => <div className='col-md-4 text-center  mb-3 border border-info'>
                    <p className='py-2 text-info'>{user.email}</p>
                    <p className=' text-secondary'>{review.review}</p>
                </div>)
            }

        </div>
    );
};

export default ReviewGet;