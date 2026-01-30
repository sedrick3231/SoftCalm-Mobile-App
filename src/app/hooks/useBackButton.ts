import { useEffect } from 'react';

/**
 * Custom hook to handle native back button (browser/mobile)
 * Calls the provided onBack callback when user clicks back
 */
export function useBackButton(onBack?: () => void) {
  useEffect(() => {
    if (!onBack) return;

    const handleBackButton = (event: PopStateEvent) => {
      event.preventDefault();
      onBack();
    };

    window.addEventListener('popstate', handleBackButton);

    return () => {
      window.removeEventListener('popstate', handleBackButton);
    };
  }, [onBack]);
}
