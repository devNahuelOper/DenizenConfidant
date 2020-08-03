import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDjs } from '../../actions/dj_actions';

// const str = "";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      djs: [],
      searchTerm: '',
      resId: 0
    }
    this.editSearchTerm = this.editSearchTerm.bind(this);
    this.dynamicSearch = this.dynamicSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchDjs().then(djs => this.setState({ djs: Object.values(djs.djs) }));
  }

  componentWillUnmount() {
    const query = document.getElementById('query');
    query.style.display = 'none';
  }



  editSearchTerm(e) {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch(e) {
    // const searchbar = document.getElementsByClassName('search-container')[0];
    const query = document.getElementById('query');
    let result = this.state.djs.find(dj => dj.name.toLowerCase() === (this.state.searchTerm.toLowerCase()));
    e.preventDefault();
    if (this.state.djs.find(dj => dj.name.toLowerCase() === (this.state.searchTerm.toLowerCase()))) {
      query.style.display = 'block';
      this.setState({ resId: result.id });
    } else {
      query.style.display = 'none';
    }
    // return this.state.djs.filter(dj => dj.name.toLowerCase().includes(this.state.searchTerm.toLowerCase()));
    // return this.state.names.filter(name => name.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
  }

  render() {
    // const searchbar = document.getElementsByClassName('search-container')[0];
    const search = document.getElementById('search');
    const query = document.getElementById('query');
    return (
      <div className="search-container">
      
        <div id="searchbar" >
        <form onSubmit={this.dynamicSearch}>
          <input type="text" id="search-input" 
          value={this.state.searchTerm}
          onChange={this.editSearchTerm}
          placeholder="Search Functionality Under Construction"
          />
          <div id="search-button-container">
            <button id="search-button">Submit</button>
          </div>
            <div id="query">
              <Link id="search-link" to={`/djs/${this.state.resId}`}>{this.state.searchTerm}</Link>
            </div>
          </form>
        </div>
       
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    djs: Object.values(state.entities.djs)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDjs: () => dispatch(fetchDjs())
})


export default connect(mapStateToProps, mapDispatchToProps)(Search);