import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter } from 'next/link';
import { IntlProvider } from 'react-intl';

import ResumeAboutMeBlock from './ResumeAboutMeBlock';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <IntlProvider locale="en">
      <MemoryRouter location="someLocation" context={{}}>
        <ResumeAboutMeBlock
          fullName="Tozzini Alexandre"
          headline="Ingénieur full-stack web"
          summary="Ingénieur full-stack web & intervenant / formateur"
          pictureUrl="https://alexandretozzini.com/share.png"
          resumeUrl="https://alexandretozzini.com/static/media/en.6743b0e3.pdf"
        />
      </MemoryRouter>
    </IntlProvider>,
    div,
  );
});
