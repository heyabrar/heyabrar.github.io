const defaultProfile = (firstName?: string, lastName?: string) => {
  if (firstName && lastName) {
    return `https://ui-avatars.com/api/name=${firstName}%20${lastName}?background=random`;
  }
  return `https://ui-avatars.com/api/name=${firstName}?background=random`;
};

const handleScrollTo = (ref: any) => {
  window.scrollTo({
    top: ref?.current?.offsetTop,
    behavior: "smooth",
  });
};

export { defaultProfile, handleScrollTo };
