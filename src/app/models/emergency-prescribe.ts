import { Emergency } from "./emergency";

export class EmergencyPrescribe {
  emergencyID!: number;
  symptoms!: string;

  medication!: string;
  dosgae?: string;
  instructions?: string;
  followupDate: Date = new Date();

  followupNotes?: string;
  emergency!: Emergency;
}
