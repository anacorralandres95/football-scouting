export const isFieldValid = (name, errors) => {
  return errors && errors[name] ? "error" : "ok";
};
