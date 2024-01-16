export const TEXT_ERROR_MESSAGE = 'Заполните поле';

interface IOrderPosition {
  product_id: string;
  product_name: string;
  product_price: string;
  product_type: string;
}

interface IOrderClub {
  address: string;
  first_pay: IOrderPosition[];
  id: string;
  isPool: Boolean;
  name: string;
  product: IOrderPosition;
}

interface IProductOrder {
  clubs: IOrderClub[];
  countClubs: number;
  id: number;
  isPool: Boolean;
  price: number;
  title: string;
  type: string;
}

const customer = (
  data: { firstName: string; phone: string },
  values: { lastName: string; birth_day: string; email: string },
) => {
  return {
    first_name: data.firstName,
    last_name: values.lastName,
    middle_name: '',
    birth_day: values.birth_day,
    phone: phoneWithoutFormatting(data.phone),
    email: values.email,
  };
};

const products = (
  values: {
    club_id: string;
    product_name: string;
    product_price: number;
    product_id: string;
  },
  item: IProductOrder,
) => {
  const resultProducts = [];
  const orderClub = item.clubs.filter(el => el.id === values.club_id);
  const orderClubFirstPay = orderClub?.[0].first_pay?.[0];

  console.log('orderClub', orderClub);

  const orderProduct = {
    name: orderClub[0].product.product_name,
    price: orderClub[0].product.product_price,
    price_id: orderClub[0].product.product_id,
  };

  resultProducts.push(orderProduct);
  let orderProductFirstPay = {};

  if (orderClubFirstPay) {
    orderProductFirstPay = {
      name: orderClubFirstPay.product_name,
      price: orderClubFirstPay.product_price,
      price_id: orderClubFirstPay.product_id,
    };

    resultProducts.push(orderProductFirstPay);
  }

  return resultProducts;
};

const club = (
  values: {
    club_id: string;
  },
  item: IProductOrder,
) => {
  const orderClub = item.clubs.filter(el => el.id === values.club_id);
  return {
    name: orderClub[0].name,
    address: orderClub[0].address,
  };
};

export const orderData = (
  data: { firstName: string; phone: string },
  values: {
    lastName: string;
    birth_day: string;
    email: string;
    club_id: string;
    product_name: string;
    product_price: number;
    product_id: string;
  },
  item: IProductOrder,
) => {
  return {
    customer: customer(data, values),
    products: products(values, item),
    club: club(values, item),
    recurrentable: true,
  };
};

export const nowAgeUser = (val: string): number => {
  var now: Date = new Date(); //Текущя дата
  var today: Date = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
  // var dob = new Date(1988, 6, 26); //Дата рождения
  var dob: Date = new Date(val);
  var dobnow: Date = new Date(
    today.getFullYear(),
    dob.getMonth(),
    dob.getDate(),
  ); //ДР в текущем году
  var age: number; //Возраст

  //Возраст = текущий год - год рождения
  age = today.getFullYear() - dob.getFullYear();
  //Если ДР в этом году ещё предстоит, то вычитаем из age один год
  if (today < dobnow) {
    age = age - 1;
  }

  return age;
};

export const minValueDate = (): string => {
  const nowDate: string = new Date().toLocaleDateString(); //Текущя дата
  const m: string = nowDate.slice(3, 5);
  const d: string = nowDate.slice(0, 2);

  const y: number = new Date().getFullYear() - 120; // 120 лет сегодня
  const result: string = y + '-' + m + '-' + d;

  return result;
};

export const maxValueDate = (): string => {
  const nowDate: string = new Date().toLocaleDateString(); //Текущя дата
  const m: string = nowDate.slice(3, 5);
  const d: string = nowDate.slice(0, 2);

  const y: number = new Date().getFullYear() - 14; // 14 лет сегодня
  const result: string = y + '-' + m + '-' + d;

  return result;
};

export const phoneWithoutFormatting = (str: string): string => {
  return str
    .replace(/[^0-9]/g, '')
    .slice(1)
    .trim();
};

// количество одинаковых цифр в строке
const orderedCount = (text: string): Array<[string, number]> => {
  return Array.from(
    text.split('').reduce((acc: Map<string, number>, el: string) => {
      acc.set(el, (acc.get(el) || 0) + 1);
      return acc;
    }, new Map()),
  );
};

export const checkPhone = (phone: string): boolean => {
  const tel: string = phone.replace(/[^+\d]/g, '').slice(2);
  const num: number = tel.length;

  return num === 10 && orderedCount(tel)[0][1] < 10;
};

export const getIdVal = (arr: Array<any>, type: string): string => {
  const el: any =
    Boolean(arr) && [...arr].filter(el => el.product_type === type);
  return el.length > 0 ? el[0].product_id : '';
};

export const getPriceVal = (arr: Array<any>): number => {
  const el: any =
    Boolean(arr) && [...arr].filter(el => el.product_type === 'first_pay');
  return el.length > 0 ? el[0].product_price : '';
};

export const isNotFilledTel = (v: string) => {
  return v && v.indexOf('_') === -1 && checkPhone(v)
    ? undefined
    : 'Phone number is required.';
};

export const isCheckBirthDay = (v: string): boolean => {
  return nowAgeUser(v) >= 14;
};

export const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};
