import React from 'react';

class accordian extends React.Component {
  static defaultProps = {
    sections : [],
  };
  state = {
    currentSectionIndex: 0
  };

  handleButtonClick(index) {
    this.setState({ currentSectionIndex: index })
  }
  renderButtons() {
      return this.props.props.map((section, index) => (
        <button key={index} onClick={() => this.handleButtonClick(index)}>
        {section.title}
        </button>
      ))
  }
 
  renderContent() {
    const currentSection = this.props.props[this.state.currentSectionIndex]
    return (
        <li className='list'>
            {currentSection.content}
        </li>
    )
  }
    
    render() {
        return (
            <div>
                <ul>
                    {this.renderButtons()}
                    {this.renderContent()}
                </ul>
            </div>
            )
    }
}

export default {
  accordian
}
 
