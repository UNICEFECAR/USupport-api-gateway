import { t } from "#translations/index";

export const notAuthorized = (language) => {
  const error = new Error();
  error.message = t("not_authorised_error", language);
  error.name = "NOT AUTHORIZED";
  error.status = 401;
  return error;
};

export const noPermissions = (language) => {
  const error = new Error();
  error.message = t("no_permissions_error", language);
  error.name = "NO PERMISSIONS";
  error.status = 401;
  return error;
};
