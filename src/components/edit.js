import React from "react";
import axios from 'axios';
import { Container, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {Link} from 'react-router-dom'


class Edit extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      title: this.props.postData.post.title,
      description: this.props.postData.post.description,
      price: this.props.postData.post.price,
      item_image: this.props.postData.post.item_image,
      id: this.props.postData.post.id
    };
//     this.state ={
// 'post': this.props.postData.post
//     };
    console.log(this.props.updateEdit);
  }

  onFormSubmit = (event)=>{

    event.preventDefault();
    var id= this.state.id
    var url = 'http://localhost:2000/classifieds/' + id
    let formdata = this.state
    delete formdata.id
    // console.log(formdata);
    
    this.props.updateEdit(url, formdata)
    this.props.toggle()
  }

  componentDidMount(){
    console.log(this.state);
      // console.log(this.props.postData.post);
      // this.setState({'post': this.props.postData.post}, ()=> console.log(this.state))



  }

  // console.log(this.state.post.id);

  handleInputChange = (event)=>{
    console.log(this.state);
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
            <Input type="textarea" name="title" id="title" placeholder="title" ref="title"  value={this.state.title} onChange={(e) => {this.handleInputChange(e)}} />
          </FormGroup>
          <FormGroup>
            <Label for="description">Description</Label>
            <Input type="textarea" name="description" id="description" placeholder="description" ref="description" value={this.state.description} onChange={(e) => {this.handleInputChange(e)}}/>
          </FormGroup>
          <FormGroup>
            <Label for="price">Number</Label>
            <Input type="number" name="price" id="price" placeholder="price" ref="price" value={this.state.price} onChange={(e) => {this.handleInputChange(e)}}/>
          </FormGroup>
          <FormGroup>
          <Label for="item_image">URL Image of product</Label>
          <Input type="url" name="item_image" id="item_image" placeholder="item_image" ref="item_image" value={this.state.item_image} onChange={(e) => {this.handleInputChange(e)}}/>
        </FormGroup>
        <Button>Update</Button>
        </Form>
      </div>
    );
  }
}


export default Edit;
