import React from 'react';
import './App.css';
import axios from 'axios';
import Title from './components/Title';
import Search from './components/Search';
import Rank from './components/Rank';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: "",
      rank: [],
    }
  }

  handleChanges = e => this.setState({ value: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    axios.request({
      method: 'POST',
      url: `https://hextechgg.herokuapp.com/api/summoner/rank/`,
      data: {
        summonerName: this.state.value,
	      summonerRegion: "NA"
      },
    })
      .then(res => {
        this.setState({
          rank: res.data
        })
        console.log(this.state.rank)
      })
      .catch(error => {
        console.log(error)
      })
  }

  render(){
    return (
      <div className="App">
        <Title />
        <Search
          value={this.state.value}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}  
        />
        {this.state.rank.map(rank => {return <Rank rank={rank}/>})}
      </div>
    );
  }
}

export default App;
