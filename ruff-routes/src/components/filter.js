import React, { useState, useEffect } from 'react';
import { BiSolidTreeAlt} from 'react-icons/bi';
import { IoMdCafe, IoIosBed} from 'react-icons/io'
import { FaUmbrellaBeach,FaHamburger } from 'react-icons/fa';
import { GiTrail } from 'react-icons/gi'
import "../styling/filter.css";


function Filter({ selectedFilters, onFilterChange  }) {
    
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [selectedCheckboxes, setSelectedCheckboxes] = useState([]);


  const handleButtonClick = (buttonName) => {
    if (selectedButtons.includes(buttonName)) {
      setSelectedButtons(selectedButtons.filter(btn => btn !== buttonName));
    } else {
      setSelectedButtons([...selectedButtons, buttonName]);
    }
  };

  const handleCheckboxClick = (checkboxName) => {
    if (selectedCheckboxes.includes(checkboxName)) {
      setSelectedCheckboxes(selectedCheckboxes.filter(checkbox => checkbox !== checkboxName));
    } else {
      setSelectedCheckboxes([...selectedCheckboxes, checkboxName]);
    }
  };

  useEffect(() => {
    console.log('Selected buttons:', selectedButtons);
    console.log('Selected checkboxes:', selectedCheckboxes);
  }, [selectedButtons, selectedCheckboxes]);


  const createButton = (buttonName, icon, label) => {
    const isSelected = selectedButtons.includes(buttonName);
    const buttonClass = isSelected ? 'selected' : '';

    return (
      <button
        key={buttonName}
        onClick={() => handleButtonClick(buttonName)}
        className={`filter-button ${buttonClass}`}
      >
        <span className='icon'>{icon}</span>
        <p className="label">{label}</p>
      </button>
    );
  };

  const createCheckboxButton = (checkboxName, label) => {
    const isChecked = selectedCheckboxes.includes(checkboxName);
    const checkboxClass = isChecked ? 'selected' : '';

    return (
      <button
        key={checkboxName}
        onClick={() => handleCheckboxClick(checkboxName)}
        className={`filter-button2 ${checkboxClass}`}
      >
        {label}
      </button>
    );
  };
  

    return (
        <div className="filter-container"
        style={{
            border: '2px solid black',
            padding: '10px',
            maxWidth: '300px',
            width: '30%',
            margin: '10px',
            borderRadius: '10px', 
            backgroundColor: '#ede9e6',
            fontFamily: 'Urbanist'
          }}>

          <label className="filter-label">Filters</label>
          <div className='categories-btns'>
            {createButton('park', <BiSolidTreeAlt />, 'Park')}
            {createButton('beach',  <FaUmbrellaBeach/>, 'Beach')}
            {createButton('hike',  <GiTrail/>, 'Hike')}
            {createButton('cafe', <IoMdCafe/>, 'Cafe')}
            {createButton('restaurant', <FaHamburger/>, 'Restaurant')}
            {createButton('housing', <IoIosBed />, 'Housing')}
          </div>
          <div className='d-flex flex-column'>
        <p className='filter-sublabel'>Accessibility</p>
        {createCheckboxButton('wheelchair', 'Wheelchair accessible')}
        {createCheckboxButton('stroller', 'Stroller friendly')}
      </div>
      <div className='d-flex flex-column'>
        <p className='filter-sublabel'>Pet Policies</p>
        {createCheckboxButton('off-leash', 'Off leash permitted')}
        {createCheckboxButton('leash', 'Must stay on leash')}
      </div>
        </div>
      );
}


export default Filter;

