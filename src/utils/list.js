import { message } from 'antd';

export const list = [
  'React',
  'Redux-toolkit',
  'TRK-query',
  'Redux-persist',
  'React-router-dom',
  'JSON Server',
  'AntDesign',
  'Tailwind CSS',
  'JavaScript',
];

export const errorMessageLogin = () => {
  message.error('Увійдіть у профіль', [1]);
};
export const successAddInBasket = () => {
  message.success('Товар успішно доданий до кошика', [1]);
};
export const alreadyInBasket = () => {
  message.error('Товар вже є у кошику', [1]);
};
export const successAddCategories = () => {
  message.success('Категорія додано!', [1]);
};
export const errorAddCategories = () => {
  message.error('Заповніть усі дані!', [1]);
};
export const successAddGoods = () => {
  message.success('Товар додано!', [1]);
};
export const errorAddGoods = () => {
  message.error('Заповніть усі дані!', [1]);
};
export const successConfirm = () => {
  message.success('Замовлення успішно оформлене!', [1]);
};
export const successRemove = () => {
  message.success('Товар успішно вилучено!', [1]);
};
export const successAdd = () => {
  message.success('+1', [1]);
};
export const successChangeGoods = () => {
  message.success('Товар відредаговано!', [1]);
};
export const successMessageAdmin = () => {
  message.success('Ви пішли як адміністратор', [1]);
};
export const successMessageCustomer = () => {
  message.success('Ви пішли як користувач', [1]);
};
export const errorMessage = () => {
  message.error('Введіть коректний логін та пароль або зареєструйтесь', [1]);
};
export const errorUserLogIn = () => {
  message.error('Спочатку потрібно вийти з профілю, щоб зайти в новий', [1]);
};
