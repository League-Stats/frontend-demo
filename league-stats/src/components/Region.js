import React from 'react';

const Region = (props) => {
    return(
        <div>
            <select onChange={props.regionChange}>
                {props.regions.map(region => (
                    <option key={region.id} value={region.locale}>
                        {region.locale}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Region;