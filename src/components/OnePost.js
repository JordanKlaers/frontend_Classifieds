import React from "react";
import axios from 'axios';
import { Container, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import {Link} from 'react-router-dom'


class AllPosts extends React.Component {
  constructor(props){
    super(props);

    this.state ={ post: this.props.post
    };
  }

  componentDidMount(){
      console.log(this.state);
  }



  render(){
    return (
      <div>
        

      </div>
    );
  }
}


export default AllPosts;
