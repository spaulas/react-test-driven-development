export type Props = {
  values: { service?: string };
  onSubmit: (values: FormValues) => void;
  services: Array<string>;
};

export type FormKeys = "service";

export type FormType = {
  service?: string;
};
