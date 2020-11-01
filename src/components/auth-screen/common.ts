enum AuthFormKey {
  EMAIL = `email`,
  PASSWORD = `password`,
}

const authFormState = {
  [AuthFormKey.EMAIL]: ``,
  [AuthFormKey.PASSWORD]: ``,
};

export { AuthFormKey, authFormState };
