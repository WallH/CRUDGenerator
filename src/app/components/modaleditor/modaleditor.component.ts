import { Component, Input, OnInit } from '@angular/core';
import axios from 'axios';
import { InputValues } from 'src/app/model/InputValues';
import { ItemCRUD } from 'src/app/model/ItemCRUD';

@Component({
  selector: 'app-modaleditor',
  templateUrl: './modaleditor.component.html',
  styleUrls: ['./modaleditor.component.css']
})
export class ModaleditorComponent implements OnInit {
  @Input() properties : Array<ItemCRUD>;
  
  optionsProps : Array<string>;
  modalEditorResults:boolean =true;
  constructor() { 
    this.optionsProps = this.optionsProps;
  }

  ngOnInit(): void {
  }

  addOptionValue(prop)
  {
    prop.inputValues.push(new InputValues("",""));
  }
  deleteOptionValue(prop, opt)
  {
    let i = prop.inputValues.indexOf(opt);
    prop.inputValues.splice(i, 1);
  }
  
  chargeEndpointOptions()
  {
  }

}
