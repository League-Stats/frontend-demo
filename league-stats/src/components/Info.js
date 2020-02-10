import React from 'react';

const Info = ({ info }) => {
    return (
        <div>
            <h1>{info.name}</h1>
            <h3>Icon: {info.icon}</h3>
            <h3>Level: {info.level}</h3>
        </div>
    )
}

export default Info;