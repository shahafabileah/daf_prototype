import { useState } from 'react';
import CharityTable from "./CharityTable";
import SearchBox from "./SearchBox";
import "./SearchCharities.css";

export default function SearchCharities() {
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <div>
            <SearchBox searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            <CharityTable searchTerm={searchTerm} />
        </div>
    );
}
