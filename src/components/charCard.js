import React from 'react';
import Image from './image'


class charCard extends React.Component {

  constructor(props){
    super(props);
    this.state ={
        key: this.props.id,
        name: this.props.name,
        selected: this.props.selected
    };

  };

  render() {
    return (
      <div onClick={()=>this.props.counterCheck(this.props.name,this.props.selected)} className={"col-3 mt-3"}>
      <Image imgSrc={this.props.name} />
  </div>
    )
  }
}

export default charCard;