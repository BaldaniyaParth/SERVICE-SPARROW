import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Card, CardHeader, CardBody, CardTitle, Table, Row, Col } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { userreviewList,DeleteuserreviewList } from "../redux/actions/Review.action";

function Review() {
    const [users, setUsers] = useState([]);
    const userData = useSelector(state => state.userreview);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch( userreviewList());
    }, [dispatch]); 

    useEffect(() => {
        setUsers(userData?.Listreviewuser?.data?.reviews);
            
    }, [userData]);
    const handleDeleteUser = (id) => {
        dispatch(DeleteuserreviewList(id));
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
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Comment</th>
                                            <th>Rating</th>
                                            <th className="text-right">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {users && users.map(user => (
                                            <tr key={user._id}>
                                             <td>{user.name}</td>
                                                <td>{user.email}</td>
                                                <td>{user.comment}</td>
                                                <td>{user.starRating}</td>
                                                <td className="text-right">
                                                    <MdDelete
                                                        className="icon"
                                                        onClick={() => handleDeleteUser(user._id)} />
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

export default Review;
