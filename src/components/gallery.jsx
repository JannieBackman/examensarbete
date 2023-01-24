import a from './assets/36.png';
import b from './assets/37.png';
import kiwi from './assets/boost-kiwi.png';
import './gallery.css';

import { React } from 'react';

function ImageGallery() {
  return (
    <div className="container">
      <div className="form"></div>
      <div className="gallery">
        <img src={a} alt="ptonline" width={250} />
        <img src={kiwi} alt="ptonline" width={250} />
        <img src={b} alt="ptonline" width={250} />
      </div>
    </div>
  );
}

export default ImageGallery;
