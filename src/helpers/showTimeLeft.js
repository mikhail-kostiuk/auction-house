export const showPreciseTimeLeft = time => {
  const days = Math.floor(time / (60 * 60 * 24));
  const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = Math.floor(time % 60);

  if (time <= 0) {
    return "CLOSED";
  } else {
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
};

export const showApproximateTimeLeft = time => {
  const days = Math.floor(time / (60 * 60 * 24));
  const hours = Math.floor((time % (60 * 60 * 24)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);

  if (time <= 0) {
    return "CLOSED";
  } else {
    if (days > 1) {
      return `${days} Days Left`;
    } else if (days === 1) {
      return `${days} Day Left`;
    } else if (hours > 1) {
      return `${hours} Hours Left`;
    } else if (hours === 1) {
      return `${hours} Hour Left`;
    } else if (minutes > 1) {
      return `${minutes} Minutes Left`;
    } else if (minutes === 1) {
      return `${minutes} Minute Left`;
    }
  }
};
