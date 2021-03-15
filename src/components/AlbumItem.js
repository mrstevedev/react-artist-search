import React, { Fragment } from "react";

function AlbumItem({album, index}) {
  return (
    <Fragment>
      <div key={index} className="artist--search-results-row">
          <div className="artist--search-results-row-left">
              <img alt="artist_album" src={album.strAlbumThumb !== null ? 
                album.strAlbumThumb : 
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSADPzrYm_hQg2XMNc_9KTr9Axmn35s0DbsIQ&usqp=CAU'} width="50" height="50" />
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
