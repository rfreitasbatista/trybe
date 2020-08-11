import React, { Component } from 'react';
import Button from './Button';
import Dropdown from './Alert';

const content = [
  {id: 1, item: 'a'},
  {id: 2, item: 'b'},
  {id: 3, item: 'c'},
  {id: 4, item: 'd'},
];

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showModal: false,
      isDisableButton: false,
      content: 'a'
    }
    this.changeLetter = this.changeLetter.bind(this)
  }

  changeTitle = (value) => {
    this.setState({ title: value })
  }

  changeLetter = (event) => {
    this.setState({
      content : event.target.innerHTML
    })
    console.log(event.target.innerHTML)
    
  }

  changeShowComponent = () => {
    this.setState((state) => (
      {
        showModal: !state.showModal,
        isDisableButton: !state.isDisableButton
      }
    ))
  }

  render() {
    return (
      <div className='main'>
        <Button content={this.state.content} showComponent={this.changeShowComponent} value='Título Show' />
        {this.state.showModal &&
          <Dropdown hideComponent={this.changeShowComponent} func={this.changeLetter}>
            {
              content
            }
          </Dropdown>}
          
      </div>
    )
  }
}

export default App;
