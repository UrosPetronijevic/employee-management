// types/employee.ts
export type ContractType = "odredjeno" | "neodredjeno" | "zadruga" | "pp";

export type WorkPosition =
  | "Direktor"
  | "Načelnik"
  | "Za javna plaćanja"
  | "Referent"
  | "Za budžetske evidencije i fiskalnu statistiku"
  | "Šef ekspoziture";

export type SchoolPreparation =
  | "III Stepen - SSS srednja škola"
  | "IV Stepen - SSS srednja škola"
  | "VI Stepen - VŠS viša škola"
  | "VII-1 VSS visoka stručna sprema";

export type PositionGroup =
  | "Prva grupa položaja"
  | "Druga grupa položaja"
  | "Treća grupa položaja"
  | "Četvrta grupa položaja"
  | "Peta grupa položaja"
  | "Viši savetnik"
  | "Samostalni savetnik"
  | "Savetnik"
  | "Saradnik"
  | "Mlađi saradnik"
  | "Referent"
  | "Mlađi referent";

export type PayGrade = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export interface Employee {
  kadrovskiBroj: string;
  ime: string;
  prezime: string;
  datumRodjenja: string;
  contractType: ContractType;
  radniStaz: {
    years: number;
    months: number;
  };
  workPosition: WorkPosition;
  schoolPreparation: SchoolPreparation;
  positionGroup: PositionGroup;
  payGroup: string;
  payGrade: PayGrade;
  coefficient: number;
  nbs: boolean;
  email: string;
  phone: string;
  pripravnost: boolean;
  prevoz: boolean;
  sindikat: boolean;
  deputy: boolean;
}
