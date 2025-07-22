// Home == Main page


import React from 'react'
import Hero from '../../Components/Hero'
import LatestCollections from '../../Components/LatestCollections'
import BestSeller from '../../Components/BestSeller'
import OurPolicy from '../../Components/OurPolicy'
import NewsLetterbox from '../../Components/NewsLetterbox'
import ExploreProducts from '../../Components/ExploreProducts'
function Home() {
  return (
    <div>
        <Hero/>
        <BestSeller/>
        <LatestCollections/>
        <ExploreProducts/>
        <OurPolicy/>
        <NewsLetterbox/>
    </div>
  )
}

export default Home