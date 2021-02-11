import { Component, Input, OnInit } from '@angular/core';
import { DataTableInfo } from 'src/app/model/DataTableInfo';
import { ItemCRUD } from 'src/app/model/ItemCRUD';

@Component({
  selector: 'app-datatablehtml',
  templateUrl: './datatablehtml.component.html',
  styleUrls: ['./datatablehtml.component.css']
})
export class DatatablehtmlComponent implements OnInit {

  @Input() dataTableInfo : DataTableInfo; 
  constructor() {
    this.dataTableInfo = new DataTableInfo("TEST", new Array<ItemCRUD>());
   }

  ngOnInit(): void {
  }

  generarCabeceras()
  {
    let ret = "";
    for(let dtInfo of this.dataTableInfo.properties)
    {
      ret+= `<th>${dtInfo.description}</th>
      `;
    }
    return ret;
  }

}
