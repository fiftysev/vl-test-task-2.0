const formatDateLong = (date: string) => {
  const formatter = Intl.DateTimeFormat('ru', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });

  return formatter.format(Date.parse(date));
};

const formatDateShort = (date: string) => {
  const formatter = Intl.DateTimeFormat('ru', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric'
  });

  return formatter.format(Date.parse(date));
};

export const dateFormatter = {
  formatDateLong,
  formatDateShort
};
