import b from './assets/b.jpg';
import c from './assets/c.jpg';
import d from './assets/d.jpg';
import e from './assets/e.jpg';
import './gallery.css';
import Form from './form';
import { React, useEffect, useState } from 'react';

function ImageGallery() {
  const [isMobile, setIsMobile] = useState(
    window.matchMedia('(max-width: 790px)').matches
  );
  useEffect(() => {
    window
      .matchMedia('(max-width: 790px)')
      .addEventListener('change', (e) => setIsMobile(e.matches));
  }, []);

  return (
    <div className="container">
      <div className="form">
        <Form />
      </div>
      <div className="gallery">
        <img src={b} alt="ptonline" width={250} />
        <img src={b} alt="ptonline" width={250} />
        <img src={c} alt="ptonline" width={250} />
      </div>
    </div>
  );
}

export default ImageGallery;