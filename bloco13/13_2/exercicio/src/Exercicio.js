import React from 'react';

class Exercicio extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      showLoading:false,
      showPhoto: true,
      url:localStorage.getItem("dog")
    }
    this.fetchNovo = this.fetchNovo.bind(this)
  }

 fetchNovo() {
      fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(data => {
      if (data.message.includes('terrier')){
        alert('No mostramos catioros ideotas')
        this.fetchNovo()
      } else {
      alert('El próximo dog es: ' + data.message.split('/')[4].split('-').join(' '))}
      this.setState({
        url:data.message
    })
    if(!data.message.includes('terrier'))
    localStorage.setItem('dog', this.state.url)
  })

  }

  componentDidMount() {
    this.setState({
      showPhoto:true,
      url:localStorage.getItem('dog')
    })
  }
  

  shouldComponentUpdate(nextProps, nextState){
    console.log(nextState['url'])
    if((nextState['url']).includes('terrier')){
      return false
    } else {
      return true
    }
  }

  render() {
    return(
      <div className='App-header'>
        {this.state.showLoading && <h1>Loading</h1>}
        {this.state.showPhoto && <img src={this.state.url} alt="littledog" width='300'/>}
        {this.state.showPhoto && <button onClick={this.fetchNovo}>Trocar</button>}
      </div>
    )
  }
}

export default Exercicio;
