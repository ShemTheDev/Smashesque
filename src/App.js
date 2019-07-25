import React, { Component } from 'react';
import logo from './logo.png';
import search from './search.svg';
import './App.css';

class App extends Component {

  state = {
    games: []
  }
  componentDidMount() {
    fetch('https://api.airtable.com/v0/appm7yNaBwxKoHFEr/Game%20List?view=Sorted%20view&api_key=keyxdvk2igijIb9Q0')
      .then(res => res.json())
      .then((data) => {
        this.setState({ games: data.records })
      })
      .catch(console.log)
  }

  render() {
    return (
      <div className="container">
        <div className="col-xs-12">
          <img src={logo} className="w-25 m-3" alt="Smashesque"></img>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search a Title, Platform or Tag" aria-label="Search a Title, Platform or Tag" aria-describedby="Search a Title, Platform or Tag"></input>
            <div className="input-group-append">
              <button className="btn btn-outline-secondary" type="button"><img src={search} alt="Search" height="15px"></img></button>
            </div>
          </div>
        </div>
        <div className="row">
        <div className="col w-5 pr-0 border-right">
        <h3 className="bg-dark text-light text-center p-1 m-0">Game list</h3>
        <ul className="p-0">
            {
              this.state.games.map((game) => (
            <li className="mb-0 pr-2 pl-0 border-bottom">
              <div className="row no-gutters">
                <div className="col-auto" width="100px">
                  <img src={game.fields.Image[0].thumbnails.large.url} alt={game.fields.Name} width="100px" ></img>
                </div>
                <div className="col">
                  <div className="">
                    <div className="row no-gutters">
                      <h5 className="pl-3">{game.fields.Name} <small className="text-muted">{game.fields.Type}</small></h5>
                    </div>
                    <p className="pl-3 pb-2 m-0">{game.fields.Description}</p>
                    <div className="row pl-3 no-gutters">
                      <div className="col-auto"><strong>Max Players: </strong>
                        <p className=""><button className="btn btn-outline-danger btn-sm m-1">{game.fields.MaxPlayers} </button></p></div>
                      <div className="col-auto pl-5"><strong>Roster size: </strong>
                        <p className=""><button className="btn btn-outline-danger btn-sm m-1">{game.fields.Roster === 0 ? 'N/A' : game.fields.Roster}</button></p></div>
                      <div className="col-auto pl-5"><strong>Platforms:</strong>
                        <p className="">
                          {game.fields.Platforms.map((element) => (
                            <button className="btn btn-outline-info btn-sm m-1">{element} </button>
                          ))}
                        </p>
                      </div>

                      <div className="col-auto pl-5"><strong>Tags: </strong>
                        <p className="m-0">
                          {game.fields.Tags.map((element) => (
                            <button className="btn btn-outline-success btn-sm m-1">{element} </button>
                          ))}
                        </p>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}

        </ul>
        </div>
        <div className="col-3 pl-0">
            <div className="row no-gutters">
              <div className="col bg-white">
                <h3 className="bg-danger text-light text-center p-1">Featured Content</h3>
                <div className="list-container p-3" id="featured">
                  <ul className= "p-0">
                    <li>
                      
                    </li>
                  </ul>
                  <h6>Smashesque tournament has begun!</h6>
                </div>
              </div>
            </div>
        </div>
        </div>
      </div>

    );

  }
}

export default App;