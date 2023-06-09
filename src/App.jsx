import React from 'react';
import styles from './style';

import { Navbar, Hero, Business, Billing, Clients, CTA, Footer } from "./components";
import { Toaster } from 'react-hot-toast';

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
      <Toaster></Toaster>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Business />
          <Billing />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;