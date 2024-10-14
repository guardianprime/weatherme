import {useState} from "react";

function Search() {
    const [query, setQuery] = useState("lagos");
function handleQuery(e){
    setQuery((q) => q = e.target.value);
};

    return (<input type="text" onChange={handleQuery} value={query}/>)
}

export default Search;