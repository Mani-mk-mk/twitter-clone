import { IconPropTypes } from "../../types/IconPropTypes";

const BookmarkIcon = (props: IconPropTypes) => {
  return (
    <div className={props.color}>
      {props.active ? (
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <g>
            <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5z"></path>
          </g>
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
          <g>
            <path d="M4 4.5C4 3.12 5.119 2 6.5 2h11C18.881 2 20 3.12 20 4.5v18.44l-8-5.71-8 5.71V4.5zM6.5 4c-.276 0-.5.22-.5.5v14.56l6-4.29 6 4.29V4.5c0-.28-.224-.5-.5-.5h-11z"></path>
          </g>
        </svg>
      )}
    </div>
  );
};

export default BookmarkIcon;
