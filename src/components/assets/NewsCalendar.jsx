import React from "react";

const NewsCalendar = ({ active }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.99935 1.45044C5.45958 1.45044 5.83268 1.82354 5.83268 2.28377V4.78377C5.83268 5.24401 5.45958 5.61711 4.99935 5.61711C4.53912 5.61711 4.16602 5.24401 4.16602 4.78377V2.28377C4.16602 1.82354 4.53912 1.45044 4.99935 1.45044ZM14.9993 1.45044C15.4596 1.45044 15.8327 1.82354 15.8327 2.28377V4.78377C15.8327 5.24401 15.4596 5.61711 14.9993 5.61711C14.5391 5.61711 14.166 5.24401 14.166 4.78377V2.28377C14.166 1.82354 14.5391 1.45044 14.9993 1.45044Z"
          fill={active ? "white" : "white"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.25 5.61719C1.25 4.23648 2.36929 3.11719 3.75 3.11719H16.25C17.6307 3.11719 18.75 4.23648 18.75 5.61719V17.2839C18.75 18.6646 17.6307 19.7839 16.25 19.7839H3.75C2.36929 19.7839 1.25 18.6646 1.25 17.2839V5.61719ZM2.91667 8.11719V17.2839C2.91667 17.7441 3.28977 18.1172 3.75 18.1172H16.25C16.7102 18.1172 17.0833 17.7441 17.0833 17.2839V8.11719H2.91667Z"
          fill={active ? "white" : "white"}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33398 11.4505C8.33398 10.9903 8.70707 10.6172 9.16732 10.6172H13.334C13.7942 10.6172 14.1673 10.9903 14.1673 11.4505C14.1673 11.9108 13.7942 12.2839 13.334 12.2839H9.16732C8.70707 12.2839 8.33398 11.9108 8.33398 11.4505ZM5.83398 11.4505C5.83398 10.9903 6.20708 10.6172 6.66732 10.6172H6.6748C7.13504 10.6172 7.50813 10.9903 7.50813 11.4505C7.50813 11.9108 7.13504 12.2839 6.6748 12.2839H6.66732C6.20708 12.2839 5.83398 11.9108 5.83398 11.4505ZM5.83398 14.7839C5.83398 14.3236 6.20708 13.9505 6.66732 13.9505H10.834C11.2942 13.9505 11.6673 14.3236 11.6673 14.7839C11.6673 15.2441 11.2942 15.6172 10.834 15.6172H6.66732C6.20708 15.6172 5.83398 15.2441 5.83398 14.7839ZM12.4932 14.7839C12.4932 14.3236 12.8662 13.9505 13.3265 13.9505H13.334C13.7942 13.9505 14.1673 14.3236 14.1673 14.7839C14.1673 15.2441 13.7942 15.6172 13.334 15.6172H13.3265C12.8662 15.6172 12.4932 15.2441 12.4932 14.7839Z"
          fill={active ? "#D974F3" : "#6B778C"}
        />
      </svg>
    </div>
  );
};

export default NewsCalendar;