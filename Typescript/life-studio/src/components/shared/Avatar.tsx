import {FC} from 'react';

// Assets
import emptyAvatar from '../../assets/img/empty-avatar.jpg';

interface AvatarI {
  src?: string | ArrayBuffer | null
  alt?: string
  size?: number | string
  className?: string
}

const Avatar: FC<AvatarI> = ({
  src,
  alt = 'avatar',
  size = 30,
  className = '',
}) => {
  return (
    <img
      className={`rounded-circle avatar ${className}`}
      style={{
        width: size,
        height: size,
      }}
      // @ts-ignore
      src={src || emptyAvatar}
      alt={alt}
    />
  );
};

export default Avatar;