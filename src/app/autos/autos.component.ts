import { Component, OnInit } from '@angular/core';
import { BasicService } from '../services/basic.service';

@Component({
  selector: 'app-autos',
  templateUrl: './autos.component.html',
  styleUrls: ['./autos.component.css'],
  providers: [BasicService]
})
export class AutosComponent implements OnInit {
  public autos: Auto[]
  constructor(
    private basicService:BasicService
  ) { }

  ngOnInit() {
    this.basicService.getData('autos').subscribe(
      (autos)=>{
        this.autos = autos.autos
        console.log(this.autos)
        if(!this.autos){
          alert("Error interno del sistema")
        }
      }
    )
  }

}
class Auto{
  constructor(
    public marca:string,
    public modelo:string,
    public anio:number,
    public version:string
  ){}
}
