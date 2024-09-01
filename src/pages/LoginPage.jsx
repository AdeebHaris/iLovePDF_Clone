import { Col, Row } from "react-bootstrap"
import './loginpage.css'
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import Collapse from 'react-bootstrap/Collapse';
import { useState } from "react";
import ListGroup from 'react-bootstrap/ListGroup';

function LoginPage() {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Row className="ms-5 mb-5">
        <Col lg={5} xl={5} className="ms-5 mt-5">
        <div className="d-flex flex-column ">
            <img  src="https://www.ilovepdf.com/img/ilovepdf.svg" height='35px' alt="" />
            <h2 className="text-center mt-4" style={{opacity:'0.9'}}>Login to your account</h2>
            <div className="d-flex flex-row justify-content-center mt-3">
                <button className="icon1 btn px-4 fw-bold"><i className="fa-brands fa-facebook me-1" style={{color: '#f4f6fb'}}></i> Facebook</button>
                <button className="icon2 btn btn-outline-danger px-4 fw-bold ms-3" style={{color:'black'}}><img src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000" height='22px'></img> Google</button>
                <button className="icon3 btn btn-outline-secondary px-4 fw-bold ms-3 text-secondary" style={{color:'white'}}><img src="https://img.icons8.com/?size=100&id=SHkP5vEgSE6z&format=png&color=000000" className="me-1" height='22px'></img> SS0</button>

            </div>
            <Form className="p-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">

        <Form.Control className="form1" type="email" placeholder="   Enter your email" />

      </Form.Group>

      <Form.Group controlId="formBasicPassword">
        <Form.Control className="form2" type="password" placeholder="   Password" />
      </Form.Group>
    </Form>
    <Link className="text-center text-danger fw-bold">Forgot your password?</Link>
    <div className="d-flex justify-content-center mt-3">
    <button type="submit" data-loading-text="Checking..." className="btn1" id="loginBtn">
            Log in <i className="m-icon-swapright m-icon-white"></i>
        </button>
    </div>
    <h6 className="text-center mt-3 " style={{opacity:'0.8'}}> Don't have an account? <span><Link to={'/signup'} style={{color:'#e5322d'}} className="fw-bold">Create an account</Link> </span></h6>
    
        </div>
        </Col>
        <Col></Col>
        <Col lg={5} xl={5}>
        <img className=" mt-5" style={{display:'block', marginBottom:'32px'}}  src="	https://www.ilovepdf.com/img/auth/ilovepdf.png" alt="iLovePDF"></img>

        <div className="px-5 py-2">
        <h3 className="ms-5">Log in to your workspace</h3>
        <h6 className="px-5 pt-1" style={{opacity:'0.6'}}>Enter your email and password to access your iLovePDF account. You are one step closer to boosting your document productivity.</h6>
        </div>
        <Dropdown data-bs-theme="dark" onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
        <Dropdown.Toggle id="dropdown-button-dark-example1" variant="light" className="dropdown ms-5 ps-5 fw-bold" >
          See All Tools
        </Dropdown.Toggle>

       
      </Dropdown>
      <Collapse in={open} className="ms-4">
        <div id="example-collapse-text">
        <ListGroup>
      <ListGroup.Item >Merge PDF</ListGroup.Item>
      <ListGroup.Item>Compress PDF</ListGroup.Item>
      <ListGroup.Item>EXCEL to PDF</ListGroup.Item>
      <ListGroup.Item>PDF to EXCEL</ListGroup.Item>
      <ListGroup.Item>Image to PDF</ListGroup.Item>
      <ListGroup.Item>Split PDF</ListGroup.Item>
      <ListGroup.Item>POWERPOINT to PDF</ListGroup.Item>
      <ListGroup.Item>PDF to POWERPOINT</ListGroup.Item>
      <ListGroup.Item>PDF to WORD</ListGroup.Item>
      <ListGroup.Item>PDF to JPG</ListGroup.Item>
    
    </ListGroup>
        </div>
      </Collapse>
  
       
        </Col>

    </Row>
    </>
  )
}

export default LoginPage