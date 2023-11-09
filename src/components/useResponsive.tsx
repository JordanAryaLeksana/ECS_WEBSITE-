import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';

function useResponsive() {
  const [isClient, setIsClient] = useState(false);

  const isOnlyMobile = useMediaQuery({
    maxWidth: '640px',
  });
  const isMobile = useMediaQuery({
    minWidth: '640px',
  });

  const isTablet = useMediaQuery({
    minWidth: '768px',
  });

  const isDesktop = useMediaQuery({
    minWidth: '1024px',
  });

  useEffect(() => {
    if (typeof window !== 'undefined') setIsClient(true);
  }, []);

  return {
    isDesktop: isClient ? isDesktop : true,
    isTablet: isClient ? isTablet : false,
    isMobile: isClient ? isMobile : false,
    isOnlyMobile: isClient ? isOnlyMobile : false,
  };
}

export default useResponsive;
