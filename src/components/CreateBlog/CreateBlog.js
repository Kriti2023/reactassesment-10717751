import React, { useEffect } from "react";
import "./CreateBlog.css";
import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";

function CreateBlog() {
  const [apimyData, setApimyData] = useState('');
  const [createTitle, setTitle] = useState();
  const [createBlogBody, setBlogBody] = useState();

 const savePost=()=>{
    axios.post("https://jsonplaceholder.typicode.com/posts",
        [
            {
                "userId":5,
                'id':788,
                "title":createTitle,
                "body":createBlogBody
                

            }
        ]
    ).then((response) => {
      setApimyData(response);
    });
}

console.log(apimyData) ; 
return (
    <>
   <Container>
      {/* <div className="my-4">
        <FloatingLabel
          controlId="floatingTextarea"
          label="Please Enter ID"
          className="mb-3"
        >
          <Form.Control as="input" type="number" placeholder="Post Blog " />
        </FloatingLabel>
      </div> */}
      { apimyData.length===0?
      (<div>
    <div className="my-4">
        <FloatingLabel
          controlId="floatingTextarea"
          label="Please enter Title"
          className="mb-3"
        >
          <Form.Control onChange={(e)=>setTitle(e.target.value)} as="input" type="text" placeholder="Please enter Title " />
        </FloatingLabel>
      </div>
      <div className="my-4">
        <FloatingLabel
          controlId="floatingTextarea"
          label="PLease enter Blog"
          className="mb-3"
        >
          <Form.Control onChange={(e)=>setBlogBody(e.target.value)} as="textarea" placeholder="PLease enter Blog " />
        </FloatingLabel>
        <div>
          <Button variant="secondary" className="mr-5">Close</Button>
          <Button onClick={savePost} variant="primary">Post</Button>
        </div>
      </div></div>):
      (<div>{apimyData?.data[0]?.title&&<h1>{apimyData.data[0]?.title}</h1>}
      {apimyData?.data[0]?.body&&<h2>{apimyData.data[0]?.body}</h2>}</div>)
      }
    </Container>
    </>
  );
}
export default CreateBlog;
