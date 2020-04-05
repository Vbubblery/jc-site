import { useState, createRef } from 'react';
import { createPopper } from '@popperjs/core';
import PropTypes from 'prop-types';

const Tooltip = ({ children, text, placement }: any) => {
  const [tooltipShow, setTooltipShow] = useState(false);
  const divRef: any = createRef();
  const tooltipRef: any = createRef();
  const openLeftTooltip = () => {
    createPopper(divRef.current, tooltipRef.current, {
      placement: placement ?? 'bottom',
    });
    setTooltipShow(true);
  };
  const closeLeftTooltip = () => {
    setTooltipShow(false);
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full text-center">
          <div
            className={'cursor-pointer'}
            onMouseEnter={openLeftTooltip}
            onMouseLeave={closeLeftTooltip}
            ref={divRef}
          >
            {children}
          </div>
          <div
            className={
              (tooltipShow ? '' : 'hidden ') +
              'bg-black opacity-75 border-0 mt-3 block z-50 max-w-xs text-left no-underline break-words rounded-lg'
            }
            ref={tooltipRef}
          >
            <div>
              <div className="text-white font-bold text-xs p-3">{text}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
export default Tooltip;
