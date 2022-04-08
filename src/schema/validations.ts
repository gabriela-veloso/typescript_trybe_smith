import { Products, Users } from '../interfaces';

const errorCodes = {
  badRequest: 400,
  unproceEntity: 422,
};

const errorMessages = {
  requiredName: { error: 'Name is required' },
  requiredAmount: { error: 'Amount is required' },
  requiredUserName: { error: 'Username is required' },
  requiredClasse: { error: 'Classe is required' },
  requiredLevel: { error: 'Level is required' },
  requiredPassword: { error: 'Password is required' },
  stringName: { error: 'Name must be a string' },
  stringAmount: { error: 'Amount must be a string' },
  stringUserName: { error: 'Username must be a string' },
  stringClasse: { error: 'Classe must be a string' },
  stringPassword: { error: 'Password must be a string' },
  numberLevel: { error: 'Level must be a number' },
  lengthName: { error: 'Name must be longer than 2 characters' },
  lengthAmount: { error: 'Amount must be longer than 2 characters' },
  lengthUserName: { error: 'Username must be longer than 2 characters' },
  lengthClasse: { error: 'Classe must be longer than 2 characters' },
  lengthLevel: { error: 'Level must be greater than 0' },
  lengthPassword: { error: 'Password must be longer than 7 characters' },
};

const isUndefined = (value: any) => value === undefined;
const isNotString = (value: any) => typeof value !== 'string';
const isNotNumber = (value: any) => typeof value !== 'number';
const isLesserThan = (value: number, min: number) => value <= min;

const nameValidation = (name: any) => {
  switch (true) {
    case isUndefined(name):
      return { code: errorCodes.badRequest, data: errorMessages.requiredName };
    case isNotString(name):
      return { code: errorCodes.unproceEntity, data: errorMessages.stringName };
    case isLesserThan(name.length, 2):
      return { code: errorCodes.unproceEntity, data: errorMessages.lengthName };
    default:
      return null;
  }
};

const amountValidation = (amount: any) => {
  switch (true) {
    case isUndefined(amount):
      return { code: errorCodes.badRequest, data: errorMessages.requiredAmount };
    case isNotString(amount):
      return { code: errorCodes.unproceEntity, data: errorMessages.stringAmount };
    case isLesserThan(amount.length, 2):
      return { code: errorCodes.unproceEntity, data: errorMessages.lengthAmount };
    default:
      return null;
  }
};

const validateProduct = (product: Products) => {
  const { name, amount } = product;
  const invalidName = nameValidation(name);
  const invalidAmount = amountValidation(amount);
  
  if (invalidName) return invalidName;
  if (invalidAmount) return invalidAmount;
  
  return null;
};

const validateUserName = (name: any) => {
  switch (true) {
    case isUndefined(name):
      return { code: errorCodes.badRequest, data: errorMessages.requiredUserName };
    case isNotString(name):
      return { code: errorCodes.unproceEntity, data: errorMessages.stringUserName };
    case isLesserThan(name.length, 2):
      return { code: errorCodes.unproceEntity, data: errorMessages.lengthUserName };
    default:
      return null;
  }
};

const validateClasse = (classe: any) => {
  switch (true) {
    case isUndefined(classe):
      return { code: errorCodes.badRequest, data: errorMessages.requiredClasse };
    case isNotString(classe):
      return { code: errorCodes.unproceEntity, data: errorMessages.stringClasse };
    case isLesserThan(classe.length, 2):
      return { code: errorCodes.unproceEntity, data: errorMessages.lengthClasse };
    default:
      return null;
  }
};

const validateLevel = (level: any) => {
  switch (true) {
    case isUndefined(level):
      return { code: errorCodes.badRequest, data: errorMessages.requiredLevel };
    case isNotNumber(level):
      return { code: errorCodes.unproceEntity, data: errorMessages.numberLevel };
    case isLesserThan(level, 0):
      return { code: errorCodes.unproceEntity, data: errorMessages.lengthLevel };
    default:
      return null;
  }
};

const validatepassword = (password: any) => {
  switch (true) {
    case isUndefined(password):
      return { code: errorCodes.badRequest, data: errorMessages.requiredPassword };
    case isNotString(password):
      return { code: errorCodes.unproceEntity, data: errorMessages.stringPassword };
    case isLesserThan(password.length, 7):
      return { code: errorCodes.unproceEntity, data: errorMessages.lengthPassword };
    default:
      return null;
  }
};

const validateUser = (user: Users) => {
  const { username, classe, level, password } = user;
  const invalidName = validateUserName(username);
  const invalidClasse = validateClasse(classe);
  const invalidLevel = validateLevel(level);
  const invalidPassword = validatepassword(password);
  
  if (invalidName) return invalidName;
  if (invalidClasse) return invalidClasse;
  if (invalidLevel) return invalidLevel;
  if (invalidPassword) return invalidPassword;
  
  return null;
};

export { validateProduct, validateUser };