import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchDjs } from '../../actions/dj_actions';
import { fetchGenres } from '../../actions/genre_actions';



class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      djs: [],
      genres: [],
      searchTerm: ''
    }
    this.editSearchTerm = this.editSearchTerm.bind(this);
    this.dynamicSearch = this.dynamicSearch.bind(this);
  }

  componentDidMount() {
    this.props.fetchDjs().then(djs => this.setState({ djs: Object.values(djs.djs) }));
    this.props.fetchGenres().then(genres => this.setState({ genres: Object.values(genres.genres)}));    
  }

  editSearchTerm(e) {
    this.setState({searchTerm: e.target.value})
  }

  dynamicSearch(e) {
    // const genreSearch = this.state.genres.filter(genre => genre.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase()));
    return this.state.djs.filter(dj => dj.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())); 
  }

  render() {
    return (
      <div className="search-container">
        <div id="searchbar" >
        <form onSubmit={this.dynamicSearch}>
          <input type="text" id="search-input" 
          value={this.state.searchTerm}
          onChange={this.editSearchTerm}
          placeholder="Type in a DJ"
          />
          <div id="search-button-container">
            <button id="search-button">Submit</button>
          </div>
          <div
            style={this.state.searchTerm.length ? { display: 'block' } : { display: 'none' }}
          >
          <QueryContainer djs = {this.dynamicSearch()}/>
          </div>
          </form>
        </div>
       
      </div>
    )
  }
}

class QueryContainer extends React.Component {
  render() {
    return (
      <div id="query-container">
        {this.props.djs.map(dj => <Query dj= {dj}/>)}
      </div>
    )
  }
}

class Query extends React.Component {
  render() {
    return (
      <Link to={`/djs/${this.props.dj.id}`}>
      <div id="query-item">
       {this.props.dj.name}
      </div>
      </Link >
    )
  }
}

const mapStateToProps = (state) => {
  return {
    djs: Object.values(state.entities.djs),
    genres: Object.values(state.entities.genres)
  }
};

const mapDispatchToProps = dispatch => ({
  fetchDjs: () => dispatch(fetchDjs()),
  fetchGenres: () => dispatch(fetchGenres())
});


export default connect(mapStateToProps, mapDispatchToProps)(Search);