import React from 'react';
import Newsletter from './Newsletter';
import About from './About';
import Card from '@/components/core/card/Card';

function MyApp() {

  return (
    <>
      <div className="notification-container">
       hello
       <About/>
       <Card/>
       <Newsletter/>
      </div>
    </>
  );
}

export default MyApp;