import React, { Component } from 'react';
import './FullText.css';

class FullText extends Component {
  render() {
    return (
      <div className="full-text">
        {this.props.text.map((word, index) => {
          if(index === this.props.currentIndex){
            return <span key={index} className="current">{word} </span>;
          }else if(index < this.props.currentIndex){
            return <span key={index} className="completed">{word} </span>;
          }else{
            return <span key={index}>{word} </span>;
          }
        })}
      </div>
    );
  }
}

export default FullText;
