import React from 'react'
import Calender from './Calender';
import pic1 from './image/contributions.png';
import './stats.css'

const Stats = () => {
  return (
    <div className='main'>
      <h1 className='heading'>Statistic</h1>
      <br />
        <img className='image' src="https://github-readme-stats.vercel.app/api/top-langs/?username=akashbhoi2815&layout=compact&show_icons=true&title_color=0087ca&icon_color=0087ca&border_radius=10&hide_border=ture&text_color=808080" alt="" />
            <br />
            <br />
        <img className='image' src="https://github-readme-stats.vercel.app/api?username=akashbhoi2815&show_icons=true&title_color=0087ca&icon_color=0087ca&border_radius=10&hide_border=ture&text_color=808080" alt="" />
            <br />
            <br />
            <img className='image' src="https://github-readme-streak-stats.herokuapp.com/?user=akashbhoi2815&hide_border=true" alt="" />
            <br />  
            <h1 className='heading'>Github Calender</h1>
            <br />
            <div style={{width:"80%",margin:"auto"}}>
              {/* <Calender/> */}
            <img className='img-div' style={{width:"100%"}} src="https://ghchart.rshah.org/akashbhoi2815" alt="" />
            </div>
        
    </div>
  )
} 

export default Stats