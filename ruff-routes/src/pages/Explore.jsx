import React, { useState } from 'react';
import Filter from '../components/filter'


function Explore() {
    const [selectedFilters, setSelectedFilters] = useState([]);
    
    const handleFilterChange = (filters) => {
    setSelectedFilters(filters);

};
  return (
    <div>
        <Filter 
        selectedFilters={selectedFilters}
        onFilterChange={handleFilterChange} />
    </div>
  );
}

export default Explore;