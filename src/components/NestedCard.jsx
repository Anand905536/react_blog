import React from 'react'
import icon1 from '../bandplayerzayn.jpg'
import icon2 from '../cricket.webp'
import icon3 from '../flower1.jpg'
import icon4 from '../gym.jpg'
import icon5 from '../politics.jpg'
import icon6 from '../cricket.webp'
import icon7 from '../wildlife.jpg'
import icon8 from '../actor.jpg'
import Cards from './Cards'
import { Link } from 'react-router-dom'



const NestedCard = () => {
  return (
  
         <div className='image'>
       <Link to="/sports"><Cards icon={icon2} text1="Sports" text2=" am trying to pass two argument using props in ImageText component.
I am not sure if it is right method or" /></Link>

        <Link to="/actor"> <Cards icon={icon8} text1="Actor" text2=" am trying to pass two argument using props in ImageText component.
I am not sure if it is right method or" /></Link>
       
       <Link to="/flower">
        <Cards icon={icon3} text1="Flower" text2=" am trying to pass two argument using props in ImageText component.
I am not sure if it is right method or" /></Link>


       <Link to="/gym"> <Cards icon={icon4} text1="Gym" text2=" am trying to pass two argument using props in ImageText component.
I am not sure if it is right method or" /></Link>

        <Link to="/wildlife"><Cards icon={icon7} text1="Wildlife" text2=" am trying to pass two argument using props in ImageText component.
I am not sure if it is right method or" /></Link>

        <Link to="/politics"><Cards icon={icon5} text1="Politics" text2=" am trying to pass two argument using props in ImageText component.
I am not sure if it is right method or" /></Link>

    </div>
  )
}

export default NestedCard