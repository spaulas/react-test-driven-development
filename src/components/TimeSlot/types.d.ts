export type Props = {
  name: string;
  onChange: (value: number) => void;
  id: string;
  value?: number;
  openingTime: number;
  closingTime: number;
  availableTimeSlots: Array<{ startsAt: number }>;
  today: Date;
};
