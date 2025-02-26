"use client"

import { useEffect, useRef, useState } from "react"
import anime from "animejs"
import "./css/Home.css"
import reactLogo from "../img/react-logo.png"
import animeLogo from "../img/anime-logo.png"
import mysqlLogo from "../img/mysql-logo.png"
import { Instagram, Facebook, Linkedin, Info, Github, ChevronLeft, ChevronRight } from "lucide-react"

// At the top of the file, add these imports for background images
import reactBg from "../img/reactbg.png" // You'll need to add these images to your project
import animeBg from "../img/animebg.png"
import mysqlBg from "../img/mysqlbg.png"

const Home = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedCard, setExpandedCard] = useState(null)
  const techCardRefs = useRef([])
  const [currentSlide, setCurrentSlide] = useState(0)
  const sliderInterval = useRef(null)

  // Then update the slides array to use these background images
  const slides = [
    {
      id: 1,
      image: reactLogo,
      title: "React",
      description: "Tworzymy nowoczesne aplikacje internetowe z wykorzystaniem biblioteki React.",
      background: `url(${reactBg}) center/cover no-repeat`,
    },
    {
      id: 2,
      image: animeLogo,
      title: "Anime.js",
      description: "Dodajemy płynne animacje dzięki lekkiej biblioteki Anime.js.",
      background: `url(${animeBg}) center/cover no-repeat`,
    },
    {
      id: 3,
      image: mysqlLogo,
      title: "MySQL",
      description: "Zarządzamy danymi za pomocą wydajnej bazy danych MySQL.",
      background: `url(${mysqlBg}) center/cover no-repeat`,
    },
  ]

  useEffect(() => {
    anime({
      targets: ".content-texts a, .quotationButton",
      translateX: [-200, 0],
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000,
      delay: anime.stagger(100),
    })
  }, [])

  const handleExpand = (cardId) => {
    setExpandedCard((prevCard) => {
      if (prevCard && prevCard === cardId) {
        // Zwijanie
        const cardIndex = techCardRefs.current.findIndex((card) => card.id === cardId)
        anime({
          targets: techCardRefs.current.slice(cardIndex + 1).map((card) => card.ref.current),
          translateY: [10, 0],
          opacity: [0.5, 1],
          duration: 500,
          easing: "easeOutBack",
        })
        return null
      } else {
        // Rozwijanie
        return cardId
      }
    })
  }

  const togglePhoneIcons = (e) => {
    e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1))
  }

  useEffect(() => {
    sliderInterval.current = setInterval(() => {
      nextSlide()
    }, 10000) // Change slide every 10 seconds

    return () => {
      if (sliderInterval.current) {
        clearInterval(sliderInterval.current)
      }
    }
  }, [])

  return (
    <>
      <div className="container">
        <div className="content-first">
          <div className="content-texts">
            <div className="content-text1">
              <a>TWORZENIE</a>
              <a>
                <strong>STRON</strong>
              </a>
              <a id="ty">
                <strong>INTERNETOWYCH</strong>
              </a>
            </div>
            <div className="content-text2">
              <a>
                Zaufaj naszym umiejętnościom i zleć nam projekt.
                <br /> Sumiennie wykonamy stronę wedle twoich preferencji
              </a>
              <div className="quotation">
                <button className="quotationButton">SZYBKA WYCENA</button>
              </div>
            </div>
          </div>
          <div className="social-media">
            <Instagram className="social-media-icon" />
            <Facebook className="social-media-icon" />
            <Linkedin className="social-media-icon" />
            <Github className="social-media-icon" />
          </div>
          <div className={`social-media-on-phone ${isOpen ? "open" : ""}`}>
            <div className="social-media-icons">
              {isOpen && (
                <>
                  <Instagram className="social-media-icon" />
                  <Facebook className="social-media-icon" />
                  <Linkedin className="social-media-icon" />
                  <Github className="social-media-icon" />
                </>
              )}
            </div>
            <Info className="social-media-icon info-icon" onClick={togglePhoneIcons} />
          </div>
        </div>
      </div>

      <div className="technologies">
        <div className="slider-container">
          {/* Slides container */}
          <div className="slider-track" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
            {slides.map((slide) => (
              <div key={slide.id} className="slide">
                <div className="slide-content" style={{ background: slide.background }}>
                  {/* Image section */}
                  <div className="slide-image">
                    <img src={slide.image || "/placeholder.svg"} alt={slide.title} />
                  </div>

                  {/* Text section */}
                  <div className="slide-text">
                    <h2>{slide.title}</h2>
                    <p>{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

      
          {/* Slide indicators */}
          <div className="slider-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`slider-indicator ${currentSlide === index ? "slider-indicator-active" : ""}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

