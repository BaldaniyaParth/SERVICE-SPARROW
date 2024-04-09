
import React, { useEffect } from "react";// react plugin used to create charts
// import { Line, Pie } from "react-chartjs-2";
import { useDispatch, useSelector } from "react-redux";
// reactstrap components
import {
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
// import { adminLogin } from "../redux/actions/Admin.action";
import { dashboardCount } from "../redux/actions/Dashboard.action";
import { IoMdPerson } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { MdPermContactCalendar } from "react-icons/md";
import { RiSecurePaymentFill } from "react-icons/ri";
import { RiUserSettingsFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { TbStarsFilled } from "react-icons/tb";


function Dashboard() {
  const dashboardState = useSelector((state) => state.dashboard);
  console.log(dashboardState + "dash")
  const navigate = useNavigate()
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(dashboardCount())
  }, [dispatch])

  console.log("dashboardState", dashboardState);
 

  const redirectPage = (url) => {
    navigate(url)
  }
  

  return (
    <>
      <div className="content">
    
        <Row>
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats" onClick={() => { redirectPage('/admin/Services') }}>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <FaHome className="sicon" style={{color:"#344955"}}/>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Services</p>
                      <CardTitle tag="p" style={{fontSize:"20px"}}>{(dashboardState?.dashboardCount && dashboardState?.dashboardCount?.data?.serviceCount) || 0}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats" onClick={() => { redirectPage('/admin/user') }}>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <IoMdPerson className="sticon" style={{color:"#344955"}}/>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Service Taker</p>
                      <CardTitle tag="p" style={{fontSize:"20px"}}>{(dashboardState?.dashboardCount && dashboardState?.dashboardCount?.data?.registeredUsersCount) || 0}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>
          
          <Col lg="3" md="6" sm="6">
            <Card className="card-stats" onClick={() => { redirectPage('/admin/serviceprovider') }}>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <RiUserSettingsFill className="spicon" style={{color:"#344955"}}/>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Service Provider</p>
                      <CardTitle tag="p" style={{fontSize:"20px"}}>{(dashboardState?.dashboardCount && dashboardState?.dashboardCount?.data?.registeredServiceProvidersCount) || 0}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>

          <Col lg="3" md="6" sm="6">
            <Card className="card-stats" onClick={() => { redirectPage('/admin/contactus') }}>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <MdPermContactCalendar className="cicon" style={{color:"#344955"}}/>
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Contact</p>
                      <CardTitle tag="p" style={{fontSize:"20px"}}>{(dashboardState?.dashboardCount && dashboardState?.dashboardCount?.data?.contactCount) || 0}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>


          <Col lg="3" md="6" sm="6">
            <Card className="card-stats" onClick={() => { redirectPage('/admin/review') }}>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <TbStarsFilled className="picon" style={{color:"#344955"}} />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Review</p>
                      <CardTitle tag="p" style={{fontSize:"20px"}}>{(dashboardState?.dashboardCount && dashboardState?.dashboardCount?.data?.reviewCount) || 0}</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>


          <Col lg="3" md="6" sm="6">
            <Card className="card-stats" onClick={() => { redirectPage('/admin/booking') }}>
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                    <RiSecurePaymentFill className="picon" style={{color:"#344955"}} />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Payment</p>

                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
              <CardFooter>
                <hr />
              </CardFooter>
            </Card>
          </Col>
          {/* <Col lg="3" md="6" sm="6">
            <Card className="card-stats">
              <CardBody>
                <Row>
                  <Col md="4" xs="5">
                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-favourite-28 text-primary" />
                    </div>
                  </Col>
                  <Col md="8" xs="7">
                    <div className="numbers">
                      <p className="card-category">Followers</p>
                      <CardTitle tag="p">+45K</CardTitle>
                      <p />
                    </div>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col> */}
        </Row>


        {/* <Row>
          <Col md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Users Behavior</CardTitle>
                <p className="card-category">24 Hours performance</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboard24HoursPerformanceChart.data}
                  options={dashboard24HoursPerformanceChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <hr />
                <div className="stats">
                  <i className="fa fa-history" /> Updated 3 minutes ago
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
        {/* <Row>
          <Col md="4">
            <Card>
              <CardHeader>
                <CardTitle tag="h5">Email Statistics</CardTitle>
                <p className="card-category">Last Campaign Performance</p>
              </CardHeader>
              <CardBody style={{ height: "266px" }}>
                <Pie
                  data={dashboardEmailStatisticsChart.data}
                  options={dashboardEmailStatisticsChart.options}
                />
              </CardBody>
              <CardFooter>
                <div className="legend">
                  <i className="fa fa-circle text-primary" /> Opened{" "}
                  <i className="fa fa-circle text-warning" /> Read{" "}
                  <i className="fa fa-circle text-danger" /> Deleted{" "}
                  <i className="fa fa-circle text-gray" /> Unopened
                </div>
                <hr />
                <div className="stats">
                  <i className="fa fa-calendar" /> Number of emails sent
                </div>
              </CardFooter>
            </Card>
          </Col>
          <Col md="8">
            <Card className="card-chart">
              <CardHeader>
                <CardTitle tag="h5">NASDAQ: AAPL</CardTitle>
                <p className="card-category">Line Chart with Points</p>
              </CardHeader>
              <CardBody>
                <Line
                  data={dashboardNASDAQChart.data}
                  options={dashboardNASDAQChart.options}
                  width={400}
                  height={100}
                />
              </CardBody>
              <CardFooter>
                <div className="chart-legend">
                  <i className="fa fa-circle text-info" /> Tesla Model S{" "}
                  <i className="fa fa-circle text-warning" /> BMW 5 Series
                </div>
                <hr />
                <div className="card-stats">
                  <i className="fa fa-check" /> Data information certified
                </div>
              </CardFooter>
            </Card>
          </Col>
        </Row> */}
      </div>
    </>
  );
}

export default Dashboard;
