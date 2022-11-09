import { t } from "#translations/index";

export const notAuthorized = (language) => {
  const error = new Error();
  error.message = t("not_authorised_error", language);
  error.name = "NOT AUTHORIZED";
  error.status = 401;
  return error;
};
