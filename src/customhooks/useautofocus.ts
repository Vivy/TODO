import { useRef, useEffect } from 'react';
export const useAutoFocus = () => {
  const elementRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    elementRef.current?.focus();
  }, [elementRef]);
  return elementRef;
};
