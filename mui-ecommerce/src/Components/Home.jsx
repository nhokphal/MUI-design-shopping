import React from 'react'
import Announcement from './Announcement'
import { Categories } from './Categories'
import NavBar from './NavBar'
import { Products } from './Products'
import Slider from './Slider'

export default function Home() {    
  return (
    <div>
    <Announcement />
    <NavBar/>
    <Slider/>
    <Categories />
    <Products />
    </div>
  )
}
  