import React from "react";
import './search.css'

const SearchBox = ({lyrics}) => {
    return (
        <div className="lyrics-container">
            <pre>{lyrics}</pre>
        </div>
    )
}

export default SearchBox