import React from 'react';
import {cushion, button, input} from '../../../utilities/styleGuide';

class AddQuote extends React.Component {
  
  createId(uniqueNumber, description) {
    const shortKebabDescription = description
      .toLowerCase()
      .split(' ')
      .slice(0, 2)
      .join('-');
    return `${uniqueNumber}-${shortKebabDescription}`;
  }

  handleSubmit() {
    const textNode = this.refs.text;
    const text = textNode.value.trim();
    const authorNode = this.refs.author;
    const author = authorNode.value.trim();
    const payload = {
      text,
      author,
      id: this.createId(Date.now(), text),
      likeCount: 0
    };
    this.props.addQuoteById(payload);
    textNode.value = '';
    authorNode.value = '';
  }

  render() {
    return (
      <div>
        <textarea
          style={{...cushion, ...input}}
          ref='text'
          placeholder='Quote'
        >
        </textarea>
        <input
          style={{...cushion, ...input}}
          ref='author'
          placeholder='Author'
        >
        </input>
        <a
          style={button}
          onClick={this.handleSubmit.bind(this)}>
          Add Quote
        </a>
      </div>
    );
  }
}

AddQuote.propTypes = {
  addQuoteById: React.PropTypes.func.isRequired
};

export default AddQuote;
