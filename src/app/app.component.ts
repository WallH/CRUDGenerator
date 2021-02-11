import { Component } from '@angular/core';
import { DataTableInfo } from './model/DataTableInfo';
import { ItemCRUD } from './model/ItemCRUD';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'generator';
  /*
    {
      "itemX":"",
      "itemY":"",
      "itemZ":"",
      "itemA":""
    }
  
  */
  config =
  {
    datos: false,
    dataTable : false,
    modals: false
  }

  itemString:string;
  properties:Array<ItemCRUD>;
  urlGetterDT:string;
  dataTableResults:boolean = true;
  IDTable:string;
  dataTableInfo: DataTableInfo;



  optionsDataTable = 
  {
    botonEditar : true,
    botonEliminar: true
  }

  constructor()
  {
    this.properties = new Array<ItemCRUD>();
    this.dataTableInfo = new DataTableInfo("", this.properties);
  }

  proccessJson()
  {
    let elem = JSON.parse(this.itemString);
    console.log(elem);
    this.properties = new Array<ItemCRUD>();

    let prop = Object.getOwnPropertyNames(JSON.parse(this.itemString));
    for(let p of prop )
    {
      this.properties.push(new ItemCRUD(p, p, true, 0));
      //console.log(p);
    }
//    properties = new ItemCRUD(, )
  }

  generarDT()
  {
    this.dataTableInfo = new DataTableInfo(this.IDTable, this.properties, this.urlGetterDT, this.properties[0].name, this.optionsDataTable);
    console.log(this.dataTableInfo);
  }
}
