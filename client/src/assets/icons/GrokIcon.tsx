import { IconPropTypes } from "../../types/IconPropTypes";

const GrokIcon = (props: IconPropTypes) => {
  return (
    <div className={props.color}>
      <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
        <g>
          <g clip-path="url(#0-clip0_2592_269)" clip-rule="evenodd">
            <path d="M4.2 4.2v15.6h15.6V4.2H4.2zM3 2h18c.552 0 1 .448 1 1v18c0 .552-.448 1-1 1H3c-.552 0-1-.448-1-1V3c0-.552.448-1 1-1z"></path>
            <path d="M6.68 17.8l8.108-11.58h2.532L9.21 17.8H6.68z"></path>
          </g>
          <defs>
            <clipPath id="0-clip0_2592_269">
              <rect height="20" rx="1" width="20" x="2" y="2"></rect>
            </clipPath>
          </defs>
        </g>
      </svg>
    </div>
  );
};

export default GrokIcon;
