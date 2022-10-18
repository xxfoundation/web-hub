export type Product = {
  title?: string;
  description: string;
  url: string;
  blank?: boolean;
  tag?: string;
  icon?: string;
  logo?: string
  company?: string;
  companyUrl?: string;
}

export type Category = {
  title: string;
}

export type Endpoint = {
  url: string;
  host: string;
  description: string;
}