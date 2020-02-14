import React from 'react';
import './App.css';
import axios from 'axios';
import Search from './components/Search';
import Rank from './components/Rank';
import Info from './components/Info';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      value: "",
      summoner: {
        name: "Hextech GG",
        icon: 3367,
        level: 30,
      },
      rank: [],
      current: "NA",
      regions: [
          { id: 0, locale: 'NA' },
          { id: 1, locale: 'KR' },
          { id: 2, locale: 'EUW' },
          { id: 3, locale: 'EUNE' },
          { id: 4, locale: 'JP' },
          { id: 5, locale: 'BR' },
          { id: 6, locale: 'LAN' },
          { id: 7, locale: 'LAS' }
      ]
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
        summonerRegion: this.state.current
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

    this.setState({ value: ''})
  }

  regionChange = e => {
    this.setState({ current: e.target.value})
  }

  render(){
    console.log(this.state.rank)
    return (
      <div className="App">
        <Search
          value={this.state.value}
          handleChanges={this.handleChanges}
          handleSubmit={this.handleSubmit}  
          current={this.state.current}
          regions={this.state.regions}
          regionChange={this.regionChange}
        />
        <Info info={this.state.summoner} />
        {this.state.rank.map(rank => {return <Rank rank={rank} key={rank.queueType}/>})}
      </div>
    );
  }
}

export default App;
