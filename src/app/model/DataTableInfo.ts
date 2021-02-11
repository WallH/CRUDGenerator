import { ItemCRUD } from "./ItemCRUD";

export class DataTableInfo{
    constructor(public idTable?:string, public properties?:Array<ItemCRUD>, public ajaxGetter?:string, public ID?:string, public options?:any)
    {
        this.idTable = idTable;
        this.properties = properties;
        this.ajaxGetter = ajaxGetter;
        this.ID = ID;   
        this.options = options;
    }
}