import React from 'react';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
export default function Destination1() {
  return (
    <>
      <div className='destination'>
      </div>
      <div className='destination-container'>
        <div className='info-wrapper'>
          <h2>Travel through the Islands of Bali in a Private Cruise</h2>
          <p>Nestled on the eastern coast of Bali, Klungkung is a region rich in cultural heritage and natural beauty. Known for its historical significance and vibrant local life, Klungkung offers a unique blend of attractions that make it a must-visit on your day cruise in Bali.</p>

          <h3>Experience</h3>
          <h4>Highlights</h4>
          <ul>
            <li>Your private charter begins with a pickup from your hotel or villa in a private and fully air-conditioned vehicle that whisks you to our start point at Serangan Harbour </li>
            <li>After enjoying either your first dip in one of the islands many palm-lined tropical bays, you can take in the beauty of Nusa Penida’s rugged southern coastlines or go snorkelling with the friendly rainbow-coloured tropical fish</li>
            <li>Your charter includes full use of the boats toys which may include Jet Skies, Stand Up Paddle Board (SUP), Towable Inflatables, Knee Boards, Fun Fishing, Water Skis or Kayaks, depending on which of our private yachts you have chosen. </li>
            <li>Unbelievable sights of natural rock arches rising from the sea at Batu Melawang or swim with the majestic Manta Rays at Nusa Penida’s Manta Point (Seasonal). </li>
          </ul>
          <h4>Full description</h4>
          <p>Our Captain & Crew will ensure you are taken to the best spots at the best times to get the best possible experience and are always on hand to tend to your needs.</p>
          <p> Wherever the wind takes you there is one thing you can always count on and that is the premium treatment from anchor up to anchor down.</p>
          <p> Your private day cruise ends amid picture perfect panoramic scenes as you set sail back to Bali mainland with the sun setting over the sparkling waters. Once back at Serangan, our private air-conditioned vehicles will transport you back to your accommodation. </p>
        </div>
        
      
        <div className='booking-container'>
          <div className='booking-wrapper'>
            <section className='booking-info'>
              <h5>From</h5>
              <p className='price'>Rs.750000 + Tax</p>
              <p className='per-person'>per person</p>
            </section>
            <Link to='/booking'>
            <button type='button' className='btn-book'>Book now</button>
            </Link>
          </div>
        </div>
      
      </div>
      <Footer />
    </>
  );
}
