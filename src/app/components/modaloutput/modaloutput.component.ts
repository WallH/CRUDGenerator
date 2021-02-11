import { Component, Input, OnInit } from '@angular/core';
import { ItemCRUD } from 'src/app/model/ItemCRUD';

@Component({
  selector: 'app-modaloutput',
  templateUrl: './modaloutput.component.html',
  styleUrls: ['./modaloutput.component.css']
})
export class ModaloutputComponent implements OnInit {

  @Input() properties : Array<ItemCRUD>;
  constructor() { 
    this.properties = new Array<ItemCRUD>();
  }

  ngOnInit(): void {
  }
  outputElements()
  {
    let ret = "";
    let identToInputOrSelect = '\n\t\t\t\t\t';
    for(let prop of this.properties)
    {
      if(prop.typeInput == 0)
      {
        ret+=this.createInput(prop) + identToInputOrSelect;
      }
      else if(prop.typeInput == 1)
      {
        ret+= this.createStaticSelect(prop) + identToInputOrSelect;
      }
      else if(prop.typeInput == 2)
      {
        ret+= this.createDynamicSelect(prop) + identToInputOrSelect;
      }
    }
    return ret;
  }
  createHiddenInput(prop)
  {
    let x = document.createElement("input");
    x.setAttribute("placeholder", prop.description);
    x.setAttribute("id", prop.name);
    x.setAttribute("type", "hidden");
    x.classList.add("form-control");
    return x.outerHTML;
  }
  createInput(prop)
  {
    let x = document.createElement("input");
    x.setAttribute("placeholder", prop.description);
    x.setAttribute("id", prop.name);
    x.classList.add("form-control");
    return x.outerHTML;
  }

  createDynamicSelect(prop)
  {
    let x = document.createElement("select");
    x.setAttribute("id", prop.name);
    x.classList.add("form-control");
    return x.outerHTML;
  }

  createStaticSelect(prop)
  {
    let x = document.createElement("select");
    x.setAttribute("id", prop.name);
    x.classList.add("form-control");
    for(let item of prop.inputValues)
    {
      let y = document.createElement("option");   
      y.setAttribute("value", item.value);
      y.append(item.label);
      x.append(y);
    }
    return x.outerHTML;
  }
}
