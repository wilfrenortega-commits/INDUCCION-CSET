import React, { useState } from 'react';

export const SENA_ESCUDO_URL = 'https://www.sena.edu.co/assets/escudo-CKAC4aSg.png';
export const SENA_ESCUDO_FALLBACK = '/src/assets/images/sena_escudo.png';

interface SenaEscudoProps {
  className?: string;
  alt?: string;
  priority?: boolean;
}

export const SenaEscudo: React.FC<SenaEscudoProps> = ({
  className = "w-20 h-20 object-contain",
  alt = "Escudo Oficial del SENA",
  priority = false
}) => {
  const [imgSrc, setImgSrc] = useState<string>(SENA_ESCUDO_URL);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError) {
      setHasError(true);
      setImgSrc(SENA_ESCUDO_FALLBACK);
    }
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      loading={priority ? "eager" : "lazy"}
      referrerPolicy="no-referrer"
      className={className}
    />
  );
};
