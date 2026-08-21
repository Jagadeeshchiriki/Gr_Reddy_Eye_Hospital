import React, { useEffect } from 'react';
import Header from '../HeaderComponent/header';
import Footer from '../FooterComponent/footer';
import './HomePage.css';

function HomePage() {
  useEffect(() => {
    console.log('HomePage Component');
  }, []);

  return (
    <div className="HomePage">
      <Header />
      <main className="main-content" style={{ padding: '40px 24px', textAlign: 'center' }}>
        <h1 style={{ color: '#0f3443', marginTop: '20px' }}>Welcome to GR Reddy Eye Hospital</h1>
        <p style={{ color: '#555', fontSize: '1.1rem', maxWidth: '600px', margin: '16px auto' }}>
          Providing world-class eye care services with advanced medical technology and experienced specialists.
        </p>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;

