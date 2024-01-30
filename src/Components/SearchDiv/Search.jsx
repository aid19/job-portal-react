// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const Search = () => {
  return (
    <div className='searchDiv grid gb-10 bg-greyIsh reounded-[10px] p-[3rem]'>
        <from action="">
            <div className='firstDiv flex justify-between items-center rounde-[8px] gap-[10px] bg-white p-5
            shadow-lg shadow-greyIsh-700'>
                <div className='flex gap-2 items-center'>
                    <AiOutlineSearch />
                </div>
            </div>
        </from>
    </div>
  )
}

export default Search;