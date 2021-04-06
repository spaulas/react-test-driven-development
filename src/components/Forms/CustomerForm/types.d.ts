export type FormType = {
  firstName?: string;
  lastName?: string;
  phoneNumber?: number;
};

export type FormKeys = "firstName" | "lastName" | "phoneNumber";

export type Props = {
  values: FormValues;
  onSubmit: (values: FormValues) => void;
  fetch: (route:string, options: {method: string, credentials: string, headers: {"Content-Type": string}, body: string}) => void;
};
