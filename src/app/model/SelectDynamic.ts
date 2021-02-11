export class SelectDynamic
{
    constructor(public urlOptions?: string, public labelJson?:string, public valueJson?:string)
    {
        this.urlOptions = urlOptions;
        this.labelJson = labelJson;
        this.valueJson = valueJson;
    }
}