import React from 'react';
import BuildIcon from '@mui/icons-material/Build';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import './KeyPointsTable.css';

const KeyPointsTable = () => {
  return (
    
        <div className='keypointsTableFlexContainer'>
            <div className='carMakesContainer'>
                    <BuildIcon className='wrenchServiceAgentIcons' />
                <h4 className='topMargin'>All Car Makes</h4>
                <p>We give an assortment of fix and support administrations for all vehicle makes and models.</p>
            </div>
            <div className='servicesContainer'>
                <RoomServiceIcon className='wrenchServiceAgentIcons'/>
                <h4 className='topMargin'>Variety of services</h4>
                <p>The main principle of our work is to offer a wide scope of value quality car repair services.</p>
            </div>
            <div className='supportContainer'>
                <SupportAgentIcon className='wrenchServiceAgentIcons'/>
                <h4 className='topMargin'>Quality support</h4>
                <p>We offer quality support programs for any vehicles that allow them to always stay fully functional.</p>
            </div>
        </div>
  )
}

export default KeyPointsTable;