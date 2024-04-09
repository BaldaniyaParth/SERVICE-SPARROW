import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { userList, DeleteuserList } from "../redux/actions/user.action";

function User() {
    const [users, setUsers] = useState([]);
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userList());
    }, [dispatch]); 
    
    useEffect(() => {
    setUsers(userData?.Listuser?.data?.registeredServiceTaker);
        // console.log("users:::::" ,users)    
    }, [userData]);

    const handleDeleteUser = (id) => {
        dispatch(DeleteuserList(id));
    };

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className="d-flex">
                                    <CardTitle tag="h4">User</CardTitle>
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
                                                        onClick={() => handleDeleteUser(user._id)}
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

export default User;
