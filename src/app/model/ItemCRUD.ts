import { InputValues } from "./InputValues";
import { SelectDynamic } from "./SelectDynamic";

export class ItemCRUD
{
    constructor(public name?:string, public description?:string, public renderOnTable:boolean = true, public typeInput?:number, public inputValues:Array<InputValues> = new Array<InputValues>(), public optionsDynamic:SelectDynamic = new SelectDynamic("","",""))
    {
        this.name = name;
        this.description = description;
        this.renderOnTable = renderOnTable;
        this.typeInput = typeInput;
        this.inputValues = inputValues;
        this.optionsDynamic = optionsDynamic;
    }
}