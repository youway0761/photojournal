import React from 'react';
import PhotoEntry from './PhotoEntry';
import entries from './data/photo-entries';

class AlbumMaker extends React.Component {

  render() {

    return (
      <div>
        <div className="flex-container">
          {
            entries.itemlist.map((photo) =>
              { return <PhotoEntry key={photo.src} src={photo.src} location={photo.location} caption={photo.caption} /> }
            )
          }
        </div>
      </div>
    )

  }

}

export default AlbumMaker;
