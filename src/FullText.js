import React, { Component } from 'react';

class FullText extends Component {
  componentDidMount(){
    console.log('Component mounted')
  }
  render() {
    return (
      <div className="full-text">
        {this.props.text}
      </div>
    );
  }
}

export default FullText;
