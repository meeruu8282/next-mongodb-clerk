import React, { useState, useEffect } from 'react';
import { fetchFooter } from '../../_api/fetchGlobals';
import FooterComponent from './FooterComponent';
import type { Footer } from '../../../payload/payload-types';

const FooterContainer = () => {
  const [footer, setFooter] = useState<Footer | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedFooter = await fetchFooter();
        setFooter(fetchedFooter);
      } catch (error) {
        setError('Failed to fetch footer data.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return <FooterComponent footer={footer} />;
};

export default FooterContainer;
