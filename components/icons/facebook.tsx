type IconProps = {
    className?: string;
  };
  
export const FacebookIcon: React.FC<IconProps> = ({ className = "" }) => {
    return (
      <svg
        className={className}
        viewBox="0 0 48 48"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          fill="#4460A0"
          d="M25.638,48H2.649C1.186,48,0,46.814,0,45.351V2.649C0,1.186,1.186,0,2.649,0h42.702C46.814,0,48,1.186,48,2.649v42.702
            C48,46.814,46.814,48,45.351,48H33.119V29.412h6.239l0.934-7.244h-7.173v-4.625c0-2.097,0.582-3.526,3.59-3.526h3.836v-6.479
            c-0.663-0.088-2.94-0.286-5.589-0.286c-5.53,0-9.316,3.376-9.316,9.576v5.342h-6.255v7.244h6.255V48z"
        />
      </svg>
    );
  };
  