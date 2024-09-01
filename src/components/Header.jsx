import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';
import './Header.css'
function Header() {
  return (
    <>
    
    <Navbar bg="light" data-bs-theme="light" className='shadow' style={{height:'60px'}}>
      <Link to={'/'}>
    <img src="https://www.ilovepdf.com/img/ilovepdf.svg" height='30px' className='ms-4 ' alt="iLovePDF Logo"/>
      
      </Link>
        <Container>
          <Nav className="me-auto ms-4">
            <Nav.Link >
                <Link to={'/merge'} style={{textDecoration:'none',color:'black' , fontSize:'13px',fontWeight:'bold'}} className='nav-link '>
                MERGE PDF
                </Link>
                </Nav.Link>
            <Nav.Link >
                <Link to={'/split'} style={{textDecoration:'none',color:'black' , fontSize:'13px',fontWeight:'bold'}} className='nav-link ms-3'>
                SPLIT PDF
                </Link>
                </Nav.Link>
                <Nav.Link >
                <Link to={'/compress'} style={{textDecoration:'none',color:'black' , fontSize:'13px',fontWeight:'bold'}} className='nav-link ms-3'v>
                COMPRESS PDF
                </Link>
                </Nav.Link>
                <NavDropdown title="CONVERT PDF" id="basic-nav-dropdown" style={{fontSize:'13px',marginTop:'8px',color:'black',fontWeight:'bold'}} className='nav-dropdown ms-3'>
                <Navbar.Brand href="#home" className=' ms-4 text-secondary' style={{fontSize:'13px'}}>CONVERT TO PDF</Navbar.Brand>
    
                    <div className='d-flex justify-content-evenly align-items-center ms-2 mt-3'>
    
                    <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 50 50"
          >
            <path
              d="M17.676 34.344h9.55c2.477 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.098-2.102c.484-.902.742-1.8.742-4.277v-9.547H44.82c1.8 0 2.453.188 3.113.54s1.176.87 1.527 1.527.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.527-.54-1.312-.54-3.113zm0 0"
              fill-rule="evenodd"
              fill="rgb(98.431373%,93.72549%,65.882353%)"
            ></path>
            <path
              d="M43.94 37.137c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844l-5.145-5.047c-.348-.34-.902-.34-1.25 0a.85.85 0 0 0-.258.609.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.488 0-.883.387-.883.867s.395.867.883.867h6.05c.113-.004.227-.023.336-.07a.87.87 0 0 0 .477-.465c.05-.105.066-.22.066-.332l.004-5.934zm0 0"
              fill="rgb(71.764706%,62.745098%,0.392157%)"
            ></path>
            <g fill-rule="evenodd">
              <path
                d="M5.184 0h21.988c1.8 0 2.453.188 3.113.54.652.344 1.184.88 1.527 1.53.352.656.54 1.313.54 3.113v21.984c0 1.805-.187 2.457-.54 3.117-.344.648-.875 1.184-1.527 1.527-.66.352-1.312.54-3.113.54H5.184c-1.8 0-2.457-.187-3.113-.54-.652-.344-1.184-.88-1.527-1.527C.188 29.625 0 28.973 0 27.168V5.184c0-1.8.188-2.457.54-3.113.344-.652.88-1.184 1.53-1.53S3.383 0 5.184 0zm0 0"
                fill="rgb(83.921569%,74.901961%,17.647059%)"
              ></path>
              <path
                d="M10.28 12.945v4.688c0 1.66-.926 2.66-2.707 2.66C5.406 20.293 5 18.852 5 18.07c0-.668.31-1.098.86-1.098.648 0 .813.504.813 1.05 0 .516.242.89.88.89.594 0 .926-.44.926-1.3V12.95c0-.54.352-.898.902-.898s.902.36.902.898zm1.672 6.402v-6.102c0-.8.418-1.055 1.055-1.055h2.762c1.516 0 2.738.75 2.738 2.508 0 1.44-1 2.508-2.75 2.508h-2v2.152c0 .54-.355.902-.902.902s-.902-.363-.902-.902zm1.805-5.773v2.242h1.68c.727 0 1.266-.437 1.266-1.12 0-.793-.56-1.12-1.45-1.12zm13.285 3.1v2.984c0 .332-.254.602-.613.602-.52 0-.66-.32-.773-1.023-.516.648-1.23 1.066-2.352 1.066-2.793 0-3.863-1.926-3.863-4.145 0-2.676 1.672-4.148 4.125-4.148 2.004 0 3.07 1.2 3.07 1.902 0 .63-.46.793-.848.793-.89 0-.56-1.242-2.32-1.242-1.242 0-2.223.813-2.223 2.816 0 1.56.77 2.637 2.246 2.637.957 0 1.793-.648 1.88-1.617H24.2c-.383 0-.812-.14-.812-.69 0-.44.254-.69.703-.69h2.223c.527 0 .738.262.738.758zm0 0"
                fill="rgb(100%,100%,100%)"
              ></path>
            </g>
          </svg >
                    <NavDropdown.Item className='ms-2'style={{fontSize:'13px'}}>JPG to PDF</NavDropdown.Item>
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center ms-'>
                    <svg className='ms-2'
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path
              d="M17.676 34.344h9.55c2.477 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.098-2.102c.484-.902.742-1.8.742-4.277v-9.547H44.82c1.8 0 2.453.188 3.113.54s1.176.87 1.527 1.527.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.113a3.69 3.69 0 0 1-1.527 1.527c-.66.352-1.312.54-3.113.54H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.527-.54-1.312-.54-3.113zm0 0"
              fill-rule="evenodd"
              fill="rgb(37.254902%,51.372549%,77.647059%)"
            ></path>
            <path
              d="M43.94 37.137c0-.477-.395-.863-.883-.863s-.883.387-.883.863v3.844l-5.145-5.047c-.348-.34-.902-.34-1.25 0a.85.85 0 0 0-.258.609.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.488 0-.883.387-.883.867s.395.867.883.867h6.05c.113-.004.227-.023.336-.07a.87.87 0 0 0 .477-.465c.05-.105.066-.22.066-.332l.004-5.934zm0 0"
              fill="rgb(100%,100%,100%)"
            ></path>
            <path
              d="M27.145 32.324H5.18c-1.8 0-2.453-.187-3.113-.543S.89 30.914.54 30.254 0 28.95 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54s1.172.87 1.527 1.527.54 1.313.54 3.113v21.965c0 1.8-.187 2.453-.54 3.113s-.87 1.176-1.527 1.527-1.312.54-3.113.54zm0 0"
              fill-rule="evenodd"
              fill="rgb(86.27451%,89.803922%,98.039216%)"
            ></path>
            <path
              d="M20.844 8.61h2.96l-2.94 14.64H17.77l-1.777-9.035-1.824 9.035h-3.203L8.04 8.61h3.164l1.508 9.363 1.938-9.363h3.004l.04.203 1.688 9.1zm0 0"
              fill="rgb(16.078431%,34.117647%,58.431373%)"
            ></path>
          </svg>
                    <NavDropdown.Item href="#action/3.1" style={{fontSize:'13px'}} className='ms-2'>WORD TO PDF</NavDropdown.Item>
                    </div>
                    <div className='d-flex justify-content-evenly align-items-center ms-2'>
                    <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 50 50"
          >
            <path
              d="M17.676 34.344h9.55c2.476 0 3.375-.258 4.28-.742a5.04 5.04 0 0 0 2.097-2.102c.495-.902.743-1.8.743-4.277v-9.547H44.82c1.8 0 2.453.187 3.114.54.656.355 1.175.87 1.527 1.527s.54 1.31.54 3.113V44.82c0 1.8-.187 2.453-.54 3.114-.35.656-.87 1.175-1.526 1.527S46.62 50 44.82 50H22.855c-1.8 0-2.453-.187-3.113-.54s-1.172-.87-1.527-1.526-.54-1.312-.54-3.113zm0 0"
              fill-rule="evenodd"
              fill="rgb(100%,46.27451%,31.764706%)"
            ></path>
            <path
              d="M43.94 37.137c0-.477-.393-.864-.88-.864s-.884.387-.884.864v3.843l-5.146-5.046c-.346-.34-.9-.34-1.25 0-.163.16-.257.38-.257.61a.86.86 0 0 0 .258.613l5.145 5.05h-3.914c-.49 0-.882.387-.882.867s.393.867.882.867H43.063c.113-.002.227-.022.335-.07.215-.085.387-.253.477-.464a.75.75 0 0 0 .065-.332l.005-5.934zm0 0"
              fill="rgb(100%,100%,100%)"
            ></path>
            <g fill-rule="evenodd">
              <path
                d="M27.145 32.324H5.18c-1.8 0-2.453-.187-3.113-.543S.89 30.914.54 30.254 0 28.95 0 27.145V5.18c0-1.8.188-2.453.54-3.113A3.69 3.69 0 0 1 2.066.539C2.727.188 3.38 0 5.18 0h21.965c1.8 0 2.453.188 3.113.54s1.172.87 1.527 1.527.54 1.313.54 3.113v21.965c0 1.8-.187 2.453-.54 3.113s-.87 1.176-1.527 1.527-1.312.54-3.113.54zm0 0"
                fill="rgb(95.294118%,85.098039%,80%)"
              ></path>
              <path
                d="M19.367 17.156c-1.086.898-2.54 1.348-4.36 1.348H13.39V23.5H10V9h5.313C19.102 9 21 10.54 21 13.62c0 1.453-.543 2.637-1.633 3.535zM14.82 11.5H13.5V16h1.32c1.785 0 2.68-.758 2.68-2.273 0-1.484-.89-2.227-2.68-2.227zm0 0"
                fill="rgb(81.568627%,27.058824%,14.901961%)"
              ></path>
            </g>
          </svg>
                    <NavDropdown.Item href="#action/3.1" className='ms-2' style={{fontSize:'13px'}}>Powerpoint to PDF</NavDropdown.Item>
                    </div>
            </NavDropdown>
          </Nav>
        </Container>
        <div className='d-flex flex-row-reverse align-items-center me-2' >
       <Link to={'/signup'}><Button className='button btn btn-danger'>SignUp</Button></Link> 
        <Link to={'/login'}  className='login me-3'>Login</Link>
        </div>
        
      </Navbar>
      <br />
     
    </>
  )
}

export default Header