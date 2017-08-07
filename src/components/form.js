import React from "react";
import axios from 'axios';
import { Container, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {Link} from 'react-router-dom'


class TheForm extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: '',
      description: '',
      price: '',
      item_image: ''
    };
  }

  onFormSubmit = (event)=>{
    event.preventDefault();
    let formdata = this.state
    console.log(formdata);
    axios.post('http://localhost:2000/classifieds', formdata).then(function(result){
      console.log(result);
    }).catch(function (error) {
    console.log(error);
    });
  }

  handleInputChange = (event)=>{
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }


  render(){
    return (
      <div>


        <Form onSubmit={this.onFormSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="textarea" name="title" id="title" placeholder="title" ref="title" onChange={(e) => {this.handleInputChange(e)}} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" id="description" placeholder="description" ref="description" onChange={(e) => {this.handleInputChange(e)}}/>
          </FormGroup>
          <FormGroup>
            <Label for="price">Number</Label>
            <Input type="number" name="price" id="price" placeholder="price" ref="price" onChange={(e) => {this.handleInputChange(e)}}/>
          </FormGroup>
          <FormGroup>
          <Label for="item_image">URL Image of product</Label>
          <Input type="url" name="item_image" id="item_image" placeholder="item_image" ref="item_image" onChange={(e) => {this.handleInputChange(e)}}/>
        </FormGroup>
        <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}


export default TheForm;
