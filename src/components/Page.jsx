import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet-async';
import { forwardRef, useEffect, useState } from 'react';
// @mui
import { Box, Fab } from '@mui/material';
import { ExpandLessRounded } from '@mui/icons-material';

// ----------------------------------------------------------------------

const Page = forwardRef(({ children, title = '', meta, ...other }, ref) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <Helmet>
        <title>{`${title} - Cafe24`}</title>
        {meta}
      </Helmet>

      <Box ref={ref} {...other}>
        {children}
      </Box>
      {scrollPosition > 10 && (
        <Fab
          size="small"
          color="primary"
          sx={{ position: 'fixed', bottom: 25, right: 25 }}
          onClick={() => document.getElementById('home').scrollIntoView({ behavior: 'smooth' }, true)}
        >
          <ExpandLessRounded />
        </Fab>
      )}
    </>
  );
});

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  meta: PropTypes.node,
};

export default Page;
