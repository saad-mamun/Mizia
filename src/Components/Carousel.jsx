import React from 'react'

const Carousel = () => {
    const slides = [
      { id: 1, image: "https://via.placeholder.com/800x400", caption: "Slide 1" },
      { id: 2, image: "https://via.placeholder.com/800x400", caption: "Slide 2" },
      { id: 3, image: "https://via.placeholder.com/800x400", caption: "Slide 3" },
    ];
  
    const [currentIndex, setCurrentIndex] = useState(0);
  
    const goToNextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };
  
    const goToPrevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };
  
    return (
      <div className="relative w-full max-w-4xl mx-auto">
        <div className="overflow-hidden relative">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute transition-transform duration-700 ease-in-out ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
              style={{ transform: `translateX(${(index - currentIndex) * 100}%)` }}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-64 object-cover"
              />
              <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4">
                {slide.caption}
              </div>
            </div>
          ))}
        </div>
  
        {/* Controls */}
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          ◀
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          ▶
        </button>
      </div>
    );
  };
  
  export default Carousel;