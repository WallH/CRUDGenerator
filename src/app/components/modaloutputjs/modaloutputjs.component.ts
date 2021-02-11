import { Component, Input, OnInit } from '@angular/core';
import { ItemCRUD } from 'src/app/model/ItemCRUD';

@Component({
  selector: 'app-modaloutputjs',
  templateUrl: './modaloutputjs.component.html',
  styleUrls: ['./modaloutputjs.component.css']
})
export class ModaloutputjsComponent implements OnInit {

  @Input() properties : Array<ItemCRUD>;

  constructor() { }
  ngOnInit(): void {
  }

  cargarSelectDynamics()
  {
    let ret = "";
    for(let prop of this.properties)
    {
      if(prop.typeInput == 2)
      {
        ret+= `$.ajax({
          type:'GET',
          url: "${prop.optionsDynamic.urlOptions}",
          dataType: "json",
          success: function(data)
          {
            data.forEach(item=>{
              $("#${prop.name}").append('<option value="'+item.${prop.optionsDynamic.valueJson}+'">'+item.${prop.optionsDynamic.labelJson}+'</option>')
            });
          }
        });`
      }
    }
    return ret;
  }
    /*$.ajax({
        type:'GET',
        url:baseurl+"Admin/getEstados",
        dataType:"json",
        success: function(data) {
        data.forEach(item => {
          $("#selectEstados").append('<option value="'+estado.{{id_estado}}+'">'+data.{{nombre_estado}}+'</option>');
        });
    },
    error:function(){
    }
    });*/

  createDynamicSelectJS(prop)
  {

  }

}
