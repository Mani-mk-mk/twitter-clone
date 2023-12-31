import { IconPropTypes } from "../../types/IconPropTypes";

const SubscribeIcon = (props: IconPropTypes) => {
  return (
    <div className={props.color}>
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <g>
          <path d="M16 6c0 2.21-1.79 4-4 4S8 8.21 8 6s1.79-4 4-4 4 1.79 4 4zm-.76 8.57l-3.95.58 2.86 2.78-.68 3.92L17 20l3.53 1.85-.68-3.92 2.86-2.78-3.95-.58L17 11l-1.76 3.57zm-.45-3.09c-.89-.32-1.86-.48-2.89-.48-2.35 0-4.37.85-5.86 2.44-1.48 1.57-2.36 3.8-2.63 6.46l-.11 1.09h8.58l.52-2.49-4.05-4.3 5.59-.99.85-1.73z"></path>
        </g>
      </svg>
    </div>
  );
};

export default SubscribeIcon;
