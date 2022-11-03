export const notAuthorized = () => {
  const error = new Error();
  error.message = `User not authorize to access this resource`;
  error.name = "NOT AUTHORIZED";
  error.status = 401;
  return error;
};
