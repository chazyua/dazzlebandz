import React, { useState, useCallback } from 'react';
import Carousel, { Modal, ModalGateway } from "react-images";

import Gallery from 'react-photo-gallery'
import './Pics.css';
import { photos } from "./photos";

const Pics = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);
  
    const openLightbox = useCallback((event, { photo, index }) => {
      setCurrentImage(index);
      setViewerIsOpen(true);
    }, []);
  
    const closeLightbox = () => {
      setCurrentImage(0);
      setViewerIsOpen(false);
    };
  
    return (
      <section name="pics">
        <div className="lightBox">
          <p>Gallery</p>
          <h6 className="gallery-sub">Find more on <a href="https://facebook.com/dazzlebandz"><i class="fa fa-facebook" aria-hidden="true"></i></a> and <a href="https://www.instagram.com/nkdazzlebandz/"><i class="fa fa-instagram" aria-hidden="true"></i></a></h6>
          <Gallery photos={photos} onClick={openLightbox} />
          <ModalGateway>
            {viewerIsOpen ? (
              <Modal onClose={closeLightbox}>
                <Carousel
                  currentIndex={currentImage}
                  views={photos.map(x => ({
                    ...x,
                    srcset: x.srcSet,
                    caption: x.title
                  }))}
                />
              </Modal>
            ) : null}
          </ModalGateway>
        </div>
      </section>
    );
};

export default Pics;