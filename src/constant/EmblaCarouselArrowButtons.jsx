import React, { useCallback, useEffect, useState } from 'react';

export const usePrevNextButtons = (emblaApi) => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on('reInit', onSelect).on('select', onSelect);
  }, [emblaApi, onSelect]);

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick };
};

export const PrevButton = (props) => (
  <button className="embla__button embla__button--prev" type="button" {...props}>
    <svg className="embla__button__svg" viewBox="0 0 532 532">
      <path fill="currentColor" d="M355.66 11.354c13.793-13.805 ... Z"/>
    </svg>
  </button>
);

export const NextButton = (props) => (
  <button className="embla__button embla__button--next" type="button" {...props}>
    <svg className="embla__button__svg" viewBox="0 0 532 532">
      <path fill="currentColor" d="M176.34 520.646c-13.793 13.805 ... Z"/>
    </svg>
  </button>
);
