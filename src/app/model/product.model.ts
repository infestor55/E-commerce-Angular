import { FileHandle } from "./file-handel.model";

export interface product {
     name: string,
     description: string,
     price: number,
     color:string,
     image: FileHandle[]
}