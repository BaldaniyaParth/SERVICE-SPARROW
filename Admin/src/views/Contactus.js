import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { ContactList,ContactupdateList } from '../redux/actions/Contact.action';



const Contactus = () => {
    const [users, setUsers] = useState([]);
    const userData = useSelector(state => state.contact);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(ContactList());
    }, [dispatch]);

    useEffect(() => {
        setUsers(userData?.Listcontact?.data?.contacts);
    }, [userData]);

    const handleCheckboxChange = (id, checked) => {
        const updatedUsers = users.map(user => {
            if (user._id === id) {

                user.statusCode = checked ? 1 : 0;
            
                dispatch(ContactupdateList(id, { statusCode: user.statusCode  }));
            }
            return user;
        });
        setUsers(updatedUsers);
    };

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className="d-flex">
                                    <CardTitle tag="h4">Contact</CardTitle>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Status</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Message</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users && users.map(user => (
                                            <tr key={user._id}>
                                                <td>
                                                    {/* Checkbox for updating status */}
                                                    <input
                                                        type="checkbox"
                                                        style={{display:"block",height:"15px"}}
                                                        checked={user.statusCode === 1}
                                                        onChange={(e) => handleCheckboxChange(user._id, e.target.checked)}
                                                    />
                                                </td>
                                                <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.message}</td>
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
};

export default Contactus;


