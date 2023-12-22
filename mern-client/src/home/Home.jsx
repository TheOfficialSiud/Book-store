import React from 'react'   
import Banner from '../components/Banner'
import BestSellerBooks from './BestSellerBooks'
import FavBook from './FavBook'
import PromoBanner from './PromoBanner'
import OtherBook from './OtherBook'
import Review from './Review'

const Home = () => {
    return (
        <div>
          <Banner/>
          <BestSellerBooks/>
          <FavBook/>
          <PromoBanner/>
          <OtherBook/>
          <Review/>

        </div>
    )
}

export default Home