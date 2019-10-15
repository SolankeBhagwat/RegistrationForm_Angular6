import { ISkill } from "./ISkill";

export interface IEmployee {
  id: number;
  name: string;
  salary: number;
  Gender: string;
  email: string;
  phone: number;
  skills: ISkill[];
}
