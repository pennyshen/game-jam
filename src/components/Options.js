import React from 'react'
import PropTypes from 'prop-types'

class Options extends React.Component {
  static propTypes = {
    options: PropTypes.array,
    onOptionClick: PropTypes.func,
  }

  onOptionClick(id) {
    this.props.onOptionClick(id)
  }

  render() {
    return (
      <div className="mine">
        {this.props.options.map((option, index) => (
          <button
            className="option message"
            key={index}
            onClick={(e) => this.onOptionClick(option.id)}
          >
            > <span className="optionText">{option.message}</span>
          </button>
        ))}
      </div>
    )
  }
}

export default Options