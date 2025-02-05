import React from "react";

export default function CarouselItem({ imgUrl, title }) {
  return (
    <div className="carousel-card">
      <img src={imgUrl} alt={title}></img>
    </div>
  );
}
