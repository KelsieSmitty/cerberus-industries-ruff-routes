import React, { useState, useEffect } from 'react';
import { Checkbox } from '@mui/material';
import { BiSolidTreeAlt} from 'react-icons/bi';
import { IoMdCafe, IoIosBed} from 'react-icons/io'
import { FaUmbrellaBeach,FaHamburger } from 'react-icons/fa';
import { GiTrail } from 'react-icons/gi'

function Filter({ selectedFilters, onFilterChange  }) {
    
  const [selectedButtons, setSelectedButtons] = useState([]);

  const handleButtonClick = (buttonName) => {
    if (selectedButtons.includes(buttonName)) {
      setSelectedButtons(selectedButtons.filter(btn => btn !== buttonName));
    } else {
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  useEffect(() => {
    console.log('Selected buttons:', selectedButtons);
  }, [selectedButtons]);


  const createButton = (buttonName, icon, label) => {
    const isSelected = selectedButtons.includes(buttonName);
    const buttonClass = isSelected ? 'selected' : '';

    return (
      <button
        key={buttonName}
        onClick={() => handleButtonClick(buttonName)}
        className={`filter-button ${buttonClass}`}
      >
        <span>{icon}</span>
        <p className="label">{label}</p>
      </button>
    );
  };

    return (
        <div className="filter-container"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: '2px solid black',
            padding: '10px',
            minWidth:'200px',
            width: '20%', 
            margin: '10px',
            borderRadius: '10px', 
            backgroundColor: '#ede9e6',
            fontFamily: 'Urbanist'
          }}>
          <label className="filter-label">Filters</label>
          <div className='inline-block m-auto'>
            {createButton('park', <BiSolidTreeAlt />, 'Park')}
            {createButton('beach',  <FaUmbrellaBeach/>, 'Beach')}
            {createButton('hike',  <GiTrail/>, 'Hike')}
            {createButton('cafe', <IoMdCafe/>, 'Cafe')}
            {createButton('restaurant', <FaHamburger/>, 'Restaurant')}
            {createButton('housing', <IoIosBed />, 'Housing')}
          </div>
          <div>
            <p className='filter-sublabel'>Accessibility</p>
            <button className='filter-button2'>Wheelchair accessible</button>
            <button className='filter-button2'>Stroller friendly</button>
          </div>
          <div>
            <p className='filter-sublabel'>Pet Policies</p>
            <button className='filter-button2'>Off leash permitted</button>
            <button className='filter-button2'>Must stay on leash</button>
          </div>
        </div>
      );
}


export default Filter;

