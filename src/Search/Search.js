import React, { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";

function Search(props) {
    const location = useLocation() 

    const artist = location.state !== undefined ? location.state.artists.artists.find(artist => artist) : JSON.parse(localStorage.getItem('artist'));
    localStorage.setItem('artist', JSON.stringify(artist));

    const artistName = artist.strArtist;
    const artistPhoto = artist.strArtistThumb;

    const releases = location.state !== undefined ? location.state.releases : JSON.parse(localStorage.getItem('releases'));
    localStorage.setItem('releases', JSON.stringify(releases));

  return (
    <Fragment>
      <div className="container">
        <div className="artist--search-results-container">
        <div className="artist--search-results fade-in">
            <div className="artist--search-results-title">
                <h3>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.66542 10.2366L9.19751 8.951L10.4831 10.4831L13.5473 7.91194L14.8328 9.44402L10.2366 13.3007L7.66542 10.2366Z" fill="currentColor" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M16.2071 4.89344C19.0923 7.77862 19.3131 12.3193 16.8693 15.4578C16.8846 15.4713 16.8996 15.4854 16.9143 15.5L21.1569 19.7427C21.5474 20.1332 21.5474 20.7664 21.1569 21.1569C20.7664 21.5474 20.1332 21.5474 19.7427 21.1569L15.5 16.9143C15.4854 16.8996 15.4713 16.8846 15.4578 16.8693C12.3193 19.3131 7.77862 19.0923 4.89344 16.2071C1.76924 13.083 1.76924 8.01763 4.89344 4.89344C8.01763 1.76924 13.083 1.76924 16.2071 4.89344ZM14.7929 14.7929C17.1361 12.4498 17.1361 8.6508 14.7929 6.30765C12.4498 3.96451 8.6508 3.96451 6.30765 6.30765C3.96451 8.6508 3.96451 12.4498 6.30765 14.7929C8.6508 17.1361 12.4498 17.1361 14.7929 14.7929Z" fill="currentColor" />
                    </svg>
                    Search Results
                </h3>
            </div>            
        </div>
        <div className="artist--search-results-right">
          <div className="artist--search-results-right-back">
          <Link
            style={{
              color: "#333",
              textDecoration: "none",
              fontWeight: "bold",
              alignItems: "center",
              display: "flex",
            }}
            to={{
              pathname: "/",
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-arrow-left-short" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M12 8a.5.5 0 0 1-.5.5H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5a.5.5 0 0 1 .5.5z"/>
            </svg>
            Back To Search
          </Link>
        </div>
        <h2>Search Results for <span className="artist--search-results-term">{artistName}</span></h2>
        <div className="results-container">
           <Link className="artist--search-results-link" to={{
              pathname: `/artist/${artist.strArtist.toLowerCase()}`,
               state: {
                artist,
                releases
            } 
           }}>
            <div className="artist--search-results-row">
                <img src={artistPhoto} height="50" width="50" alt="resultsimg" />
                <p>{artistName}</p>
            </div>
           </Link>
        </div>
        </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Search;
