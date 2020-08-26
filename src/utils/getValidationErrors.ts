import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErrors(err: ValidationError): Errors {
  const validationErrors: Errors = {};

  err.inner.forEach(error => {
    // cria uma posição no array com o nome do erro com o conteúdo de mensagem do erro
    validationErrors[error.path] = error.message;
  });

  return validationErrors;
}
