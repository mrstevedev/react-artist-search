import React, { Fragment } from "react";

function AlbumItem({album, index}) {
  return (
    <Fragment>
      <div key={index} className="artist--search-results-row">
          <div className="artist--search-results-row-left">
              <img alt="artist_album" src={album.strAlbumThumb !== null ? album.strAlbumThumb : 'http://jbdiamonds.com/media/catalog/new-pp/placeholder/default/no-img-100.jpg'} width="50" height="50" />
        </div>
        <div className="artist--search-results-row-right">
            <h3>{album.strAlbum}</h3>
            <p>{album.intYearReleased}</p>
        </div>
      </div>
    </Fragment>
  );
}

export default AlbumItem;
