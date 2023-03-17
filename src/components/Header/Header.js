import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="justify-content-end">
            <div><Nav.Link >Blog</Nav.Link></div>
            <div><Nav.Link href="/myBlog">My Blog</Nav.Link></div>
            <div><Nav.Link href="/createBlog">Create Blog</Nav.Link></div>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
