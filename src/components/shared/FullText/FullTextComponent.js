import React from 'react';
import PropTypes from 'prop-types';
import './FullText.css';

const FullTextComponent = (props) => (
    <div className="full-text">
        {props.text.map((word, index) => {
          if(index === props.currentIndex){
            return <span key={index} className="current">{word} </span>;
          }else if(index < props.currentIndex){
            return <span key={index} className="completed">{word} </span>;
          }else{
            return <span key={index}>{word} </span>;
          }
        })}
    </div>
);

FullTextComponent.propTypes = {
    text: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentIndex: PropTypes.number.isRequired
};

export default FullTextComponent;
