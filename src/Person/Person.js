import React from 'react';
import {Input} from "reactstrap";
import './Person.css';

const person = (props) => {

  const style = {
    margin: "_inheritsLoose"
  };

  let hobby = !!props.children ? (<p>{props.children}</p>) : null;

  return (
    <div className="Person alert alert-danger">
      <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={props.deleteHandler}>
        <span aria-hidden="true">&times;</span>
      </button>
      <p style={style}>I am {props.name} & I am {props.age} years old</p>
      {hobby}
      <Input onChange={props.changeEventHandler} value={props.name}/>
    </div>
  );
};

export default person;

