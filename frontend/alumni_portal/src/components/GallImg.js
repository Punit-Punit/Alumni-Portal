import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const GallImg = (props) => {
  const img = props.img;
  const [img2, setImg2] = useState(img);
  const modalRef = useRef(null);
  const imgRef = useRef(null);

  // Update img2 when img prop changes
  useEffect(() => {
    setImg2(img);
  }, [img]);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
    if (imgRef.current) {
      imgRef.current.src = img2;
    }
  };

  return (
    <>
      <button
        className="p-2 transform transition duration-500 hover:scale-110"
        onClick={openModal}
      >
        <img
          className="h-60 w-auto border-2 border-black rounded-lg shadow-lg"
          src={img}
          alt="Gallery"
        />
      </button>
      <dialog ref={modalRef} className="modal">
        <div className="modal-box">
          <Link
            to="/gallery"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={() => modalRef.current.close()}
          >
            ✕
          </Link>
          <img ref={imgRef} className="rounded-lg w-screen" src="" alt="Larger view" />
        </div>
      </dialog>
    </>
  );
};

export default GallImg;
