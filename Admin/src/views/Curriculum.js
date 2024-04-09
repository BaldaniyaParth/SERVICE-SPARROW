import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { courseList } from "../redux/actions/Services.Action";
import { addCarriculumQuestion, carriculumDelete, carriculumInnsert, carriculumList, carriculumUpdate, removeCarriculumState } from "../redux/actions/Curriculum.action";
import { toast } from 'react-toastify';
import { MdDelete } from "react-icons/md";
import { FaUserEdit } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaBullseye } from "react-icons/fa";
import { Link } from "react-router-dom";

function Curriculum() {
    const [carriculumId, setCarriculumId] = useState();
    console.log("carriculumId", carriculumId)
    const [courseId, setCourseId] = useState();
    const [viewQuestion, setViewQuestion] = useState();
    const [modal, setModal] = useState(false);
    const [deleteModal, setDeleteModal] = useState(false);
    const [updateModal, setUpdateModal] = useState(false);
    const [questionModal, setQuestionModal] = useState(false);
    const [viewQuestionModal, setViewQuestionModal] = useState(false);
    const toggle = () => setModal(!modal);
    const deleteToggle = () => setDeleteModal(!deleteModal);
    const updateToggle = () => setUpdateModal(!updateModal);
    const questionToggle = () => setQuestionModal(!questionModal);
    const viewQuestionToggle = () => { setViewQuestionModal(!viewQuestionModal) };

    const carriculumData = useSelector(state => state.carriculum)

    console.log("carriculumData?.ListCarriculum?.data", carriculumData)
    const cousreAllData = useSelector(state => state.course)
    console.log("cousreAllData!@##$%", cousreAllData);
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        courseId: "",
        duration: '',
        curriculumTitle: '',
    });

    console.log("formDataformData", formData);
    const [questionData, setQuestionData] = useState({
        curriculumId: carriculumId,
        // courseId: courseId,
        title: "",
        description: "",
        youtube_link: ""
    })

    console.log("questionData", questionData);
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        console.log("formData34456", formData);
    };

    const handleQuestionInput = (e) => {
        const { name, value } = e.target;
        setQuestionData((prevData) => ({
            ...prevData, [name]: value
        }))
    }

    function curriculumAdd() {
        console.log("curriculumAdd");
        dispatch(carriculumInnsert(formData));
    }

    function deleteCarriculum() {
        dispatch(carriculumDelete(carriculumId));
    }

    function questionAdd() {
        const res = {
            curriculumId: carriculumId,
            title: questionData.title,
            description: questionData.description,
            youtube_link: questionData.youtube_link

        }
        dispatch(addCarriculumQuestion(res));
    }

    function UpdateCarriculums() {
        const res = {
            courseId: formData?.courseId,
            duration: formData?.duration,
            curriculumTitle: formData?.curriculumTitle,
            carriculumId: formData?._id
        }
        dispatch(carriculumUpdate(res));
    }

    useEffect(() => {
        dispatch(courseList())
    }, [])


    useEffect(() => {
        if (carriculumData.InsertCarriculum != "") {
            if (carriculumData.InsertCarriculum?.status == 201) {
                toast.success("Curriculum Add successfully!");
                setFormData({
                    courseId: "",
                    duration: '',
                    curriculumTitle: '',
                })
                dispatch((carriculumList()));
                dispatch(removeCarriculumState());
                toggle();
            } else {
                toast.error("Somthing went wrong");
            }
        }
    }, [carriculumData.InsertCarriculum]);

    useEffect(() => {
        if (carriculumData.DeleteCarriculum
            != "") {
            if (carriculumData.DeleteCarriculum
                .status == 200) {
                toast.success("Carriculum delete successfully!");
                dispatch((carriculumList()));
                dispatch(removeCarriculumState());
                deleteToggle();
            } else {
                toast.error("Somthing went wrong");
            }
        }

    }, [carriculumData.DeleteCarriculum]);

    useEffect(() => {
        if (carriculumData.UpdateCarriculum != "") {
            if (carriculumData.UpdateCarriculum
                .status == 200) {
                toast.success("Carriculum update successfully!");
                dispatch((carriculumList()));
                dispatch(removeCarriculumState());
                updateToggle();
            }
            else {
                toast.error("Something went wrong");
            }
        }
    }, [carriculumData.UpdateCarriculum])

    useEffect(() => {
        if (carriculumData.InsertQuestion != "") {
            if (carriculumData.InsertQuestion.status == 201) {
                toast.success("Carriculum Question Insert successfully!");
                setQuestionData({
                    title: "",
                    description: "",
                    youtube_link: ""
                })
                dispatch((carriculumList()));
                dispatch(removeCarriculumState());
                questionToggle();
            }
            else {
                toast.error("Something went wrong");
            }
        }
    }, [carriculumData.InsertQuestion])

    useEffect(() => {
        dispatch(carriculumList());
    }, [])

    return (
        <>
            {/* <h1>Hello Curriculum!!!</h1> */}
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className="d-flex">
                                    <CardTitle tag="h4">
                                        Curriculum
                                    </CardTitle>
                                    <Button className="ml-auto" onClick={toggle}>
                                        Add Curriculum
                                    </Button>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>
                                            <th>Curriculum Duration</th>
                                            <th>Curriculum Title</th>
                                            <th className="" style={{textAlign:"right"}}>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {carriculumData?.ListCarriculum?.data?.courses?.length > 0 && carriculumData?.ListCarriculum?.data?.courses?.map((val) => {
                                            return (
                                                <tr>
                                                    <td>{val?.curriculumTitle}</td>
                                                    <td>{val?.duration}</td>
                                                    <td style={{textAlign:"right"}}> <MdDelete className="icon" onClick={() => { deleteToggle(); setCarriculumId(val?._id); }} /> <FaUserEdit className="icon" onClick={() => { updateToggle(); setFormData(val); setCarriculumId(val?._id) }} /><IoMdAdd className="icon" onClick={() => { questionToggle(); setCarriculumId(val?._id); setQuestionData({ carriculumId: val?._id }) }} /><Link to={`/admin/curriculum/${val?._id}`}><FaBullseye className="icon" onClick={() => { viewQuestionToggle() }} /></Link></td>

                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>

            {/* insert Curriculum start */}
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add New Curriculum</ModalHeader>
                <ModalBody>
                    <div class="category-form">
                        <div class="" id="login-form">
                            <div class="selectBox">
                                <p style={{ marginBottom: "0px", paddingBottom: "0px", color: 'black' }}>Coure Title</p>
                                <select className="" name="courseId" onChange={handleInputChange}>

                                    <option value={"1"}  >Select Course</option>
                                    {/* {console.log("caltegoryData?.ListCategory?.data?.data", cousreAllData?.ListCategory?.data?.data)} */}
                                    {
                                        cousreAllData?.ListCourse?.data?.courses.length > 0 && cousreAllData?.ListCourse?.data?.courses?.map((val) => {
                                            return (
                                                <option value={val?._id}>{val?.title}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="your_name">Curriculum Title</label>
                                <br />
                                <input type="text" value={formData.curriculumTitle} onChange={handleInputChange} name="curriculumTitle" className="mt-4" />
                            </div>
                            <div class="form-group">
                                <label for="your_pass">Curriculum Duration</label>
                                <br />
                                <input type="text" value={formData.duration} onChange={handleInputChange} name="duration" className="mt-4" />
                            </div>

                            {/* <div class="form-group">
                                <label for="your_pass">Course Lesson</label>
                                <br />
                                <input type="number" value={formData.lesson} onChange={handleInputChange} name="lesson" className="mt-4" />
                            </div> */}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => { curriculumAdd() }}>
                        Add Curriculum
                    </Button>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            {/* innsert Curriculum end */}

            {/* Delete Curriculum start */}
            <Modal isOpen={deleteModal} toggle={deleteToggle}>
                <ModalHeader toggle={deleteToggle}>Delete Curriculum</ModalHeader>
                <ModalBody>
                    <h4>You want to delete Curriculum?</h4>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        deleteCarriculum()
                    }}>
                        Delete Curriculum
                    </Button>{' '}
                    <Button color="secondary" onClick={deleteToggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            {/* Delete Curriculum end */}

            {/* Update Curriculum start */}
            <Modal isOpen={updateModal} toggle={updateToggle}>
                <ModalHeader toggle={updateToggle}>Update Curriculum</ModalHeader>
                <ModalBody>
                    <div class="category-form">
                        <div class="" id="login-form">
                            <p style={{ marginBottom: "0px", paddingBottom: "0px", color: 'black' }}>Coure Title</p>
                            <div class="selectBox">
                                <select className="" name="courseId" onChange={handleInputChange} value={formData?.courseId}>
                                    <option value={"1"}  >Select Course</option>
                                    {/* {console.log("caltegoryData?.ListCategory?.data?.data", cousreAllData?.ListCategory?.data?.data)} */}
                                    {
                                        cousreAllData?.ListCourse?.data?.courses.length > 0 && cousreAllData?.ListCourse?.data?.courses?.map((val) => {
                                            return (
                                                <option value={val?._id}>{val?.title}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="your_name">Curriculum Title</label>
                                <br />
                                <input type="text" value={formData.curriculumTitle} onChange={handleInputChange} name="curriculumTitle" className="mt-4" />
                            </div>
                            <div class="form-group">
                                <label for="your_pass">Curriculum Duration</label>
                                <br />
                                <input type="text" value={formData.duration} onChange={handleInputChange} name="duration" className="mt-4" />
                            </div>

                            {/* <div class="form-group">
                                <label for="your_pass">Course Lesson</label>
                                <br />
                                <input type="number" value={formData.lesson} onChange={handleInputChange} name="lesson" className="mt-4" />
                            </div> */}
                        </div>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        UpdateCarriculums()
                    }}>
                        Update Curriculum
                    </Button>{' '}
                    <Button color="secondary" onClick={updateToggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            {/* uppdate Curriculum end */}
            {/* curriculum question add start  */}
            <Modal isOpen={questionModal} toggle={questionToggle}>
                <ModalHeader toggle={questionToggle}>Add Question</ModalHeader>
                <ModalBody>
                    <div class="form-group">
                        <label for="your_name">Title</label>
                        <br />
                        <input type="text" value={questionData.title} onChange={handleQuestionInput} name="title" className="mt-4" />
                    </div>
                    <div class="form-group">
                        <label for="your_name">Description</label>
                        <br />
                        <input type="text" value={questionData.description} onChange={handleQuestionInput} name="description" className="mt-4" />
                    </div>
                    <div class="form-group">
                        <label for="your_name">Vedio Link</label>
                        <br />
                        <input type="text" value={questionData.youtube_link} onChange={handleQuestionInput} name="youtube_link" className="mt-4" />
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => {
                        // deleteCarriculum()
                        questionAdd();
                    }}>
                        Add Question
                    </Button>{' '}
                    <Button color="secondary" onClick={questionModal}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
            {/* curriculum question add end */}
            {/* question table modal start */}

            <Modal isOpen={viewQuestionModal} toggle={viewQuestionToggle} fullscreen style={{ width: "100%!important" }}>
                <div className="questionModal">
                    <ModalHeader toggle={viewQuestionToggle}>Modal title</ModalHeader>
                    <ModalBody>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>
                            Do Something
                        </Button>{' '}
                        <Button color="secondary" onClick={toggle}>
                            Cancel
                        </Button>
                    </ModalFooter>
                </div>
            </Modal>

            {/* question table modal end */}

        </>
    )
}

export default Curriculum