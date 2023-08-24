import React,{useEffect,useState} from 'react';

export default function Slideshow(props) {

var colors1 = ["#0088FE", "#00C49F", "#FFBB28"];

var colors = props.imag && props.imag.length > 0 ? props.imag : props.imag2;
const delay = 25000000000000000000;

const Slides = props.imag && props.imag.length > 0 ? props.imag : props.imag2;


  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

//   console.log("nnnnnnnnnnn", props.imag);
//   console.log("colors", colors);
const [touchPosition, setTouchPosition] = useState(null)

  const handleTouchStart = (e) => {
      const touchDown = e.touches[0].clientX
      setTouchPosition(touchDown)
  }
  
  const handleTouchMove = (e) => {
    const touchDown = touchPosition
  
    if(touchDown === null) {
        return
    }
  
    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;
  
    if (diff > 5) {
      setIndex((prevIndex) =>
      prevIndex === Slides.length - 1 ? 0 : prevIndex + 1
    )
    }
  
    if (diff < -5) {
      setIndex((prevIndex) =>
      prevIndex === Slides.length - 1 ? 0 : prevIndex - 1
    )
    }
  
    setTouchPosition(null)
  }
  return (
    // <div className="slideshow" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
    <div className="slideshow" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove}>
      <div
        className="slideshowSlider"
        // style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        style={{ transform: `translate3d(${index < 0? 0 * 100 : -index * 100}%, 0, 0)` }}
        // onTouchStart={handleTouchStart}
        //  onTouchMove={handleTouchMove}
      >
        {colors?.map((imag, index) => (
          <div
            className="slide"
            key={index}
          >
            <img src={imag} className={index}/>
          </div>
        ))}
        
      </div>

      <div className="slideshowDots dots-slide">
        {colors?.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>

      {/* <div className="WishListButton single-wish">
                <button className={(index===-1 ? '' : 'selected')} ></button>
              </div> */}

    </div>
  );
}

