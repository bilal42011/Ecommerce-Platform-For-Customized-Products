export const apiServerUrl = (resource) =>
  resource ? `http://localhost:8000/${resource}` : "";

export const getRemainingTime = (time) => {
  var now = new Date().getTime();
  var timeleft = new Date(time) - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  return `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
};

export const isLetters = (text) => /^[A-Za-z\s]*$/.test(text);

export const isValidPhone = (text) =>
  text.length === 10 && /(3[0-4]\d{8})/g.test(text);

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
