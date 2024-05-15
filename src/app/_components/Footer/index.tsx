import React from 'react';
import FooterComponent from './FooterComponent';
import { fetchFooter } from '../../_api/fetchGlobals';
import type { Footer } from '../../../payload/payload-types';

interface FooterProps {
  footer: Footer | null;
}

const FooterPage = ({ footer }: FooterProps) => {
  return <FooterComponent footer={footer} />;
};

export async function getStaticProps() {
  let footer: Footer | null = null;

  try {
    footer = await fetchFooter();
  } catch (error) {
    console.error('Failed to fetch footer data:', error);
  }

  return {
    props: {
      footer,
    },
  };
}

export default FooterPage;
