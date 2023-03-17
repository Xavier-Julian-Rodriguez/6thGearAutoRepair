import React from 'react';
import Button from '@mui/material/Button';
import './Hero.css';

const Hero = () => {
  return (
    <div className='heroFlexParent'>
        <div className='heroSideAFlexParent'>
            <div>
                <h1 style={{'color': '#ffffff', 'letterSpacing': '1px', 'fontSize': '3em', 'marginBottom': '0'}}>Having Car Trouble? Bring Your Automobile to 6th Gear Repair Shop Today. </h1>
            </div>
            <div>
                <p style={{'color': '#ffffff', 'letterSpacing': '.5px', 'marginTop': '12px', 'marginBottom': '12px'}}>We value your time and trust, so we'll take your vehicle in, make the necessary repairs, and get you back out on the road FAST.</p>
            </div>
            <div>
                <Button className='contactButton' variant="contained">Contact Now</Button>
            </div>
            <div className='sideAStatsContainer'>
                <div className='experiencedTechContainer'>
                    <h3>125</h3>
                    <p>Experienced Technicians</p>
                </div>
                <div className='projectsCompletedContainer'>
                    <h3>3000+</h3>
                    <p>Projects Completed</p>
                </div>
            </div>
        </div>
        <div className='heroSideBFlexParent'>
            <div className='heroImageContainer'>
                <img src='/Images/carRepairMan.jpg' alt='technician repairing a vehicle' className='heroImage' />
            </div>
            <div className='boxContainer'>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Hero;