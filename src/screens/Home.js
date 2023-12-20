import React from 'react';
import Navbar from '../components/Navbar.js';
import Footer from '../components/Footer.js';
import Card from '../components/Card.js';
import Carousel from '../components/Carousel.js';

export default function Home() {
  return (
    <div>
      <div><Navbar /></div>
      <div><Carousel/></div>
      <div className='m-3'><Card/></div>
      <div><Footer /></div>
    </div>
  )
}
