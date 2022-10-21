import React from 'react'
import pic1 from './image/contributions.png';
import './stats.css'

const Stats = () => {
  return (
    <div>
      <h1 className='heading'>Statistic</h1>
      <br />
        <img className='image' src="https://github-readme-stats.vercel.app/api/top-langs/?username=akashbhoi2815&layout=compact&show_icons=true&title_color=0087ca&icon_color=0087ca&border_radius=10&hide_border=ture&text_color=808080" alt="" />
            <br />
            <br />
        <img className='image' src="https://github-readme-stats.vercel.app/api?username=akashbhoi2815&show_icons=true&title_color=0087ca&icon_color=0087ca&border_radius=10&hide_border=ture&text_color=808080" alt="" />
            <br />
            <br />
            <br />  
            <h1 className='heading'>Github Calender</h1>
            <br />
        <img className='image' src={pic1} alt="" />
    </div>
  )
}

export default Stats