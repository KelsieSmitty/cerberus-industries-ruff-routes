function Filter({ selectedFilters, onFilterChange  }) {
    
    const handleCheckboxChange = (filter) => {
        const updatedFilters = selectedFilters.includes(filter)
          ? selectedFilters.filter((f) => f !== filter)
          : [...selectedFilters, filter];
        onFilterChange(updatedFilters);

        console.log('Selected filters:', updatedFilters);
      };
    return (
        <div className="filter-container"
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            border: '2px solid black',
            padding: '10px',
            width: '200px', 
            position: 'absolute',
            left: '20px', 
            top: '20px', 
            backgroundColor: '#fff', 
          }}>
          <label className="filter-label">Filter</label>
          <div className="filter-checkboxes d-flex flex-column">
            <label>
              <input
                type="checkbox"
                value="play"
                checked={selectedFilters.includes('play')}
                onChange={() => handleCheckboxChange('play')}
              />
              Play
            </label>
            <label>
              <input
                type="checkbox"
                value="eat"
                checked={selectedFilters.includes('eat')}
                onChange={() => handleCheckboxChange('eat')}
              />
              Eat
            </label>
            <label>
              <input
                type="checkbox"
                value="stay"
                checked={selectedFilters.includes('stay')}
                onChange={() => handleCheckboxChange('stay')}
              />
              Stay
            </label>
          </div>
        </div>
      );
}


export default Filter;

