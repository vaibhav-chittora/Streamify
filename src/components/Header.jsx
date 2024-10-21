import React from 'react'
import logo from '../assets/logo1.png'
import avatar from '../assets/avatar.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv } from 'react-icons/hi2';
import { HiPlus, HiDotsVertical  } from 'react-icons/hi';
import HeaderItem from './HeaderItem';


function Header() {
  const menu = [
    {
      name: 'Home',
      icon: HiHome
    },
    {
      name: 'Search',
      icon: HiMagnifyingGlass
    },
    {
      name: 'Watchlist',
      icon: HiPlus
    },
    {
      name: 'Originals',
      icon: HiStar
    },
    {
      name: 'Movies',
      icon: HiPlayCircle
    },
    {

      name: 'Series',
      icon: HiTv
    }

  ]
  return (

    <div className='flex items-center justify-between gap-8 p-5'>
      <div className='flex items-center gap-10'>

        <div className='hidden md:flex gap-8'>
          <img src={logo} className='w-10 md:w-16 object-cover' alt='logo' />
          {menu.map((item, index) => (
            <HeaderItem name={item.name} Icon={item.icon} key={index} />
          ))}
        </div>

        <div className='flex md:hidden gap-14'>
          <img src={logo} className='w-10 md:w-16 object-cover' alt='logo' />
          {menu.map((item, index) =>index<3 && (
            <HeaderItem name={item.name} Icon={item.icon} key={index} />
          ))}
        </div>
        <div className='md:hidden'>
          <HeaderItem name='More' Icon={HiDotsVertical} />

        </div>

      </div>
      <img src={avatar} className='rounded-full w-[40px]' alt="" />
    </div>
  )
}

export default Header