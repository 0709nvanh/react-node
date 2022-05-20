import React from 'react'
import Banner from '../../components/client/pages/Banner'
import BannerBottom from '../../components/client/pages/home/BannerBottom'
import GetProduct from '../../components/client/pages/home/GetProduct'
import IconHome from '../../components/client/pages/home/IconHome'
import LastChance from '../../components/client/pages/home/LastChance'
import ListTopProduct from '../../components/client/pages/home/ListItemShopNow'

const Home = () => {
  return (
    <div>
      <Banner/>
      <IconHome />
      <div className='w-full px-[180px]'>
        <ListTopProduct />
        <GetProduct />
        <LastChance />
        <BannerBottom />
      </div>
    </div>
  )
}

export default Home