import { useEffect, useState } from 'react';
import Block from '../Block';
import { FiLoader } from 'react-icons/fi';

const RSSMagazineWidget = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to hide loading after 3 seconds regardless
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Check if script is already loaded
    if (document.querySelector('script[src="https://widget.rss.app/v1/wall.js"]')) {
      // Script already exists, hide loading after short delay
      setTimeout(() => setIsLoading(false), 10000);
      return () => clearTimeout(timeoutId);
    }

    // Create and append the script
    const script = document.createElement('script');
    script.src = 'https://widget.rss.app/v1/wall.js';
    script.type = 'text/javascript';
    script.async = true;
    
    // Hide loading when script loads (or after timeout)
    script.onload = () => {
      setTimeout(() => setIsLoading(false), 1500);
    };

    // Handle script load error
    script.onerror = () => {
      setIsLoading(false);
    };
    
    document.body.appendChild(script);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      const existingScript = document.querySelector('script[src="https://widget.rss.app/v1/wall.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  // Loading animation component
  const LoadingAnimation = () => (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="animate-spin text-4xl"><FiLoader/></div>
    </div>
  );

  return (
    <Block className="w-full col-span-6 rounded-lg border border-zinc-700 p-4 bg-lilac relative">
      {/* Show loading animation while content is loading */}
      {isLoading && <LoadingAnimation />}
      
      {/* RSS App Magazine Widget */}
      <div className={isLoading ? 'opacity-0 absolute w-full' : 'opacity-100 w-full'}>
        <rssapp-wall id="W2fXtEDhBLcj63iz"></rssapp-wall>
      </div>
    </Block>
  );
};

export default RSSMagazineWidget;