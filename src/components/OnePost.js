import React from "react";
import axios from 'axios';
import Edit from './edit'
import style from '../index.css'
import { Container, Row, Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';

import {Link} from 'react-router-dom'


class OnePost extends React.Component {
  constructor(props){
    super(props);

    this.state ={
      post: this.props.post,
      edit: false
    };
  }

  componentDidMount(){

  }

  editToggle = ()=>{
    this.setState({edit: !this.state.edit})
  }

  deleteFunction = ()=>{
    var id= this.state.post.id
    // console.log(id);
    var url = 'http://localhost:2000/classifieds/' + id
    this.props.updateDelete(url)
  }

  runAway = (event)=>{
    console.log("anything");

    this.imagestyle = "itemImage"
    console.log(this.imagestyle);
  }


  imagestyle = "itemImage"

  render(){
    if(this.state.edit){
      return (
        <div>
          <Row className="row">
            <Col>
              <div>
                {this.props.post.title}
              </div>
              <div>
                {this.props.post.description}
              </div>
              <div >
                {this.props.post.price}
              </div>


              <div className="holycow">
                <img  className={this.imagestyle} src={this.props.post.item_image} onMouseOver={this.runAway}></img>
              </div>
              <button onClick={(e)=>this.editToggle(e)}>Edit</button>
              <button onClick={()=>this.deleteFunction()}> delete </button>
              <Edit postData={this.state} toggle={this.editToggle} updateEdit={this.props.updateEdit}></Edit>

            </Col>
          </Row>

        </div>
      );
    }
    else{
      return (
        <div>
          <Row className="row">
            <Col>
              <div>
                {this.props.post.title}
              </div>
              <div>
                {this.props.post.description}
              </div>
              <div>
                {this.props.post.price}
              </div>
              <div className="sean">
                <img  className="donkey" src={this.props.post.item_image} onMouseOver={this.runAway}></img>
              </div>
            </Col>
          </Row>
          <button onClick={()=>this.editToggle()}>Edit</button>
          <button onClick={()=>this.deleteFunction()}> delete </button>
        </div>
      );
    }
  }
}


export default OnePost;
