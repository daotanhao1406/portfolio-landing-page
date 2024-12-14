import { useEffect, useState, RefObject } from 'react';

interface Position {
  top: number;
  left: number;
}

export const useDropdownPosition = (
  buttonRef: RefObject<HTMLButtonElement>,
  dropdownRef: RefObject<HTMLDivElement>,
  isOpen: boolean
) => {
  const [position, setPosition] = useState<Position>({ top: 0, left: 0 });

  useEffect(() => {
    const updatePosition = () => {
      if (!buttonRef.current || !dropdownRef.current || !isOpen) return;

      const buttonRect = buttonRef.current.getBoundingClientRect();
      const dropdownRect = dropdownRef.current.getBoundingClientRect();
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      let left = buttonRect.left;
      let top = buttonRect.bottom + 8;

      // Check if dropdown would overflow right edge
      if (left + dropdownRect.width > viewportWidth) {
        left = viewportWidth - dropdownRect.width - 16;
      }

      // Check if dropdown would overflow bottom edge
      if (top + dropdownRect.height > viewportHeight) {
        top = buttonRect.top - dropdownRect.height - 8;
      }

      // Ensure left is not negative
      left = Math.max(16, left);

      setPosition({ top, left });
    };

    updatePosition();
    window.addEventListener('resize', updatePosition);
    window.addEventListener('scroll', updatePosition);

    return () => {
      window.removeEventListener('resize', updatePosition);
      window.removeEventListener('scroll', updatePosition);
    };
  }, [buttonRef, dropdownRef, isOpen]);

  return position;
};