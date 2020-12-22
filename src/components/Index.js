import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import debounce from 'lodash/debounce';

function Index(props) {
  const [term, setSearchTerm] = useState("");
  const [artists, setArtists] = useState([]);
  const [releases, setReleases] = useState("");
  const [fetchInProgress, setfetchInProgress] = useState(false);

  useEffect(() => {
    if (term !== "" && term.length > 1) {
      setfetchInProgress(true);
      axios
        .get(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${term}`)
        .then((res) => {
          setArtists(res.data);
          if(res.data.artists !==null) {
            res.data.artists.map(artist => {
              return axios.get(`https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${ artist.strArtist }`)
                .then(res => setReleases(res.data))
                .catch(err => err)})
          }
          setfetchInProgress(false);
        }).catch(err => console.log(err))

    }
  }, [term]);

  const handleSearch = debounce((e) => {
    setSearchTerm(e.target.value);    
  }, 900);

  const submitSearch = (e) => {
    e.preventDefault();
    if(term) {
      axios({
        method: 'POST',
        url: '/search',
        data: {
          artists: artists,
          releases: releases
        }
      }).then((res) => {
        if(artists) {
          let data = res.data;
          // props.history.push({
          //   pathname: '/search',
          //   state: {
          //     artists,
          //     releases
          //   }
          // })
        }
      }).catch(err => err)
    }
    
  }

  return (
    <Fragment>
      <div className="container">
        <div className="artist--search-hero fade-in">
          <div className="artist--search-header">
            <h1>
              <i className="fas fa-search"></i> Artist Search
            </h1>
          </div>
          <div className="artist--search-box">
            <form>
              <input
                type="text"
                className="artist--search-txt-field"
                autoFocus
                placeholder="Search Mariah Carey Christmas songs..."
                onChange={(e) => {
                  setfetchInProgress(true);
                  handleSearch(e)
                } }
              />
              {fetchInProgress === true ? (
                <div className="dot-flashing"></div>
              ) : (
                ""
              )}
              <div
                className={`artist--search-dropdown ${
                  artists.artists === undefined || artists.artists === null
                    ? "hide"
                    : "show"
                }`}
              >
                <div className="artist--search-dropdown-header">
                  <h3>
                    Results for <span>{term}</span>
                  </h3>
                  <h3>
                    Returned <span>{artists.artists ? artists.artists.length : ''} results</span>
                  </h3>
                </div>

                {artists.artists !== null && artists.artists !== undefined
                  ? artists.artists.map((artist, index) => (
                      <Link
                        key={index}
                        to={{
                          pathname: `/artist/${artist.strArtist.toLowerCase()}`,
                          state: {
                            artist,
                            releases
                          },
                        }}
                        style={{ textDecoration: "none", color: "#1d2861" }}
                      >
                        <div
                          className="artist--search-dropdown-result"
                          style={{
                            padding: "1rem",
                            display: "flex",
                            alignItems: "center",
                            background: "#f7f7f7",
                          }}
                        >
                          <img
                            alt="artist_thumbnail"
                            src={artist.strArtistThumb}
                            width="24"
                            height="24"
                            style={{ borderRadius: "100%" }}
                          />{" "}
                          <span className="artist--search-dropdown-title">
                            {artist.strArtist}
                          </span>
                        </div>
                      </Link>
                    ))
                  : ""}
              </div>
              <button onClick={submitSearch}>Search</button>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Index;
