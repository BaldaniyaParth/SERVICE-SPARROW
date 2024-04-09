import React, { useEffect, useState } from "react";
import { FaUserEdit } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Button, Card, CardBody, CardHeader, CardTitle, Col, Row, Table } from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { deleteQuestion, getCarriculumById, updateQuestion, removeCarriculumState } from "../redux/actions/Curriculum.action";
import { toast } from "react-toastify";
import { MdDelete } from "react-icons/md";

function Question() {
    const params = useParams();

    const [updateModal, setUpdateModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [lesson, setLesson] = useState();
    console.log("lessonss", lesson);
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        youtube_link: ""
    })

    const dispatch = useDispatch();
    const QuestionData = useSelector(state => state.carriculum);

    console.log("QuestionDat", QuestionData);

    const updateToggle = () => setUpdateModal(!updateModal);
    const deleteToggle = () => setDeleteModal(!deleteModal);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log("formData34456", formData);
    };

    useEffect(() => {
        dispatch(getCarriculumById(params?.id))
    }, [])

    function questionUpdate() {
        const res = {
            lessonId: formData?._id,
            title: formData?.title,
            description: formData?.description
        }
        dispatch(updateQuestion(res))
    }

    function questionDelete() {
        dispatch(deleteQuestion(lesson))
    }

    useEffect(() => {
        if (QuestionData.UpdateQuestion != "") {
            if (QuestionData.UpdateQuestion
                .status == 200) {
                toast.success("Lesson update successfully!");
                dispatch(getCarriculumById(params?.id));
                dispatch(removeCarriculumState());
                updateToggle();
            }
            else {
                toast.error("Something went wrong");
            }
        }
    }, [QuestionData.UpdateQuestion])

    useEffect(() => {
        if (QuestionData.deleteQuestion
            != "") {
            if (QuestionData.deleteQuestion
                .status == 200) {
                toast.success("Carriculum delete successfully!");
                dispatch((getCarriculumById(params?.id)));
                dispatch(removeCarriculumState());
                // dispatch(removeCourseState());
                deleteToggle();
            } else {
                toast.error("Somthing went wrong");
            }
        }

    }, [QuestionData.deleteQuestion]);

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className="d-flex">
                                    <CardTitle tag="h4">Carriculum Question</CardTitle>
                                    {/* <Button className="ml-auto" onClick={toggle}></Button> */}
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Question</th>
                                            <th>Answer</th>
                                            <th>Youtube Link</th>
                                            <th style={{ width: "10%", textAlign: "right" }}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            QuestionData?.GetQuestion?.data?.allLessons?.length > 0 && QuestionData?.GetQuestion?.data?.allLessons?.map((val) => {
                                                return (
                                                    <>
                                                        {val?.lessons?.length > 0 && val?.lessons?.map((res) => {
                                                            return (
                                                                <tr>
                                                                    <td>{res.title}</td>
                                                                    <td>{res.description}</td>
                                                                    <td>{res.youtube_link}</td>
                                                                    <td style={{ textAlign: "right" }}><FaUserEdit className="icon" onClick={() => { updateToggle(); setFormData(res) }} /><MdDelete className="icon" onClick={() => { setLesson(res?._id); deleteToggle() }} /></td>
                                                                </tr>
                                                            )
                                                        })}
                                                    </>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>k
            {/* update question modal start */}
            <Modal isOpen={updateModal} toggle={updateToggle}>
                <ModalHeader toggle={updateToggle}>Update Question</ModalHeader>
                <ModalBody>
                    <div class="form-group">
                        <label for="your_name">Title</label>
                        <br />
                        <input type="text" value={formData.title} onChange={handleInputChange} name="title" className="mt-4" />
                    </div>
                    <div class="form-group">
                        <label for="your_name">Description</label>
                        <br />
                        <input type="text" value={formData.description} onChange={handleInputChange} name="description" className="mt-4" />
                    </div>
                    <div class="form-group">
                        <label for="your_name">Vedio Link</label>
                        <br />
                        <input type="text" value={formData.youtube_link} onChange={handleInputChange} name="youtube_link" className="mt-4" />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        questionUpdate()
                    }}>
                        Update Question
                    </Button>{' '}
                    <Button color="secondary" onClick={updateModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            {/* update question modal end */}
            {/* delete question modal start */}
            <Modal isOpen={deleteModal} toggle={deleteToggle}>
                <ModalHeader toggle={deleteToggle}>Delete Curriculum Question</ModalHeader>
                <ModalBody>
                    <h4>You want to delete Curriculum Question?</h4>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        questionDelete()
                    }}>
                        Delete Curriculum Question
                    </Button>{' '}
                    <Button color="secondary" onClick={deleteToggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            {/* delete question modal end */}
        </>
    )
}

export default Question;