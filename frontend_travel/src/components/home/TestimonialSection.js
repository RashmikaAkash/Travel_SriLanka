import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Articlee from "../../assets/Articlee.jpg";
import cultural from "../../assets/cultural.jpg";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const testimonials = [
    {
      id: 1,
      name: "Buddhism in Sri Lanka",
      role: "Adventure Enthusiast and World Traveler",
      text: "Buddhism has flourished in Sri Lanka for over two thousand years, making it a central part of the nation's cultural and spiritual identity. The island is dotted with ancient temples, stupas, and sacred sites, each with a rich history of devotion and meditation. From the sacred city of Anuradhapura to the renowned Temple of the Tooth in Kandy, Sri Lanka offers travelers a chance to connect with the deep roots of Buddhism in a peaceful and reflective environment.",
      image: Articlee,
    },
    {
      id: 2,
      name: "Breathtaking Cultural Experience in Sri Lanka",
      role: "Travel Blogger and Explorer",
      text: "Sri Lanka is a treasure trove of culture and history. From the ancient city of Anuradhapura to the iconic Temple of the Tooth in Kandy, every destination is filled with stories and spiritual energy. Walking through centuries-old stupas and meditating under the sacred Bodhi tree was a deeply moving experience. Sri Lanka is truly a haven for those seeking peace, culture, and beauty.",
      image: cultural,
    },
  ];

  // Wrap nextSlide in useCallback to avoid recreating it on every render
  const nextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  }, [isAnimating, testimonials.length]);

  const prevSlide = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setTimeout(() => setIsAnimating(false), 500);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => nextSlide(), 5000);
    return () => clearInterval(timer);
  }, [nextSlide]); // Now nextSlide is stable and can be safely added to the dependency array

  return (
    <div
      style={{
        width: '100%',
        padding: '4rem 1rem',
        background: 'linear-gradient(to bottom right, #f9fafb, #ffffff)',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          position: 'relative',
          overflow: 'hidden',
          borderRadius: '1rem',
          backgroundColor: '#ffffff',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
        }}
      >
        <div
          style={{
            position: 'absolute',
            width: '256px',
            height: '256px',
            borderRadius: '50%',
            filter: 'blur(40px)',
            opacity: '0.2',
            top: '-128px',
            right: '-128px',
            background: '#10b98133',
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: '256px',
            height: '256px',
            borderRadius: '50%',
            filter: 'blur(40px)',
            opacity: '0.2',
            bottom: '-128px',
            left: '-128px',
            background: '#3b82f633',
          }}
        />

        <div style={{ position: 'relative', padding: '3rem 2rem', zIndex: '1' }}>
          <h2
            style={{
              fontSize: '2.5rem',
              fontWeight: 'bold',
              marginBottom: '3rem',
              background: 'linear-gradient(to right, #381b14, #f5dacc)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            What Our Travelers Are Saying
          </h2>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3rem',
            }}
          >
            <div
              style={{
                width: '50%',
                transform: `translateX(${isAnimating ? '-20px' : '0'})`,
                opacity: isAnimating ? 0 : 1,
                transition: 'all 500ms ease-out',
              }}
            >
              <img
                src={testimonials[currentSlide].image}
                alt="Customer"
                style={{
                  width: '100%',
                  borderRadius: '0.5rem',
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  transform: 'scale(1)',
                  transition: 'transform 700ms',
                }}
              />
            </div>

            <div
              style={{
                width: '50%',
                transform: `translateX(${isAnimating ? '20px' : '0'})`,
                opacity: isAnimating ? 0 : 1,
                transition: 'all 500ms ease-out',
              }}
            >
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    position: 'absolute',
                    top: '-1rem',
                    right: '-1rem',
                    width: '3rem',
                    height: '3rem',
                    background: 'linear-gradient(to bottom right, #804831, #381b14)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  "
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: '600',
                      color: '#111827',
                    }}
                  >
                    {testimonials[currentSlide].name}
                  </h4>
                  <p style={{ color: '#6b7280', marginTop: '0.5rem' }}>
                    {testimonials[currentSlide].role}
                  </p>
                </div>
                <p
                  style={{
                    color: '#4b5563',
                    fontSize: '1.125rem',
                    lineHeight: '1.75',
                    marginBottom: '2rem',
                  }}
                >
                  {testimonials[currentSlide].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '1rem',
          maxWidth: '1200px',
          margin: '2rem auto 0',
        }}
      >
        <button
          onClick={prevSlide}
          style={{
            padding: '0.75rem',
            borderRadius: '50%',
            border: '1px solid #e5e7eb',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'all 300ms',
          }}
        >
          <ChevronLeft size={24} color="#4b5563" />
        </button>
        <button
          onClick={nextSlide}
          style={{
            padding: '0.75rem',
            borderRadius: '50%',
            border: '1px solid #e5e7eb',
            backgroundColor: 'transparent',
            cursor: 'pointer',
            transition: 'all 300ms',
          }}
        >
          <ChevronRight size={24} color="#4b5563" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialSection;
