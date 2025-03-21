'use client'
import { cn } from '@/lib/utils';
import React, { ReactNode, useState, useEffect, useRef } from 'react';

// export interface ScrollSliderProps {
//   children: ReactNode;
//   direction?: 'left' | 'right';
//   speed?: number;
//   className?: string;
//   itemClassName?: string;
//   pauseOnHover?: boolean;
//   gap?: number;
// }

/**
 * ScrollSlider - A component that automatically scrolls its children horizontally
 * with configurable direction and speed, pausing on hover.
 */
export const ScrollSlider = ({
  children,
  direction = 'left',
  speed = 20,
  className = '',
  itemClassName = '',
  pauseOnHover = true,
  gap = 4,
}) => {
  const [duplicated, setDuplicated] = useState([]);
  const contentRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [contentWidth, setContentWidth] = useState(0);

  // Calculate animation speed based on content width
  useEffect(() => {
    if (contentRef.current) {
      const observer = new IntersectionObserver(
        (entries) => {
          setIsVisible(entries[0].isIntersecting);
        },
        { threshold: 0 }
      );
      
      observer.observe(contentRef.current);
      
      return () => {
        if (contentRef.current) observer.unobserve(contentRef.current);
      };
    }
  }, []);

  // Duplicate items for continuous scrolling
  useEffect(() => {
    if (React.Children.count(children) > 0) {
      setDuplicated(React.Children.toArray(children));
    }
  }, [children]);

  // Measure content width for responsive animation speed
  useEffect(() => {
    if (contentRef.current) {
      const updateWidth = () => {
        if (contentRef.current) {
          setContentWidth(contentRef.current.scrollWidth);
        }
      };
      
      updateWidth();
      window.addEventListener('resize', updateWidth);
      
      return () => {
        window.removeEventListener('resize', updateWidth);
      };
    }
  }, [duplicated]);

  // Animation direction class
  const animationClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';
  
  // Calculate speed based on content width
  const animationStyle = {
    '--scroll-speed': `${speed}s`,
  } 

  return (
    <div 
      className={cn(
        'scroll-slider relative w-full overflow-hidden',
        pauseOnHover && 'group',
        className
      )}
    >
      {/* Gradient overlays */}
      <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10"></div>
      
      {/* Hover indicator overlay */}
      {pauseOnHover && (
        <div className="scroll-overlay absolute inset-0 bg-black/5 backdrop-blur-[1px] opacity-0 transition-opacity duration-300 pointer-events-none z-5"></div>
      )}
      
      <div 
        className="flex overflow-hidden"
        style={{ margin: 0, padding: 0 }}
      >
        <div
          ref={contentRef}
          className={cn(
            'scroll-content flex whitespace-nowrap',
            animationClass
          )}
          style={animationStyle}
        >
          {duplicated.map((item, index) => (
            <div 
              key={index} 
              className={cn(
                'inline-flex shrink-0',
                itemClassName
              )}
              style={{ marginRight: `${gap}rem` }}
            >
              {item}
            </div>
          ))}
          
          {/* Duplicate items for continuous scroll */}
          {duplicated.map((item, index) => (
            <div 
              key={`dup-${index}`} 
              className={cn(
                'inline-flex shrink-0',
                itemClassName
              )}
              style={{ marginRight: `${gap}rem` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollSlider;