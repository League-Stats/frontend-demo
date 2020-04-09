import React from 'react';
import '../src/components/css/App.css';
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
      ],
    }
  }

  handleChanges = e => this.setState({ value: e.target.value });

  handleSubmit = e => {
    e.preventDefault();
    if(this.state.value === "discordtarzaned"){
      this.setState({
        summoner: {
          name: "DISCORDTARZANED",
          icon: 7,
          level: 89
        },
        rank: [{
          queueType: "Solo/Duo",
          tier: "CHALLENGER",
          rank: "I",
          leaguePoints: 1495,
          wins: 197,
          losses: 142,
        }]
      })
    }

    if(this.state.value === "tai yang c"){
      this.setState({
        summoner: {
          name: "tai yang c",
          icon: 3180,
          level: 322
        },
        rank: [{
          queueType: "Solo/Duo",
          tier: "DIAMOND",
          rank: "II",
          leaguePoints: 60,
          wins: 85,
          losses: 73,
        },
        {
          queueType: "Solo/Duo",
          tier: "CHALLENGER",
          rank: "I",
          leaguePoints: 168,
          wins: 170,
          losses: 142,
        }]
      })
    }
  }

  regionChange = e => {
    this.setState({ current: e.target.value})
  }

  render(){
    console.log(this.state.rank)
    return (
      <div className="App">
        <section className="section-left">
          <Info info={this.state.summoner} />
        </section>
        <section className="section-right">
          <div className="nav">
            <a className="nav-link">PROFILE</a>
            <a className="nav-link">MATCH HISTORY</a>
            <Search
              value={this.state.value}
              handleChanges={this.handleChanges}
              handleSubmit={this.handleSubmit}  
              current={this.state.current}
              regions={this.state.regions}
              regionChange={this.regionChange}
            />
          </div>
          <div className="message">NOTE: Due to Riot Games' rules, the API key can only be used for development purposes until the app is approved. Please search for "discordtarzaned" or "tai yang c" for the demo to work. Website is under construction. Riot Games has currently disabled match history.</div>
          <div className="section-rank">
            {this.state.rank.map(rank => {return <Rank rank={rank} key={rank.queueType}/>})}
          </div>
        </section>
      </div>
    );
  }
}

export default App;
