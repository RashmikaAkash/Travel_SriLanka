import React, { useState, useEffect } from 'react';
import { Send, Crosshair, Settings, Car, Bell, Target, Shield } from 'lucide-react';
import police from "../../assets/police.jpg";

const UXUISection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '6rem 2rem',
    minHeight: '100vh',
    width: '100%',
    background: `linear-gradient(135deg, #804831, rgba(0, 0, 0, 0.7)), url(${police})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    color: 'white',
    position: 'relative',
    overflow: 'hidden',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
  };

  const glowEffectStyle = {
    position: 'absolute',
    width: '150%',
    height: '150%',
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)',
    top: '-25%',
    left: '-25%',
    transform: 'rotate(0deg)',
    animation: 'rotate 20s linear infinite',
    pointerEvents: 'none'
  };

  const headerStyle = {
    textAlign: 'center',
    marginBottom: '5rem',
    position: 'relative',
    zIndex: 2
  };

  const titleStyle = {
    fontSize: '3.5rem',
    fontWeight: '800',
    marginBottom: '1.5rem',
    letterSpacing: '3px',
    background: 'linear-gradient(45deg, #fff, #e0e0e0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 30px rgba(255,255,255,0.1)'
  };

  const subtitleStyle = {
    fontSize: '1.2rem',
    opacity: '0.9',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.8',
    color: '#e0e0e0'
  };

  const featuresContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '3rem',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    margin: '0 auto',
    position: 'relative',
    zIndex: 2
  };

  const FeatureItem = ({ icon: Icon, text, delay }) => {
    const [isHovered, setIsHovered] = useState(false);

    const featureItemStyle = {
      backgroundColor: 'rgba(255, 255, 255, 0.05)',
      borderRadius: '50%',
      padding: '3rem',
      width: '240px',
      height: '240px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      boxShadow: isHovered
        ? '0 20px 40px rgba(0, 0, 0, 0.2)'
        : '0 8px 32px rgba(0, 0, 0, 0.1)',
      cursor: 'pointer',
      overflow: 'hidden',
      opacity: isVisible ? 1 : 0,
      transform: `scale(${isHovered ? 1.05 : 1}) translateY(${isVisible ? 0 : '50px'})`,
      transition: `all 0.4s ease-out`,
      transitionDelay: `${delay}ms`
    };

    const iconStyle = {
      transform: `translateY(${isHovered ? -5 : 0}px)`,
      transition: 'transform 0.3s ease-out'
    };

    const textStyle = {
      fontSize: '1.1rem',
      marginTop: '1.5rem',
      opacity: '0.9',
      maxWidth: '180px',
      lineHeight: '1.6'
    };

    return (
      <div
        style={featureItemStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div style={iconStyle}>
          <Icon size={40} color="white" strokeWidth={1.5} />
        </div>
        <p style={textStyle}>{text}</p>
      </div>
    );
  };

  return (
    <div style={containerStyle}>
      <div style={glowEffectStyle} />
      <div style={headerStyle}>
        <h1 style={titleStyle}>Sri Lankan security departments</h1>
        <p style={subtitleStyle}>
        The Sri Lankan security department encompasses various agencies and organizations responsible for ensuring the safety and security of the country, its citizens, and national interests.
        </p>
      </div>

      <div style={featuresContainerStyle}>
        <FeatureItem icon={Crosshair} text="Sri Lanka Army" delay={200} />
        <FeatureItem icon={Target} text="Sri Lanka Intelligence Services" delay={400} />
        <FeatureItem icon={Shield} text="Sri Lanka Police" delay={600} />
      </div>
    </div>
  );
};

export default UXUISection;
