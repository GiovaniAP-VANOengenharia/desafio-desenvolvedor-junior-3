export const emailValidate = (email: string) => {
  const emailRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  return emailRegEx.test(email);
};

export const passwordValidate = (password: string) => {
  const minPasswordLength = 6;
  return password.length >= minPasswordLength;
};

export const nameValidate = (name: string) => {
  const minNameLength = 2;
  return name.length >= minNameLength;
};

export const validateLogin = (login: Object) => {
  const { email, password } = login;
  const verifyEmail =  emailValidate(email);
  const verifyPassword =  passwordValidate(password);

  return (verifyEmail && verifyPassword);
};

export const validateRegister = (register: Object) => {
  const { name, email, password } = register;
  const verifyName = nameValidate(name);
  const verifyEmail =  emailValidate(email);
  const verifyPassword =  passwordValidate(password);

  return (verifyName && verifyEmail && verifyPassword);
};