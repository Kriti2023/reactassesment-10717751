import React, { useEffect } from "react";
import "./CreateBlog.css";
import { Card, Container, Spinner } from "react-bootstrap";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function CreateBlog() {
  const [apimyData, setApimyData] = useState("");
  const [createTitle, setTitle] = useState();
  const [createBlogBody, setBlogBody] = useState();
  const [Loading, setLoading] = useState(false);
  const savePost = () => {
    setLoading(true);
    axios
      .post("https://jsonplaceholder.typicode.com/posts", [
        {
          userId: 5,
          id: 788,
          title: createTitle,
          body: createBlogBody,
        },
      ])
      .then((response) => {
        setLoading(false);
        setApimyData(response);
      });
  };

  console.log(apimyData);
  return (
    <>
      <Container className="container-with-bg">
        {/* <div className="my-4">
        <FloatingLabel
          controlId="floatingTextarea"
          label="Please Enter ID"
          className="mb-3"
        >
          <Form.Control as="input" type="number" placeholder="Post Blog " />
        </FloatingLabel>
      </div> */}
        {apimyData.length === 0 ? (
          <div className="input-field">
            <div className="my-4">
              <FloatingLabel
                controlId="floatingTextarea"
                label="Please enter Title"
                className="mb-3"
              >
                <Form.Control
                  onChange={(e) => setTitle(e.target.value)}
                  as="input"
                  type="text"
                  placeholder="Please enter Title "
                />
              </FloatingLabel>
            </div>
            <div className="my-4">
              <FloatingLabel
                controlId="floatingTextarea"
                label="PLease enter Blog"
                className="mb-3"
              >
                <Form.Control
                  onChange={(e) => setBlogBody(e.target.value)}
                  as="textarea"
                  placeholder="Please enter Blog " className="min-height-textarea"
                />
              </FloatingLabel>
              <div className="d-flex align-items-center justify-content-center">
                <div className="me-3">
                  <Button variant="secondary" className="mr-5" size="lg">
                    Close
                  </Button>
                </div>
                <div>
                  <Button onClick={savePost} variant="primary" size="lg">
                    Post
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div>
            {apimyData?.data[0]?.title && <h2 className="blog-title">{apimyData.data[0]?.title}</h2>}
            {apimyData?.data[0]?.body && <p className="blog-body">{apimyData.data[0]?.body}</p>}
          </div>
        )}
        {Loading && <Spinner animation="border" />}
      </Container>
    </>
  );
}
export default CreateBlog;
