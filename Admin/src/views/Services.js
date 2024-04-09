import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Input } from 'reactstrap';
import { useDispatch, useSelector } from "react-redux";
import { servicesList, servicesInsert, servicesUpdate, servicesDelete } from "../redux/actions/Services.Action";

import {
    Card,
    CardHeader,
    CardBody,
    Row,
    Col,
} from "reactstrap";

function formatDate(dateString) {
    try {
        const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
        const formattedDate = new Date(dateString).toLocaleDateString(undefined, options);
        return formattedDate;
    } catch (error) {
        console.error('Invalid date:', dateString, error);
        return 'Invalid Date';
    }
}

function Services() {
    const [users, setUsers] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);  
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); 
    const [editService, setEditService] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);

    const userData = useSelector(state => state.services);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(servicesList());
    }, [dispatch]); 
    
    const handleImageChange = (event) => {
        const files = event.target.files;
        setSelectedImages(files);
    };

    const handleAddService = async () => {
        const formData = new FormData();
        for (let i = 0; i < selectedImages.length; i++){
            formData.append("image", selectedImages[i]);
        }
        
        const serviceName = document.getElementById("serviceName").value;
        const serviceDescription = document.getElementById("serviceDescription").value; 
        const serviceDescription1 = document.getElementById("serviceDescription1").value;
        const serviceDescription2 = document.getElementById("serviceDescription2").value;
        const serviceDescription3 = document.getElementById("serviceDescription3").value;
        const serviceDescription4 = document.getElementById("serviceDescription4").value;
        const serviceDescription5 = document.getElementById("serviceDescription5").value;
        const serviceDescription6 = document.getElementById("serviceDescription6").value;
    
        formData.append("name", serviceName);
        formData.append("description", serviceDescription);
        formData.append("description1", serviceDescription1);
        formData.append("description2", serviceDescription2);
        formData.append("description3", serviceDescription3);
        formData.append("description4", serviceDescription4);
        formData.append("description5", serviceDescription5);
        formData.append("description6", serviceDescription6);
    
        dispatch(servicesInsert(formData));
        toggleAddModal();
    };

    const handleEditService = (user) => {
        setEditService(user);
        toggleEditModal();
    };
    
    const handleEditServiceSubmit = async () => {
        const serviceName = document.getElementById("serviceName").value;
        const serviceDescription = document.getElementById("serviceDescription").value;
        const serviceDescription1 = document.getElementById("serviceDescription1").value;
        const serviceDescription2 = document.getElementById("serviceDescription2").value;
        const serviceDescription3 = document.getElementById("serviceDescription3").value;
        const serviceDescription4 = document.getElementById("serviceDescription4").value;
        const serviceDescription5 = document.getElementById("serviceDescription5").value;
        const serviceDescription6 = document.getElementById("serviceDescription6").value;
    
        const userId = editService._id;
        dispatch(servicesUpdate(userId, {
            name: serviceName,
            description: serviceDescription,
            description1: serviceDescription1,
            description2: serviceDescription2,
            description3: serviceDescription3,
            description4: serviceDescription4,
            description5: serviceDescription5,
            description6: serviceDescription6
        }));
        toggleEditModal();
    };

    const handleDeleteService = async (id) => {
        const isConfirmed = window.confirm("Are you sure you want to delete this service?");
        
        if (isConfirmed) {
            dispatch(servicesDelete(id));
        }
    };
    
    useEffect(() => {
        if (userData && userData?.ServicesCourse?.data?.serviceCategories) {
            const formattedUsers = userData?.ServicesCourse?.data?.serviceCategories?.map(user => ({
                ...user,
                createdAt: formatDate(user.createdAt),
            }));
            setUsers(formattedUsers);
        }
    }, [userData]);

    const toggleAddModal = () => {
        setIsAddModalOpen(!isAddModalOpen);
    };
    const toggleEditModal = () => {
        setIsEditModalOpen(!isEditModalOpen);
    };
    // View Services
    return (
        <>
            <div className="content">
                <div className="text-right">
                    <Button className="mr-auto mb-3 " onClick={toggleAddModal}>Service Add</Button>
                </div>
                <Row>
                    {users && users.map((user, index) => (
                        <Col key={user._id} md="4" className="mb-3">
                            <Card>
                                <CardHeader>
                                    <h5 className="card-title">{user.name}</h5>
                                </CardHeader>
                                <CardBody>
                                    <p className="card-text">{user.description}</p>
                                    <br/>
                                    <p className="card-text"><small className="text-muted">{user.createdAt}</small></p>
                                    <div className="text-right">
                                        <FaUserEdit className="icon mr-2" onClick={() => handleEditService(user)} />
                                        <MdDelete className="icon" onClick={() => handleDeleteService(user._id)} />
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
{/* Add Service */}
            <Modal isOpen={isAddModalOpen} toggle={toggleAddModal}>
                <ModalHeader toggle={toggleAddModal}>Add Service</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Input
                                type="text"
                                name="serviceName"
                                id="serviceName"
                                placeholder="Service Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="file"
                                name="serviceImage"
                                id="serviceImage"
                                placeholder="Service Image"
                                onChange={handleImageChange}
                                multiple
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="serviceDescription"
                                id="serviceDescription"
                                placeholder="Service Description"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="serviceDescription1"
                                id="serviceDescription1"
                                placeholder="Inner Service Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="serviceDescription2"
                                id="serviceDescription2"
                                placeholder="serviceDescription2"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="serviceDescription3"
                                id="serviceDescription3"
                                placeholder="serviceDescription3"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="serviceDescription4"
                                id="serviceDescription4"
                                placeholder="serviceDescription4"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="serviceDescription5"
                                id="serviceDescription5"
                                placeholder="serviceDescription5"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Input
                                type="textarea"
                                name="serviceDescription6"
                                id="serviceDescription6"
                                value="Pure Pride Workers"
                                style={{ fontWeight: 'bold' }}
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={handleAddService}>Add</Button>{' '}
                    <Button color="secondary" onClick={toggleAddModal}>Cancel</Button>
                </ModalFooter>
            </Modal>
{/* Edit Services */}
<Modal isOpen={isEditModalOpen} toggle={toggleEditModal}>
    <ModalHeader toggle={toggleEditModal}>Edit Service</ModalHeader>
    <ModalBody>
        <Form>
            <FormGroup>
                <Input
                    type="text"
                    name="serviceName"
                    id="serviceName"
                    placeholder="Service Name"
                    defaultValue={editService ? editService.name : ''}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="file"
                    name="serviceImage"
                    id="serviceImage"
                    placeholder="Service Image"
                    onChange={handleImageChange}
                    multiple
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="textarea"
                    name="serviceDescription"
                    id="serviceDescription"
                    placeholder="Service Description"
                    defaultValue={editService ? editService.description : ''}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="textarea"
                    name="serviceDescription1"
                    id="serviceDescription1"
                    placeholder="Inner Service Name"
                    defaultValue={editService ? editService.description1 : ''}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="textarea"
                    name="serviceDescription2"
                    id="serviceDescription2"
                    placeholder="serviceDescription2"
                    defaultValue={editService ? editService.description2 : ''}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="textarea"
                    name="serviceDescription3"
                    id="serviceDescription3"
                    placeholder="serviceDescription3"
                    defaultValue={editService ? editService.description3 : ''}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="textarea"
                    name="serviceDescription4"
                    id="serviceDescription4"
                    placeholder="serviceDescription4"
                    defaultValue={editService ? editService.description4 : ''}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="textarea"
                    name="serviceDescription5"
                    id="serviceDescription5"
                    placeholder="serviceDescription5"
                    defaultValue={editService ? editService.description5 : ''}
                />
            </FormGroup>
            <FormGroup>
                <Input
                    type="textarea"
                    name="serviceDescription6"
                    id="serviceDescription6"
                    placeholder="serviceDescription"
                    style={{ fontWeight: 'bold' }}
                    defaultValue={editService ? editService.description6 : ''}
                />
            </FormGroup>
        </Form>
    </ModalBody>
    <ModalFooter>
        <Button color="primary" onClick={handleEditServiceSubmit}>Edit</Button>{' '}
        <Button color="secondary" onClick={toggleEditModal}>Cancel</Button>
    </ModalFooter>
</Modal>
        </>
    );
}
export default Services;