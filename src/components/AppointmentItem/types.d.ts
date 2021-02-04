export type Props = {
  customer: {
    firstName: string;
    lastName: string;
    phoneNumber: number;
    service: ServiceType;
    stylist: string;
    notes?: string;
  };
  timeStamp: string;
  extraClass?: string;
};
