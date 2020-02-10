import React from 'react';

const Search = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <input
                    name="search"
                    type="text"
                    value={props.value}
                    onChange={props.handleChanges}
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search;