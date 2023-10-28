export const formatDate = (dateInput: string) => {
  const date = new Date(dateInput);

  return date.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });
};

export const formatTime = (dateInput: string) => {
  const date = new Date(dateInput);

  return date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });
};
