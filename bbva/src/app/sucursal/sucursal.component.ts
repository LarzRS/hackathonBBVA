import { Component, OnInit } from '@angular/core';
import { SucService} from 'src/service/suc.service';

@Component({
  selector: 'app-sucursal',
  templateUrl: './sucursal.component.html',
  styleUrls: ['./sucursal.component.css']
})
export class SucursalComponent implements OnInit {

  constructor(
    private sucService: SucService
  ) { }

  ngOnInit() {
    console.log("Funciona");

    this.sucService.obtenerSucursal()
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
