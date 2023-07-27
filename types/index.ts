import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    isDisabled?: boolean;
    title: string;
    containerStyles?: string;
    handleClick?:MouseEventHandler<HTMLButtonElement>;
    btnType?: "button" | "submit";
    textStyles?: string;
    rightIcon?: string;
}

export interface SearchManuFacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}

export interface CarProps {
    model: string;
    make: string;
    fuel: string;
    mpg: number;
    transmission: string;
    drive: string;
    noofperson: number;
    carRent : number;
    img : string;
}

