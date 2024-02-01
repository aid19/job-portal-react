// eslint-disable-next-line no-unused-vars
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { BsHouseDoor } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';

const Search = () => {
  return (
    <div className='searchDiv grid gb-10 bg-greyIsh reounded-[10px] p-[3rem]'>
        <from action="">
            <div className='firstDiv flex justify-between items-center rounde-[8px] gap-[10px] bg-white p-5
            shadow-lg shadow-greyIsh-700'>
                <div className='flex gap-2 items-center'>
                    <AiOutlineSearch className='text-[25px] icon'/>
                    <input type='text' className='bg-transparent text-blue-500 focus:otline-none w-[100%]' placeholder='Search Job Here..' />
                  <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>

                <div className='flex gap-2 items-center'>
                    <BsHouseDoor className='text-[25px] icon'/>
                    <input type='text' className='bg-transparent text-blue-500 focus:otline-none w-[100%]' placeholder='Search by company..' />
                  <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>

                <div className='flex gap-2 items-center'>
                    <CiLocationOn className='text-[25px] icon'/>
                    <input type='text' className='bg-transparent text-blue-500 focus:otline-none w-[100%]' placeholder='Search by location..' />
                  <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
                </div>

                <button className='bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor-pointer hover:bg-blue-300'>Search</button>
            </div>
        </from>
        
    </div>
  )
}

export default Search;