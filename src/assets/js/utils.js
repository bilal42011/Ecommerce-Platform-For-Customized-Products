export const apiServerUrl = (resource) =>
  resource ? `http://localhost:8000/${resource}` : "";

export const statusColors = {
  ACCEPTED: "success",
  PENDING: "primary",
  DECLINDED: "error",
};
