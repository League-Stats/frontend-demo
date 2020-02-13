import React from 'react';
import Region from './Region';
import '../App.css'

const Search = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit} className="search">
                <input
                    name="search"
                    type="text"
                    value={props.value}
                    onChange={props.handleChanges}
                />
                <Region
                    current={props.current}
                    regions={props.regions}
                    regionChange={props.regionChange}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search;