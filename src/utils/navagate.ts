export const handleNavigate = (url: string, isNewTab?: boolean) => {
  const isBrowser = typeof window !== 'undefined';
  if (!isBrowser) {
    return;
  }
  if (isNewTab) {
    window.open(url);
  } else {
    window.location.href = url;
  }
};
