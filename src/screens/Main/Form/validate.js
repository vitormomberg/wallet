import * as yup from 'yup';

export const validationSchema = yup.object().shape({
  type: yup.string().required('Escolha uma opção'),
  value: yup.number().required('Campo obrigatório'),
  valueMasked: yup.string(),
  date: yup
    .date()
    .default(() => new Date())
    .required('Campo obrigatório'),
});
