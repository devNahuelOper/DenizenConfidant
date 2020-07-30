import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const containerStyle = {
    //   height: '75px',
    //   backgroundColor: 'white',
    //   padding: '20px 0'
    // }
    // const searchStyle = {
    //   width: '960px',
    //   margin: '0 auto'
    // }
    return (
      <div className="search-container" >
        <div id="searchbar" >
          <input type="text" id="search-input"/>
          <div id="search-button-container">
            <button id="search-button">Submit</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;