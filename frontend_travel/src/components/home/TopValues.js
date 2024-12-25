import React from 'react';
import { Globe, Compass, Calendar, Plane } from 'lucide-react';

const ValueCard = ({ icon: Icon, title }) => (
  <div style={{
    background: 'white',
    padding: '1.5rem',
    borderRadius: '0.5rem',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    gap: '1rem',
    transition: 'box-shadow 0.3s',
    cursor: 'pointer'
  }}
  onMouseOver={(e) => e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)'}
  onMouseOut={(e) => e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)'}
  >
    <div style={{
      padding: '0.75rem',
      backgroundColor: '#80E97A',
      borderRadius: '9999px'
    }}>
      <Icon style={{ width: '1.5rem', height: '1.5rem', color: '#4b5563' }} />
    </div>
    <h3 style={{
      fontSize: '1.125rem',
      fontWeight: 600,
      
    }}>{title}</h3>
    <p style={{
      color: '#4b5563',
      fontSize: '0.875rem'
    }}>Lorem ipsum is simply dummy text of the printing and typesetting industry.</p>
  </div>
);

const TopValues = () => {
  const values = [
    { icon: Globe, title: 'Lot Of Choices' },
    { icon: Compass, title: 'Good guide' },
    { icon: Calendar, title: 'Easy Booking' },
    { icon: Plane, title: 'Best flight' }
  ];

  return (
    <div style={{
      maxWidth: '72rem',
      margin: '0 auto',
      padding: '3rem 1rem'
    }}>
      <div style={{
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <p style={{
          color: '#80E97A',
          fontSize: '0.875rem',
          fontWeight: 500,
          marginBottom: '0.5rem'
        }}>WHAT WE SERVE</p>
        <h2 style={{
          fontSize: '1.875rem',
          fontWeight: 700,
          color: '#4CAF50'
        }}>Our Top Values</h2>
      </div>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        gap: '1.5rem'
      }}>
        {values.map((value) => (
          <ValueCard key={value.title} {...value} />
        ))}
      </div>
    </div>
  );
};

export default TopValues;