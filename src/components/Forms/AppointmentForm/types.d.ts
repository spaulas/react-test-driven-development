export type Props = {
  values: { service?: string; startsAt?: number };
  onSubmit: (values: FormValues) => void;
  services: Array<string>;
  openingTime: number;
  closingTime: number;
};

export type FormKeys = "service" | "startsAt";

export type FormType = {
  service?: string;
  startsAt?: number;
};
