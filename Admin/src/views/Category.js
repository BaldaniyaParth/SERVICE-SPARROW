/*!

=========================================================
* Paper Dashboard React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaStreetView } from "react-icons/fa";
import { FaUserEdit } from "react-icons/fa";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { toast } from 'react-toastify';

// reactstrap components
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Table,
    Row,
    Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { categoryDelete, categoryInsert, categoryList, categoryUpdate, removeState } from "../redux/actions/Category.action";


function Category() {

    const [modal, setModal] = useState(false);
    const [upateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [categoryId, setCategoryId] = useState();
    const toggle = () => setModal(!modal);
    const updateToggle = () => setUpdateModal(!upateModal);
    const deleteToggle = () => setDeleteModal(!deleteModal);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        categoryName: '',
        categoryDescription: '',
    });

    const dispatch = useDispatch();
    const usersState = useSelector((state) => state.category);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    function categoryAdd() {
        dispatch(categoryInsert(formData));
    }

    function categoryDeletes() {
        dispatch(categoryDelete(categoryId));
    }

    function categoryUpdates() {
        const res = {
            categoryName: formData.categoryName,
            categoryDescription: formData.categoryDescription,
            categoryId: formData._id
        }
        dispatch(categoryUpdate(res))
    }


    useEffect(() => {
        if (usersState.InsertCategory != "") {
            if (usersState.InsertCategory.status == 201) {
                toast.success("Category Add successfully!");
                setFormData({
                    categoryName: '',
                    categoryDescription: '',
                })
                dispatch((categoryList()));
                // dispatch(removeState()); 
                toggle();
            } else {
                toast.error("Somthing went wrong");
            }
        }

    }, [usersState.InsertCategory]);


    useEffect(() => {
        if (usersState.UpdateCategory != "") {
            if (usersState.UpdateCategory.status == 200) {
                toast.success("Category Update successfully!");
                dispatch((categoryList()));
                dispatch(removeState());
                updateToggle();
            } else {
                toast.error("Somthing went wrong");
            }
        }

    }, [usersState.UpdateCategory.status]);

    useEffect(() => {
        if (usersState.DeleteCategory != "") {
            if (usersState.DeleteCategory.status == 200) {
                toast.success("Category delete successfully!");
                dispatch((categoryList()));
                dispatch(removeState());
                deleteToggle();
            } else {
                toast.error("Somthing went wrong");
            }
        }

    }, [usersState.DeleteCategory.status]);

    useEffect(() => {
        dispatch(categoryList());
    }, [])




    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className="d-flex">
                                    <CardTitle tag="h4">Category</CardTitle>
                                    <Button className="ml-auto" onClick={toggle}>Category Add</Button>
                                </div>

                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Name</th>
                                            <th style={{ width: "70%" }}>Decription</th>
                                            <th className="text-right">
                                                Action
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {usersState?.ListCategory?.data?.data?.length > 0 ? usersState?.ListCategory?.data?.data.map((res) => {
                                            return (
                                                <>
                                                    <tr>
                                                        <td>{res.categoryName}</td>
                                                        <td>{res.categoryDescription}</td>
                                                        <td className="text-right">
                                                            <FaUserEdit className="icon" onClick={() => { updateToggle(); setFormData(res); }} />
                                                            <MdDelete className="icon" onClick={() => { deleteToggle(); setCategoryId(res?._id); }} /></td>
                                                    </tr>
                                                </>
                                            )
                                        }) : <p>Category not found</p>}

                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>

                </Row>
            </div>


            {/* Insert Category */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add New Category</ModalHeader>
                <ModalBody>
                    <div class="category-form">
                        <div class="" id="login-form">
                            <div class="form-group">
                                <label for="your_name">Category name</label>
                                <br />
                                <input type="text" value={formData.categoryName} onChange={handleInputChange} name="categoryName" className="mt-4" />
                            </div>
                            <div class="form-group">
                                <label for="your_pass">Category Decription</label>
                                <br />
                                <input type="text" value={formData.categoryDescription} onChange={handleInputChange} name="categoryDescription" className="mt-4" />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        categoryAdd()
                    }}>
                        Add Category
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>


            {/* Update Category */}
            <Modal isOpen={upateModal} toggle={updateToggle}>
                <ModalHeader toggle={updateToggle}>Update Category</ModalHeader>
                <ModalBody>
                    <div class="category-form">
                        <div class="" id="login-form">
                            <div class="form-group">
                                <label for="your_name">Category name</label>
                                <br />
                                <input type="text" value={formData.categoryName} onChange={handleInputChange} name="categoryName" className="mt-4" />
                            </div>
                            <div class="form-group">
                                <label for="your_pass">Category Decription</label>
                                <br />
                                <input type="text" value={formData.categoryDescription} onChange={handleInputChange} name="categoryDescription" className="mt-4" />
                            </div>
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        categoryUpdates()
                    }}>
                        Update Category
                    </Button>{' '}
                    <Button color="secondary" onClick={updateToggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>

            {/* Delete Category */}
            <Modal isOpen={deleteModal} toggle={deleteToggle}>
                <ModalHeader toggle={deleteToggle}>Delete Category</ModalHeader>
                <ModalBody>
                    <h4>You want to delete Category?</h4>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        categoryDeletes()
                    }}>
                        Delete Category
                    </Button>{' '}
                    <Button color="secondary" onClick={deleteToggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>


        </>
    );
}

export default Category;
