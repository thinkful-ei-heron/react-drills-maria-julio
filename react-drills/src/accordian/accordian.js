import React from 'react';

export default class accordian extends React.Component {
  static defaultProps = {
    sections = [],
  };
  state = {
    currentSectionIndex: 0
  };

  handleButtonClick(index) {
    this.setState({ currentSectionIndex: index })
  }
  renderButtons() {
      return this.this.props.sections.map((section, index) => (
        <button key={index} onClick={() => this.handleButtonClick(index)}>
        {sections.title}
        </button>
      ))
  }
 
  renderContent() {
    const currentSection = this.props.sections[this.state.currentSectionIndex]
    return (
        <li className='list'>
            
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
 
