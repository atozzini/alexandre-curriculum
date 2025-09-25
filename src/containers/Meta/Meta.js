// src/containers/Meta/Meta.js
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export default function Meta({ locale }) {
  const { pathname } = useRouter();
  const mainDomain = 'https://alexandretozzini.com';
  const deDomain = 'https://webエンジニア.com';

  let canonical = locale === 'de' ? deDomain : mainDomain;
  if (pathname !== '/de/rirekisho.html' && pathname !== '/en/resume.html') {
    canonical += pathname;
  }

  return (
    <Head>
      <link rel="canonical" href={canonical} />
      <meta name="google-site-verification" content="-WO5leO82u7tAYgflVya2_d4FlcHvr28LzjUUv4nHpE" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={`${mainDomain}/share.png`} />
    </Head>
  );
}

Meta.propTypes = {
  locale: PropTypes.string.isRequired,
};
