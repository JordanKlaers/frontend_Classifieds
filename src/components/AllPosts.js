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
  }

  componentDidMount(){
    var self = this
    axios.get('http://localhost:2000/classifieds').then(function(result){
      // console.log(result.data);
      self.setState({'posts':result.data},()=> console.log(self.state.posts))

    }).catch(function (error) {
    console.log(error);
    });
  }

  renderList() {
    if (this.state.posts == "") {
      return <div>loading</div>
    }
    return this.state.posts.map((post, i) => {
      return (<OnePost key={i}  post={post}/>)
    });
  }

  render(){
    return (
      <div>
        <Container>
          {this.renderList()}
        </Container>
      </div>
    );
  }
}


export default AllPosts;
