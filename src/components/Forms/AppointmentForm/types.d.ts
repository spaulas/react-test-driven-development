export type Props = {
  values: { service?: string; timeSlot?: number };
  onSubmit: (values: FormValues) => void;
  services: Array<string>;
};

export type FormKeys = "service" | "timeSlot";

export type FormType = {
  service?: string;
  timeSlot?: number;
};
