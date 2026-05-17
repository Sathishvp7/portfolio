import React, { useState } from 'react';
import { profileLinks } from '../profileLinks';

type ProfileAvatarSize = 'sm' | 'md' | 'lg';

const sizeClasses: Record<ProfileAvatarSize, string> = {
  sm: 'w-14 h-14',
  md: 'w-20 h-20',
  lg: 'w-24 h-24',
};

type ProfileAvatarProps = {
  size?: ProfileAvatarSize;
  className?: string;
  showRing?: boolean;
};

const ProfileAvatar: React.FC<ProfileAvatarProps> = ({
  size = 'md',
  className = '',
  showRing = true,
}) => {
  const [src, setSrc] = useState<string>(profileLinks.profileImageLocal);
  const ring = showRing ? 'ring-4 ring-white shadow-md' : 'shadow-sm';

  return (
    <div
      className={`relative inline-flex shrink-0 rounded-full overflow-hidden bg-primary-100 border border-primary-200 ${sizeClasses[size]} ${ring} ${className}`}
    >
      <img
        src={src}
        alt="Sathish Anantharaj"
        className="w-full h-full object-cover"
        onError={() => {
          if (src !== profileLinks.profileImageFallback) {
            setSrc(profileLinks.profileImageFallback);
          }
        }}
      />
    </div>
  );
};

export default ProfileAvatar;
