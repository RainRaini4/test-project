import {IAddress} from "./iaddress";
import {IPublicPhone} from "./ipublicPhone";
import {IEmail} from "./iemail";

export interface ICell {
  CommonName: string,
  FullName: string,
  WebSite: string,
  Email: IEmail[],
  PublicPhone: IPublicPhone[],
  ChiefName: string,
  ChiefPosition: string,
  ObjectAddress: IAddress[]
}
