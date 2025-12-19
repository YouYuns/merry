import React, { useRef, useEffect, useState } from "react";

import "./App.css";
import "./css/Cover.css";
import "./css/Gallery.css";
import "./css/Invitation.css";
import "./css/Location.css";
import "./css/Modal.css";
import "./css/Footer.css";
import "./css/Calendar.css";
import "./css/Contact.css";
import "./css/Navigator.css";
import "./css/Scroll.css";
import "./css/Account.css";
import "./css/Modal.css";
import "./css/SurveryModal.css";
import "./css/Rscvp.css";
import "./css/Link.css";
import "./css/Cover.css";

import Cover from "./pages/Cover";
import Invitation from "./pages/Invitation";
import Calendar from "./pages/Calendar";
import Account from "./pages/Account";
import Contact from "./pages/Contact";
import Location from "./pages/Location";
import ImgGallery from "./pages/ImgGallery";
import Scroll from "./pages/Scroll";
import Rsvp from "./pages/Rsvp";
import Link from "./pages/Link";

import Footer from "./components/Footer";
import Navigator from "./components/Navigator";
import Snowfall from "react-snowfall";

function App() {
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`
      );
    };

    setVh();
    window.addEventListener("resize", setVh);

    return () => window.removeEventListener("resize", setVh);
  }, []);
  const [showRsvpModal, setShowRsvpModal] = useState(false);
  const galleryTopRef = useRef<HTMLDivElement>(null);
  const locationRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const rsvpRef = useRef<HTMLDivElement>(null);

  const scrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (!ref.current) return;

    const offset = 80; // 네비게이션 높이만큼 여유
    const top =
      ref.current.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top,
      behavior: "smooth", // 부드럽게 스크롤
    });
  };

  useEffect(() => {
    if (!rsvpRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowRsvpModal(true); // 상태만 변경
          }
        });
      },
      { threshold: 1 }
    );

    observer.observe(rsvpRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Snowfall
        color="pink" // 벚꽃 색상
        snowflakeCount={15} // 개수
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: 9999,
          pointerEvents: "none",
        }}
      />
      <Cover />
      <Navigator
        scrollToGalleryTop={() => scrollTo(galleryTopRef)}
        scrollToLocation={() => scrollTo(locationRef)}
        scrollToGallery={() => scrollTo(galleryRef)}
        scrollToContact={() => scrollTo(contactRef)}
      />
      <div className="main_container">
        <div ref={galleryTopRef} className="section">
          <Scroll />
        </div>
      </div>
      <Invitation />

      <Calendar />
      <div ref={galleryRef} className="section">
        <ImgGallery />
      </div>
      <div ref={locationRef} className="section">
        <Location />
      </div>

      <div ref={contactRef} className="section">
        <Contact />
      </div>

      <div ref={rsvpRef}>
        <Rsvp showModal={showRsvpModal} />
      </div>
      <Account />

      <Link />
      <Footer />
    </div>
  );
}

export default App;
