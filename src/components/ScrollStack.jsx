import { useLayoutEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
  <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
  children,
  className = '',
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = '20%',
  scaleEndPosition = '10%',
  baseScale = 0.85,
  scaleDuration = 0.5,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = false,
  onStackComplete
}) => {
  const scrollerRef = useRef(null);
  const stackCompletedRef = useRef(false);
  const animationFrameRef = useRef(null);
  const lenisRef = useRef(null);
  const cardsRef = useRef([]);
  // Cache static document-relative offsets — never use getBoundingClientRect mid-animation
  const cardOffsetsRef = useRef([]);
  const endOffsetRef = useRef(0);
  const lastTransformsRef = useRef(new Map());

  const parsePercentage = useCallback((value, containerHeight) => {
    if (typeof value === 'string' && value.includes('%')) {
      return (parseFloat(value) / 100) * containerHeight;
    }
    return parseFloat(value);
  }, []);

  // Walk offsetParent chain to get document-relative top (not viewport-relative)
  const getDocumentTop = (el) => {
    let top = 0;
    while (el) {
      top += el.offsetTop;
      el = el.offsetParent;
    }
    return top;
  };

  // Measure and cache all static positions — call once at init and on resize
  const measureOffsets = useCallback(() => {
    if (useWindowScroll) {
      cardOffsetsRef.current = cardsRef.current.map(getDocumentTop);
      const endEl = document.querySelector('.scroll-stack-end');
      endOffsetRef.current = endEl ? getDocumentTop(endEl) : 0;
    } else {
      cardOffsetsRef.current = cardsRef.current.map(card => card.offsetTop);
      const endEl = scrollerRef.current?.querySelector('.scroll-stack-end');
      endOffsetRef.current = endEl ? endEl.offsetTop : 0;
    }
  }, [useWindowScroll]);

  const updateCardTransforms = useCallback((scrollTop) => {
    if (!cardsRef.current.length) return;

    const containerHeight = useWindowScroll
      ? window.innerHeight
      : (scrollerRef.current?.clientHeight ?? 0);
    const stackPositionPx = parsePercentage(stackPosition, containerHeight);
    const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
    const endElementTop = endOffsetRef.current;

    cardsRef.current.forEach((card, i) => {
      if (!card) return;

      const cardTop = cardOffsetsRef.current[i] ?? 0;
      const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
      const triggerEnd = cardTop - scaleEndPositionPx;
      const pinStart = triggerStart;
      const pinEnd = endElementTop - containerHeight / 2;

      // Scale progress
      const scaleProgress = scrollTop <= triggerStart ? 0
        : scrollTop >= triggerEnd ? 1
        : (scrollTop - triggerStart) / (triggerEnd - triggerStart);
      const targetScale = baseScale + i * itemScale;
      const scale = 1 - scaleProgress * (1 - targetScale);

      // Rotation
      const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

      // Blur
      let blur = 0;
      if (blurAmount) {
        let topCardIndex = 0;
        for (let j = 0; j < cardsRef.current.length; j++) {
          const jCardTop = cardOffsetsRef.current[j] ?? 0;
          const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
          if (scrollTop >= jTriggerStart) topCardIndex = j;
        }
        if (i < topCardIndex) {
          blur = Math.max(0, (topCardIndex - i) * blurAmount);
        }
      }

      // Pin translateY — integer pixels only to eliminate sub-pixel jitter
      let translateY = 0;
      if (scrollTop >= pinStart && scrollTop <= pinEnd) {
        translateY = Math.round(scrollTop - cardTop + stackPositionPx + itemStackDistance * i);
      } else if (scrollTop > pinEnd) {
        translateY = Math.round(pinEnd - cardTop + stackPositionPx + itemStackDistance * i);
      }

      const roundedScale = Math.round(scale * 10000) / 10000;
      const roundedBlur = Math.round(blur * 10) / 10;

      const last = lastTransformsRef.current.get(i);
      const changed =
        !last ||
        last.translateY !== translateY ||
        Math.abs(last.scale - roundedScale) > 0.0005 ||
        last.blur !== roundedBlur;

      if (changed) {
        const rot = rotation ? ` rotate(${Math.round(rotation * 100) / 100}deg)` : '';
        card.style.transform = `translate3d(0, ${translateY}px, 0) scale(${roundedScale})${rot}`;
        if (blurAmount) card.style.filter = roundedBlur > 0 ? `blur(${roundedBlur}px)` : '';
        lastTransformsRef.current.set(i, { translateY, scale: roundedScale, blur: roundedBlur });
      }

      // Stack complete callback
      if (i === cardsRef.current.length - 1) {
        const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isInView && !stackCompletedRef.current) {
          stackCompletedRef.current = true;
          onStackComplete?.();
        } else if (!isInView && stackCompletedRef.current) {
          stackCompletedRef.current = false;
        }
      }
    });
  }, [
    itemScale, itemStackDistance, stackPosition, scaleEndPosition,
    baseScale, rotationAmount, blurAmount, useWindowScroll, onStackComplete,
    parsePercentage
  ]);

  useLayoutEffect(() => {
    const scroller = scrollerRef.current;
    if (!scroller) return;

    const cards = Array.from(
      useWindowScroll
        ? document.querySelectorAll('.scroll-stack-card')
        : scroller.querySelectorAll('.scroll-stack-card')
    );

    cardsRef.current = cards;

    cards.forEach((card, i) => {
      if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
      card.style.willChange = 'transform';
      card.style.transformOrigin = 'top center';
      card.style.backfaceVisibility = 'hidden';
    });

    // Measure static offsets after layout
    measureOffsets();

    // Shared scroll position — written by Lenis event, read by RAF
    const scrollRef = { current: useWindowScroll ? window.scrollY : scroller.scrollTop };

    // Setup Lenis
    let lenis;
    if (useWindowScroll) {
      lenis = new Lenis({
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
      });
    } else {
      lenis = new Lenis({
        wrapper: scroller,
        content: scroller.querySelector('.scroll-stack-inner'),
        duration: 1.2,
        easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 2,
        infinite: false,
        normalizeWheel: true,
        wheelMultiplier: 1,
        lerp: 0.1,
        syncTouch: true,
        syncTouchLerp: 0.075,
      });
    }

    // Lenis scroll event only updates scrollRef — no DOM writes here
    lenis.on('scroll', ({ scroll }) => {
      scrollRef.current = scroll;
    });

    lenisRef.current = lenis;

    // Single RAF loop: tick Lenis, then update transforms once per frame
    const raf = time => {
      lenis.raf(time);
      updateCardTransforms(Math.round(scrollRef.current));
      animationFrameRef.current = requestAnimationFrame(raf);
    };
    animationFrameRef.current = requestAnimationFrame(raf);

    // Re-measure on resize
    const handleResize = () => {
      measureOffsets();
      lastTransformsRef.current.clear();
    };
    window.addEventListener('resize', handleResize, { passive: true });

    // Initial render pass
    updateCardTransforms(Math.round(scrollRef.current));

    return () => {
      cancelAnimationFrame(animationFrameRef.current);
      lenis.destroy();
      window.removeEventListener('resize', handleResize);
      stackCompletedRef.current = false;
      cardsRef.current = [];
      cardOffsetsRef.current = [];
      lastTransformsRef.current.clear();
    };
  }, [
    itemDistance, itemScale, itemStackDistance, stackPosition, scaleEndPosition,
    baseScale, scaleDuration, rotationAmount, blurAmount, useWindowScroll,
    onStackComplete, measureOffsets, updateCardTransforms
  ]);

  return (
    <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
      <div className="scroll-stack-inner">
        {children}
        <div className="scroll-stack-end" />
      </div>
    </div>
  );
};

export default ScrollStack;