import * as yup from "yup";
export const LoginValidate = yup.object().shape(
  {
    username: yup.string().trim().required('Las credenciales son incorrecta'),
    password: yup.string().trim().required('Las credenciales son incorrecta'),
  }
);