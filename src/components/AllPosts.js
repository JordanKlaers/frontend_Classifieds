import React from "react";
import axios from 'axios';
import OnePost from './OnePost'
import { Container, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {Link} from 'react-router-dom'


class AllPosts extends React.Component {
  constructor(props){
    super(props);

    this.state ={ posts: ""
    };
    var self = this
    axios.get('http://localhost:2000/classifieds').then(function(result){

      self.setState({'posts':result.data},()=> console.log(self.state.posts))

    }).catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount(){



  }




  filter= (event, value)=>{
    console.log(event.target.value);
    event.persist()
    var self = this
    axios.get('http://localhost:2000/classifieds').then(function(result){
      var filtered = result.data.filter(function(post){
        if(post.title.includes(event.target.value)){
        return post
        }
      })
        console.log(filtered);
      self.setState({'posts':filtered},()=> {
        })


    }).catch(function (error) {
      console.log(error);
    });
    console.log(this.state);

  }

  renderList() {

    if (this.state.posts == "") {
      return <div>loading</div>
    }
    return this.state.posts.map((post, i) => {
      return (<OnePost key={i}  post={post} updateEdit={this.updateEdit} updateDelete={this.updateDelete}/>)
    });
  }


  updateEdit = (url, formdata)=>{
    var self = this
    axios.patch(url, formdata).then(function(result){
     console.log(result);

     axios.get('http://localhost:2000/classifieds').then(function(result){

       self.setState({'posts':result.data},()=> console.log(self.state.posts))

     }).catch(function (error) {
     console.log(error);
     });


   }).catch(function (error) {
   console.log(error);
   });
  }

  updateDelete = (url)=>{
    var self = this
    axios.delete(url).then(function(result){
     console.log(result);

     axios.get('http://localhost:2000/classifieds').then(function(result){

       self.setState({'posts':result.data},()=> console.log(self.state.posts))

     }).catch(function (error) {
     console.log(error);
     });


   }).catch(function (error) {
   console.log(error);
   });
  }



  render(){
    return (
      <div>
      
        PLACE HODLEREREREREREfwefwef

        <Container>
          <Form>
            <FormGroup>
              <Label for="title">Filter by Title</Label>
              <Input type="textarea" name="title" id="title" placeholder="title" ref="title" onChange={(e) => {this.filter(e, this.value)}} />
            </FormGroup>
          </Form>
          {this.renderList()}
        </Container>
      </div>
    );
  }
}


export default AllPosts;
