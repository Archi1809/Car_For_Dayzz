"use client";

import Image from "next/image";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import { manufacturers } from "@/constants";

const SearchBar = () => {
  const [manufacturer, setManuFacturer] = useState("");
    const handleSearch = () => {}
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManufacturer
                manufacturer={manufacturer}
                setManuFacturer={setManuFacturer}
            /> 
        </div>
    </form>
  )
}

export default SearchBar