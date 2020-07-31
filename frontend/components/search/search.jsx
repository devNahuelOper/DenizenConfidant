import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleClick() {
    if (!this.state.shown) {
      document.addEventListener('click', this.handleOutsideClick, false);
    } else {
      document.removeEventListener('click', this.handleOutsideClick, false);
    }

    this.setState(prevState => ({
      shown: !prevState.shown
    }));
  }

  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
    }
    this.handleClick();
  }

  render() {
    // const searchbar = document.getElementsByClassName('search-container')[0];
    const search = document.getElementById('search');
    // search.addEventListener('click', this.handleClick);
    return (
      <div className="search-container" 
      ref={node => { this.node = node; }}
      >
      
        {/* {this.state.shown && ()} */}
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