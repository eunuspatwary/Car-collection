import React from 'react';


import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import AddProducts from '../../AddProducts/AddProducts';
import ManageAllOrder from '../../ManageAllOrder/ManageAllOrder';
import ManageOrder from '../../ManageOrder/ManageOrder';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import useAuth from '../../../hooks/useAuth'
import AdminRoute from '../../PrivetRoute/AddminRoute'
import Review from '../Review/Review'
import Payment from '../Payment/Payment';


const Dashbord = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth()
    return (
        <div class="container-fluid">
            <div class="row flex-nowrap">
                <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" class="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <span class="fs-5 d-none d-sm-inline">Menu</span>
                        </a>
                        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                            <li class="nav-item">
                                <Link to={`${path}/manageOrder`}>My  Orders</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={`${path}/review`}>Review</Link>
                            </li>
                            <li class="nav-item">
                                <Link to={`${path}/payment`}>Payment</Link>
                            </li>


                            {admin && <div>
                                <li>
                                    <Link to={`${path}/manageAllOrder`}>Manage All Orders</Link>
                                </li>
                                <li>
                                    <Link to={`${path}/addProducts`}>Add Products</Link>
                                </li>
                                <li>
                                    <Link to={`${path}/makeAdmin`}>Make Admin</Link>
                                </li>

                                <li>
                                    <button onClick={logOut} className='btn link btn-danger'>LogOut</button>
                                </li>
                            </div>

                            }







                        </ul>
                        <hr />
                        <div class="dropdown pb-4">


                        </div>
                    </div>
                </div>
                {/* Nested Route */}
                <Switch>
                    <Route exact path={path}>
                        <h3>Please select a topic.</h3>
                    </Route>
                    <Route path={`${path}/manageOrder`}>
                        <ManageOrder></ManageOrder>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProducts`}>
                        <AddProducts></AddProducts>
                    </AdminRoute>

                    <AdminRoute path={`${path}/manageAllOrder`}>
                        <ManageAllOrder></ManageAllOrder>
                    </AdminRoute>
                    {/* <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route> */}
                    {/* <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route> */}
                </Switch>

            </div>
        </div>
    );
};

export default Dashbord;