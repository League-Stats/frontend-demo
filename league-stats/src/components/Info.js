import React from 'react';
import './css/Info.css'
import Banner from './Banner.js'

const Info = (props) => {
    return (
        <div className="info">
            <Banner info={props.info} />
        </div>
    )
}

export default Info;