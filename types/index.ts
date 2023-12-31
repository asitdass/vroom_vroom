import { MouseEventHandler } from "react";
export interface CustomButtonProps{
    title : String;
    containerStyles?: String;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
    btnType?:"button" | "submit";
}
export interface SearchManufacturerProps{
    manufacturer: string;
    setManufacturer: (manufacturer: string)=> void;
}