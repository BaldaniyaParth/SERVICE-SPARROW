// Serviceprovider.js

import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { ServiceproviderList, DeleteserviceproviderList} from "../redux/actions/Serviceprovideraction";

import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Serviceprovider() {
    const [users, setUsers] = useState([]);
    const userData = useSelector(state => state.serviceprovider);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ServiceproviderList());
    }, [dispatch]);

    useEffect(() => {
        setUsers(userData?.Listserviceprovider?.data?.registeredServiceProvider);
    }, [userData]);

    const handleDeleteServiceprovider = (id) => {
        dispatch(DeleteserviceproviderList(id));
    };


        
    return (
        <>
        <ToastContainer />
        <div className="content">
            <Row>
                <Col md="12">
                    <Card>
                        <CardHeader>
                            <div className="d-flex">
                                <CardTitle tag="h4">Service Provider</CardTitle>
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Table responsive>
                                <thead className="text-primary">
                                    <tr>
                                        <th>Profile Image</th>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Mobile</th>
                                        <th>Address</th>
                                      
                                        <th className="text-right">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users && users.map(user => (
                                        <tr key={user._id}>
                                            <td>
                                                <img
                                                    src={user.profileImage}
                                                    alt="Profile"
                                                    style={{
                                                        width: "50px",
                                                        height: "50px",
                                                        borderRadius: "50%",
                                                    }}
                                                />
                                            </td>
                                            <td>{user.name}</td>
                                            <td>{user.email}</td>
                                            <td>{user.mobile}</td>
                                            <td>{user.address}</td>
                                          
                                            <td className="text-right">
                                                <MdDelete
                                                    className="icon"
                                                    onClick={() => handleDeleteServiceprovider(user._id)}
                                                />
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            </div>
            </>
    );
}

export default Serviceprovider;
