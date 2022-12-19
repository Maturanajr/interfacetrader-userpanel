import './Carousel.css'

export default function Carousell(Screen1,Screen2) {
  return (
    <div className="carousel">
      <div className="carousel-container">
        <div className="carousel-inner" >
          <div className="carousel-item"><Screen1/></div>
          <div className="carousel-item"><Screen2/></div>
        </div>
      </div>
    </div>
  )
}
