export const apiServerUrl = (resource) =>
  resource ? `http://localhost:8000/${resource}` : "";

export const getRemainingTime = (time) => {
  const now = new Date().getTime();
  const timeleft = new Date(time) - now;

  const days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  const timeStr =
    timeleft > 0
      ? `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`
      : `${days * -1} Days ${hours * -1} Hours Late`;
  return timeStr;
};

export const isLetters = (text) => /^[A-Za-z\s]*$/.test(text);

export const isValidPhone = (text) =>
  text.toString().length === 10 && /(3[0-5]\d{8})/g.test(text.toString());

export const truncate = (string = "", maxLength = 50) =>
  string.length > maxLength ? `${string.substring(0, maxLength)}…` : string;

export const formatTime = (time) => {
  const temp = new Date(time);
  const formatter = Intl.DateTimeFormat("en", {
    timeStyle: "short",
  });
  return formatter.format(temp);
};

export const proposalStatus = {
  ACCEPTED: {
    color: "success",
    text: "Accepted",
  },
  PENDING: {
    color: "primary",
    text: "Pending",
  },
  DECLINED: {
    color: "error",
    text: "Declined",
  },
};

export const requestStatus = {
  OPEN: {
    color: "success",
    text: "Open",
  },
  ACTIVE_ORDER: {
    color: "warning",
    text: "Active Order",
  },
  CLOSED: {
    color: "",
    text: "Closed",
  },
};

export const orderStatus = {
  IN_PROGRESS: {
    color: "primary",
    text: "In Progress",
  },
  DELIVERED: {
    color: "secondary",
    text: "Deliverd",
  },
  PENDING_CANCEL: {
    color: "error",
    text: "Cancellation Requested",
  },
  CANCELLED: {
    color: "error",
    text: "Cancelled",
  },
  COMPLETED: {
    color: "success",
    text: "Completed",
  },
};
