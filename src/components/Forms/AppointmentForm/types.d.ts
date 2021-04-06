export type Props = {
  values: { service?: string; startsAt?: number; stylist?: string };
  onSubmit: (values: FormValues) => void;
  services: Array<string>;
  stylists: Array<{
    name: string;
    services: Array<string>;
    availableTimeSlots: Array<{ startsAt: number }>;
  }>;
  openingTime: number;
  closingTime: number;
};

export type FormKeys = "service" | "startsAt" | "stylist";

export type FormType = {
  service?: string;
  stylist?: string;
  startsAt?: number;
};
