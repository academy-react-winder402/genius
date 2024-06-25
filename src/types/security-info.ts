export interface SecurityInfo {
  nationalIMageAddress: string | null;
  verifyNationalImage: boolean;
  twoStepAuth: boolean;
  recoveryEmail: string;
  baseUrl: string | null;
}
