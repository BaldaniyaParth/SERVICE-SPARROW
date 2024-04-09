import React, { useEffect, useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    Table,
    Row,
    Col,
    Nav,
    NavItem,
    NavLink,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { ServiceproviderpaymentList } from "../redux/actions/Booking.action";
import { Serviceproviderpayment } from "../redux/actions/Booking.action";

const Booking = () => {
    const [activeTab, setActiveTab] = useState("pending");
    const userData = useSelector((state) => state.booking);
    console.log("sdfghjk",userData);
    const dispatch = useDispatch();
    const adminId = localStorage.getItem('adminId');
    console.log('adminIdString:', adminId);
    const [amountfinal, setAmountFinal] = useState();

    useEffect(() => {
      if (userData?.ServiceproviderpaymentList?.data?.notifications) {
        const filteredNotifications =
        userData.ServiceproviderpaymentList.data.notifications.filter(
            (notifications) => notifications.status === 5
          );
  
        const payments = filteredNotifications
          .map((notifications) => notifications.payment)
          .filter((payment) => payment); // Filter out undefined payments
  
        const amount = payments.length > 0 ? payments[0] : 0;
  
        setAmountFinal(amount);
        setPaymentData((prevPaymentData) => ({
          ...prevPaymentData,
          amount: amount,
        }));
  
        console.log("Amount :", amount);
      }
    }, [userData]); // Only re-run this effect when data2 changes

    console.log("amountfinal",amountfinal);
    const [paymentData,setPaymentData] = useState({
        amount:amountfinal,
        currency: "INR",
        userId : ""
     
    });
   
    useEffect(() => {
        dispatch(ServiceproviderpaymentList(adminId));
    }, [dispatch,adminId]);

    const options = {
        key: "your razpay",
        key_secret: "your razpay",
        amount: "100",
        name: "Parth",
        description: "some description",
        theme: {
            color: "#344955",
            hide_topbar: false,
        },
    };
    
    const booknow = (id) => {
        const paymentAmount = filteredNotifications.find(notification => notification._id === id)?.payment || 0;// Payment amount milta hai filtered notifications se
        console.log("id", id);
        const tempPaymentData = { ...paymentData, amount: paymentAmount }; // Naye paymentData banaya jata hai sahi amount ke saath
        dispatch(Serviceproviderpayment(id, tempPaymentData)); // Serviceproviderpayment action ko dispatch kiya jata hai sahi paymentData ke saath

        let tempOptions = {
            ...options,
            amount: paymentAmount * 100, // Payment amount set kiya jata hai options mein
            currency: "INR",
            name: "Service-Sparrow",
            handler: async function () {
                // Handler function logic here
            }
        };
        openPayModal(tempOptions); // Pay modal open kiya jata hai
    };
    
    const openPayModal = (options) => {
        try {
            var rzp1 = new window.Razorpay(options);
            rzp1.open();
        } catch (error) {
            console.log("errr" , error);
        }
    };

    const filteredNotifications =
        userData?.ServiceproviderpaymentList?.data?.notifications || [];
    
        
    const renderTableColumns = () => {
        if (activeTab === "paid") {
            return (
                <>
                    <th>Name</th>
                    <th>Payment</th>
                    <th>Message</th>
                </>
            );
        } else if (activeTab === "pending") {
            return (
                <>
                    <th>Name</th>
                    <th>Payment</th>
                    <th>Account No</th>
                    <th>IFSC Code</th>
                    <th>Actions</th>
                </>
            );
        } else if (activeTab === "spaid") {
            return (
                <>
                    <th>Name</th>
                    <th>Payment</th>
                    <th>Meassge</th>
                </>
            );
        }
    };

    return (
        <>
            <div className="content">
                <Row>
                    <Col md="12">
                        <Card>
                            <CardHeader>
                                <div className="d-flex">
                                    <Nav tabs>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={activeTab === "paid" ? "active" : ""}
                                                onClick={() => setActiveTab("paid")}
                                            >
                                                ServiceTaker Paid
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={activeTab === "pending" ? "active" : ""}
                                                onClick={() => setActiveTab("pending")}
                                            >
                                             ServiceProvider Pending
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                style={{ cursor: "pointer" }}
                                                className={activeTab === "spaid" ? "active" : ""}
                                                onClick={() => setActiveTab("spaid")}
                                            >
                                             ServiceProvider Paid
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                </div>
                            </CardHeader>
                            <CardBody>
                                <Table responsive>
                                    <thead className="text-primary">
                                        <tr>{renderTableColumns()}</tr>
                                    </thead>
                                    <tbody>
                                        {filteredNotifications
                                            .filter((user) => {
                                                if (activeTab === "paid") {
                                                    return user.status === 5;
                                                } else if (activeTab === "pending") {
                                                    return user.status === 3;
                                                } else if (activeTab === "spaid") {
                                                    return user.status === 6; 
                                                }
                                                return true; 
                                            })
                                            .map((user) => (


                                                <tr key={user._id}>
                                                    <td>{user.name}</td>
                                                    <td>{user.payment}</td>
                                                    {activeTab === "paid" && (
                                                        <td>{user.message}</td>
                                                    )}
                                                    {activeTab === "pending" && (
                                                        <>
                                                            <td>{user.accountNo}</td>
                                                            <td>{user.ifscCode}</td>
                                                            <td>
                                                                <button
                                                                    className="btn btn-success"
                                                                    onClick={() => booknow(user._id)}
                                                                  
                                                                >
                                                                    Pay
                                                                </button>
                                                            
                                                              
                                                                
                                                              
                                               
                                                            </td>
                                                        </>
                                                    )}
                                                    {activeTab === "spaid" && (
                                                        <td>{user.message}</td>
                                                    )}
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

export default Booking;
