import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'next/link';
import SocialNetworkNavigation from './SocialNetworkNavigation';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MemoryRouter location="someLocation" context={{}}>
      <SocialNetworkNavigation
        services={[
          {
            name: 'Linkedin',
            icon: 'linkedin',
            url: 'https://www.linkedin.com/in/alexandre-tozzini/',
          },
          {
            name: 'Github',
            icon: 'github',
            url: 'https://github.com/atozzini',
          },
        ]}
      />
    </MemoryRouter>,
    div,
  );
});
