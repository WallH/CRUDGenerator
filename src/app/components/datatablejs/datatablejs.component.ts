import { Component, Input, OnInit } from '@angular/core';
import { Column } from 'src/app/model/Column';
import { DataTableInfo } from 'src/app/model/DataTableInfo';

@Component({
  selector: 'app-datatablejs',
  templateUrl: './datatablejs.component.html',
  styleUrls: ['./datatablejs.component.css']
})
export class DatatablejsComponent implements OnInit {

  @Input() dataTableInfo : DataTableInfo;

  constructor() {
   }

  ngOnInit(): void {
  }


  generateColumns()
  {
    let columns = new Array<Column>();
    for(let prop of this.dataTableInfo.properties)
    {
      if(!prop.renderOnTable) continue; 
      columns.push(new Column(prop.name, prop.description));
    }
    //this.dataTableInfo.options;
    let x = document.createElement("div");
    x.classList.add("row");
    if(this.dataTableInfo.options.botonEditar)
    {
      let y = document.createElement("a");
      y.setAttribute("id", "btnUpdate");
      y.classList.add("btn");
      y.classList.add("btn-primary");
      y.classList.add("btn-sm");
      
      y.setAttribute("data-toggle", "modal");
      y.setAttribute("data-target", "#modalObject");
      y.text = "Editar";
      //console.log(y);
      x.append(y);
    }
    if(this.dataTableInfo.options.botonEliminar)
    {
      let y = document.createElement("a");
      y.setAttribute("id", "btnDelete");
      y.classList.add("btn");
      y.classList.add("btn-danger");
      y.classList.add("btn-sm");
      
      y.setAttribute("data-toggle", "modal");
      y.setAttribute("data-target", "#modalEliminar");
      y.text = "Eliminar";
      //console.log(y);
      x.append(y);
    }
    //console.log(x.outerHTML);
    columns.push(new Column(undefined, "Botones", x.outerHTML));
    console.log(JSON.stringify(columns));
    return JSON.stringify(columns);
  }



  testFunction():string
  {
    return "HOLA";
  }
}
