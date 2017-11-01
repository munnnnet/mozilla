import React from 'react';

// components
import Hero from '../components/layout/Hero';
import TutorialList from '../components/TutorialList';

// images
import dino from './404/dino2.gif';

const NotFoundPage = () => (
  <div>
    <Hero breadcrumb className="hero--gray">
      <div className="not-found">
        <div className="container">
          <div className="not-found__dino">
            <img src={dino} alt="lost dino" />
          </div>
          <div className="not-found__text">
            <h1>This page has moved!</h1>
            <p className="mt2">
                The page you are looking for doesn't exist, or has moved. Scroll down to find the
                current tutorials & playgrounds that are available.
            </p>
          </div>
        </div>
      </div>
    </Hero>
    <TutorialList />
  </div>
);

export default NotFoundPage;
