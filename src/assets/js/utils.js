export const apiServerUrl = (resource) =>
  resource ? `http://localhost:8000/${resource}` : "";
