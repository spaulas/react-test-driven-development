const getTimeStamp = (time: number): string => {
  const [h, m] = new Date(time).toTimeString().split(":");
  return `${h}:${m}`;
};

export { getTimeStamp };
