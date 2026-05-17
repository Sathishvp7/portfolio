export const profileLinks = {
  email: 'sathishvp7@gmail.com',
  phone: '+91 95970 45558',
  phoneTel: 'tel:+919597045558',
  location: 'Chennai, Tamil Nadu, India',
  linkedIn: 'https://www.linkedin.com/in/sathish-anantha-07a119120/',
  github: 'https://github.com/Sathishvp7',
  resume:
    'https://drive.google.com/file/d/1zoVeK15Q-hYg_-LCFMwVIT02iu_i6EgP/view?usp=sharing',
  /** Drop your photo at public/profile.jpg (square, ~400×400 recommended) */
  profileImageLocal: `${process.env.PUBLIC_URL}/profile.jpg`,
  /** Used until profile.jpg exists, or if local file fails to load */
  profileImageFallback: 'https://github.com/Sathishvp7.png',
} as const;
