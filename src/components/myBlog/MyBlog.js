import React, { useEffect } from "react";
import "./MyBlog.css";
import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { MyBlogCommentList } from "./MyBlogCommentList";

function MyBlog() {
  const [apimyData, setApimyData] = useState();
  const [mycomment, setmyComment] = useState();

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setApimyData(response.data);
    });
  }, []);
  const [show, setCommentShow] = useState(false);
  const [index, setCommentIndex] = useState(0);

  const handleClose = () => setCommentShow(false);
  const handleSave = () => {
    console.log(mycomment);
    MyBlogCommentList.push(mycomment);
    console.log(MyBlogCommentList);
    setCommentShow(false);
  };
  const handleShow = (index) => {
    console.log(index);
    setCommentShow(true);
    setCommentIndex(index);
  };

  return (
    <Container className="container-with-bg">
      <Row className="blog-row mt-5">
        {apimyData?.filter((user)=>user.userId===5).map((ele) => (
          <Col md={4} key={ele.id}>
            <Card className="mx-1 my-3">
              <Card.Body>
                <Card.Title>{ele.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {ele.id}
                </Card.Subtitle>
                <Card.Text>{ele.body}</Card.Text>
                <Card.Link></Card.Link>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleShow(ele.id);
                  }}
                >
                  Comment
                </Button>
              </Card.Body>
              <Card.Footer>
                <Card.Link></Card.Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <FloatingLabel
              controlId="floatingTextarea"
              label="myComments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a mycomment here "
                onChange={(e) =>
                  setmyComment({ mycomment: e.target.value, index: index })
                  
                }
              />
            </FloatingLabel>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleSave}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </Container>
  );
}
export default MyBlog;