import React from 'react';
import './App.css';
import axios from 'axios';
import Title from './components/Title';
import Search from './components/Search';
import Rank from './components/Rank';
import Info from './components/Info';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: "",
      summoner: {
        name: "",
        icon: 0,
        level: 0,
      },
      rank: [],
    }
  }

  handleChanges = e => this.setState({ value: e.target.value });

  handleSubmit = e => {
    e.preventDefault();

    axios.request({
      method: 'POST',
      url: `https://hextechgg.herokuapp.com/api/summoner/summoner/`,
      data: {
        summonerName: this.state.value,
        summonerRegion: "NA"
      },
    })
      .then(res => {
        this.setState({
          summoner: {
            name: res.data.name,
            icon: res.data.icon,
            level: res.data.level
          }
        })
      })
      .catch(error => {
        console.log(error)
      })

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
        <Info info={this.state.summoner} />
        {this.state.rank.map(rank => {return <Rank rank={rank}/>})}
      </div>
    );
  }
}

export default App;
