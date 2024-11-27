import { useState, useEffect } from 'react';
import React from 'react';
import styles from '../../styles/Component Styles/BackToTop.module.css'; // Import the CSS for styling
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"; // Import the up arrow icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const BackToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
  
    useEffect(() => {
      const toggleVisibility = () => setIsVisible(window.scrollY > 300);
      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
  
    return (
      isVisible && (
        <button
          className={styles.backToTopButton}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '20px', color: 'white' }} />
        </button>
      )
    );
  };
  
  export default BackToTop;
