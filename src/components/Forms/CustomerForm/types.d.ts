export type FormType = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
};

export type FormKeys = "firstName" | "lastName" | "phoneNumber";

export type Props = {
  values: FormValues;
  onSubmit: (values: FormValues) => void;
};
