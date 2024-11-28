import React from "react";

const CompetitionIcon = ({ active }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M7.03737 18.128C6.66009 17.9353 6.5627 17.705 6.6687 17.29C6.78761 16.8253 6.90156 16.3596 7.0112 15.8928C7.1384 15.3523 7.56835 14.9591 8.1341 14.8985C8.30568 14.8802 8.35835 14.8077 8.35736 14.6451C8.35272 13.8392 8.35703 13.0336 8.35239 12.2277C8.35206 12.1558 8.3249 12.0756 8.2868 12.014C7.89031 11.3711 7.49084 10.7298 7.0854 10.0928C7.05559 10.0458 6.97245 10.0137 6.9115 10.0087C6.06088 9.93649 5.26524 9.70264 4.55308 9.21903C3.68556 8.63008 3.10092 7.81259 2.67429 6.87187C2.33477 6.1226 2.12012 5.33723 2.01843 4.52106C1.96875 4.12159 2.19797 3.85693 2.60108 3.8566C3.42322 3.8556 4.24569 3.85626 5.06782 3.85593C5.12711 3.85593 5.18674 3.85593 5.26358 3.85593C5.24669 3.59724 5.22847 3.35676 5.21589 3.11628C5.20727 2.95662 5.20396 2.7963 5.2023 2.63631C5.19734 2.21166 5.40304 2.00132 5.8247 2.00066C6.7906 2 7.75649 2 8.72205 2C10.5985 2.00033 12.4747 2.00166 14.3511 2.00166C14.7741 2.00166 14.9901 2.22524 14.9725 2.6542C14.9566 3.04539 14.9361 3.43625 14.9162 3.85726C14.9821 3.85726 15.0454 3.85726 15.1083 3.85726C15.9252 3.85726 16.742 3.85527 17.5585 3.85825C17.9282 3.85958 18.1703 4.11132 18.1236 4.47701C17.9484 5.84734 17.5105 7.11897 16.6486 8.21802C15.7748 9.33198 14.6161 9.91827 13.2127 10.0319C13.0937 10.0415 13.0282 10.0842 12.9738 10.1899C12.6459 10.8305 12.2458 11.4244 11.8062 11.9935C11.7512 12.065 11.7168 12.1717 11.7161 12.2628C11.7095 13.0631 11.7141 13.8633 11.7112 14.6636C11.7105 14.8127 11.7635 14.8799 11.9198 14.8951C12.5217 14.9541 12.9543 15.3814 13.0752 15.9753C13.1686 16.4337 13.2988 16.8852 13.4167 17.3387C13.5194 17.7335 13.4058 17.9717 13.0318 18.1277H7.03737V18.128ZM6.16853 3.1123C6.23875 3.71714 6.28678 4.29946 6.37655 4.87516C6.7419 7.22132 7.65082 9.34092 9.07052 11.2416C9.11192 11.2969 9.20268 11.3446 9.27125 11.3456C9.7956 11.3535 10.3199 11.3525 10.844 11.3439C10.9079 11.3429 10.9934 11.2989 11.0308 11.2472C11.2633 10.9252 11.4952 10.602 11.7082 10.2671C12.9112 8.37404 13.5972 6.3028 13.8162 4.07455C13.8473 3.75855 13.8559 3.44023 13.8758 3.1123H6.16853ZM10.7174 12.5036H9.41865C9.41865 12.6169 9.41865 12.7156 9.41865 12.8143C9.41865 13.4602 9.42328 14.1058 9.41666 14.7517C9.41037 15.3642 9.03408 15.914 8.49118 15.9846C8.13443 16.0306 8.02777 16.19 7.99034 16.4993C7.96815 16.6809 7.89958 16.8571 7.8499 17.0436H12.2859C12.268 16.9694 12.255 16.9114 12.2405 16.8544C12.1934 16.6732 12.1345 16.494 12.1007 16.3102C12.0609 16.0936 12.0281 16.0469 11.8122 16.0207C11.311 15.9594 10.9751 15.6745 10.8178 15.2131C10.7366 14.975 10.7267 14.7053 10.7217 14.4493C10.7092 13.8047 10.7174 13.1598 10.7174 12.5043V12.5036ZM6.44213 8.79802C6.43617 8.75264 6.43749 8.73476 6.43153 8.72051C5.93567 7.55256 5.5978 6.3389 5.39442 5.08781C5.3772 4.98148 5.33082 4.95498 5.23145 4.95532C4.58057 4.95863 3.92968 4.95697 3.2788 4.95763C3.24203 4.95763 3.20526 4.96625 3.16982 4.97055C3.15227 5.60024 3.80547 7.01629 4.41031 7.66982C4.95917 8.26274 5.62828 8.63671 6.44246 8.79802H6.44213ZM13.6565 8.7702C13.6784 8.77914 13.6887 8.78742 13.6983 8.78643C13.731 8.78345 13.7638 8.77914 13.7956 8.77185C14.4826 8.60955 15.0825 8.28858 15.5787 7.7831C16.3336 7.01397 16.7344 6.06364 16.9742 5.03283C16.9785 5.01395 16.9689 4.99208 16.9639 4.95896C16.899 4.95896 16.8391 4.95896 16.7791 4.95896C16.1726 4.95896 15.5661 4.96691 14.9599 4.95366C14.7794 4.94968 14.7178 4.99937 14.6897 5.17824C14.5237 6.23191 14.2577 7.25975 13.8652 8.25313C13.797 8.42604 13.7264 8.59795 13.6569 8.7702H13.6565Z"
          fill={active ? "white" : "white"}
        />
      </svg>
    </div>
  );
};

export default CompetitionIcon;