import React, { Component } from 'react';
import './FullText.css';

class FullText extends Component {
  render() {
    return (
      <div className="full-text">
        {this.props.text.map((word, index) => {
          if(index === this.props.currentIndex){
            return <span key={index} className="current-word">{word} </span>;
          }else{
            return `${word} `;
          }
        })}
      </div>
    );
  }
}

export default FullText;
