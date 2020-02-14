import React from 'react';
import './Info.css'

let border = 500;

const Info = ({ info }) => {
    if(info.level >= 30 && info.level < 50) border = 30;
    if(info.level >= 50 && info.level < 75) border = 50;
    if(info.level >= 75 && info.level < 100) border = 75;
    if(info.level >= 100 && info.level < 125) border = 100;
    if(info.level >= 125 && info.level < 150) border = 125;
    if(info.level >= 150 && info.level < 175) border = 150;
    if(info.level >= 175 && info.level < 200) border = 175;
    if(info.level >= 200 && info.level < 225) border = 200;
    if(info.level >= 225 && info.level < 250) border = 225;
    if(info.level >= 250 && info.level < 275) border = 250;
    if(info.level >= 275 && info.level < 300) border = 275;
    if(info.level >= 300 && info.level < 325) border = 300;
    if(info.level >= 325 && info.level < 350) border = 325;
    if(info.level >= 350 && info.level < 375) border = 350;
    if(info.level >= 375 && info.level < 400) border = 375;
    if(info.level >= 400 && info.level < 425) border = 400;
    if(info.level >= 425 && info.level < 450) border = 425;
    if(info.level >= 450 && info.level < 475) border = 450;
    if(info.level >= 475 && info.level < 500) border = 475;
    if(info.level >= 500) border = 500;

    return (
        <div>
            <h1>{info.name}</h1>
            <div className="level">
                <img alt="player-icon" className="icon" src={`https://ddragon.leagueoflegends.com/cdn/10.3.1/img/profileicon/${info.icon}.png`}/>
                <img alt="player-level-border" className="border" src={require(`../images/lvl/lvl${border}.png`)}/>
                <p className="number">{info.level}</p>
            </div>
        </div>
    )
}

export default Info;