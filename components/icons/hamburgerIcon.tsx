export const HamburgerIcon = ({ className, onClick }: { className?: string, onClick?: () => void }) => {
    return (
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        onClick={onClick}
      >
        <rect x="1" y="1" width="24" height="24" fill="#4D4D4D" />
        <rect x="0" y="0" width="12" height="12" fill="#4E5356" />
        <rect x="13" y="13" width="12" height="12" fill="#2D2E2F" />
      </svg>
    );
  };
  