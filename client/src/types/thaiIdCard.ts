export interface ThaiIdCard {
  citizenId: string;

  titleEN: string;
  titleTH: string;
  firstNameEN: string;
  firstNameTH: string;
  lastNameEN: string;
  lastNameTH: string;

  address: string;
  birthday: string;
  gender: string;
  photo?: string;

  expire: string;
  issue: string;
}
