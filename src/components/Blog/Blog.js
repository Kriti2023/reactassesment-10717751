import React, { useEffect } from "react";
import "./Blog.css";
import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { commentList } from "./commentList";
export default function Blog() {
  const [apiData, setApiData] = useState();
  const [comment, setComment] = useState();

  useEffect(() => {
    // alert("here")
    axios.get("https://jsonplaceholder.typicode.com/posts").then((response) => {
      setApiData(response.data);
    });
  }, []);
  const [show, setShow] = useState(false);
  const [index, setIndex] = useState(0);

  const handleClose = () => setShow(false);
  const handleSave = () => {
    console.log(comment);
    commentList.push(comment);
    console.log(commentList);
    setShow(false);
  };
  const handleShow = (index) => {
    console.log(index);
    setShow(true);
    setIndex(index);
  };

  return (
    <Container className="container-with-bg">
      <Row className="blog-row mt-5">
        {apiData?.map((ele) => (
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
                <Card.Link>
                  
                </Card.Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
        <Modal show={show} onHide={handleClose} centered >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <FloatingLabel
              controlId="floatingTextarea"
              label="Comments"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here "
                onChange={(e) =>
                  setComment({ comment: e.target.value, index: index })
                  
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
