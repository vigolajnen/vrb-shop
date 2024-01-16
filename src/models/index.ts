export interface ICarouselProps {
  children: React.ReactNode;
  id: string;
  ref?: any;
  breakpoints?: {
    [key: number]: any;
  };
}

export interface IResponseService {
  services: IService[];
}

export interface IService {
  city: string;
  clubs: IClub[];
}

export interface IClub {
  id: number;
  name: string;
  address: string;
  isPool: boolean;
  products: IProduct[];
}

export interface IProduct {
  product_id: string;
  product_price: string;
  product_name: string;
  product_type: string;
}

export interface IClubsAddress {
  name: string;
  address: string;
}

export interface ICityData {
  city: string;
  clubs: IClub[];
}

export interface Root {
  services: IService[];
}

export interface IService {
  city: string;
  clubs: IClub[];
}

export interface IClub {
  id: number;
  name: string;
  address: string;
  isPool: boolean;
  products: IProduct[];
}

export interface IProduct {
  product_id: string;
  product_price: string;
  product_name: string;
  product_type: string;
}
