export const parseError = (error) =>
  (
    error.response?.data || {
      status: false,
      message: "Unexpected error",
      errors: [],
    }
  ).message;
