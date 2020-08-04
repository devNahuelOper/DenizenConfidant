# Denizen Confidant
A one-stop shop for all things electronic music!

[Denizen Confidant](https://denizen-confidant.herokuapp.com/?#/)

![image](https://user-images.githubusercontent.com/16979527/89132069-768d7900-d4df-11ea-85df-8d0b2d89b8bb.png)

# Features
* User Authentication: Users can sign up, log in and out, or log in as a demo user.

<img src="https://user-images.githubusercontent.com/16979527/89132424-06342700-d4e2-11ea-9f5a-bc0d3c6dcaa1.png" width="700" height="800">

* Search Functionality: Users can type in a DJ, Genre or Event name in the search bar, and navigate to that show page through the generated link. Each letter typed will update the search dropdown with narrowed-down results.

![image](https://user-images.githubusercontent.com/16979527/89317087-e9673300-d64a-11ea-98f8-7e54984622b6.png)
  
  Process:
  
  After importing entities, mapping state and dispatch to props for each and setting the state of each entity within the Search Component (via componentDidMount), I created a filtering mechanism through which all the entities matching the current search term will be displayed:
    
  ```Javascript
     djSearch() {
      return this.state.djs.filter(dj => dj.name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())); 
     }
  ```
  Next, I create a query container component (displays all results for a given entity) and a query item component:
  
  ```Javascript
  class DjQueryContainer extends React.Component {
  render() {
    return (
      <div id="dj-query-container">
        {this.props.djs.map(dj => <DjQuery dj= {dj}/>)}
      </div>
    )
  }
}
class DjQuery extends React.Component {
  render() {
    return (
      <Link to={`/djs/${this.props.dj.id}`}>
        <div className="query-item" id="dj-query-item">
          <strong>{this.props.dj.name}</strong> <small>DJ</small>
        </div>
      </Link >
    )
  }
}
  ```
  
  Once I've created a query container and query item for each entity, I'm ready to attach these components to the search bar:
  
  ```Javascript
          <input type="text" id="search-input" 
            value={this.state.searchTerm}
            onChange={this.editSearchTerm}
            placeholder="DJs, Genres, Events"
          />
          <div id="search-button-container">
            <button id="search-button">Submit</button>
          </div>
          <div
            style={this.state.searchTerm.length ? { display: 'block' } : { display: 'none' }}
          >
          <ul id="searchlist">
            <li><DjQueryContainer djs = {this.djSearch()}/></li>
            <li><GenreQueryContainer genres = {this.genreSearch()}/></li>
            <li><EventQueryContainer events = {this.eventSearch()}/></li>
          </ul>
          </div>
  ```
  I put all three query containers into an unorganized list, to facilitate in keeping the organized and nicely stacked on top of eachother. The div containing the searchlist has a conditional that the list should only be displayed if there is at least on character typed in the search bar, otherwise the searchlist would already be there before you typed anything in the search bar, and it would be massive since technically all elements start with an empty string!
  
* DJs: 100 DJs in the database, each with their own Show Page (w/ dynamic image & song rendering via Amazon Web Services). 

<img src="https://user-images.githubusercontent.com/16979527/89132121-bc4a4180-d4df-11ea-9811-79917dbfcf42.png" width="700" height="800">

<img src="https://user-images.githubusercontent.com/16979527/89132246-cf114600-d4e0-11ea-9b7d-8613f075ad37.png" width="700" height="800">

* Genres: Users can learn about many of the genres within Electronic Music. Genre show pages contain detailed overview + links to DJ show pages who are part of that genre.

<img src="https://user-images.githubusercontent.com/16979527/89132641-a3dc2600-d4e3-11ea-9487-6fef9aa75ad9.png" width="700" height="800">

<img src="https://user-images.githubusercontent.com/16979527/89132680-ea318500-d4e3-11ea-935f-5e17520bed51.png" width="700" height="800">

* Events: List of some of the world's most popular Electronic Music events, each with their own show page.

<img src="https://user-images.githubusercontent.com/16979527/89133032-83619b00-d4e6-11ea-8c50-d0c31e904dbd.png" width="700" height="800">

<img src="https://user-images.githubusercontent.com/16979527/89133036-8e1c3000-d4e6-11ea-9d53-af7ecd174d25.png" width="700" height="800">

## Frontend
* React.js
* Redux.js
* Javascript
* CSS/SCSS

## Backend
* Ruby on Rails
* PostgreSQL

## Hosting
* Heroku
* AWS (Amazon Web Services)


# Features to be implemented
* search for events in your area
* create an event for others to attend
* search for/upload music









* ...

