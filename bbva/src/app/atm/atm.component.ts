import { Component, OnInit } from '@angular/core';
import { AtmService } from 'src/service/atm.service';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  constructor(
    private atmService: AtmService
  ) { }

  ngOnInit() {
    console.log("HOLA");

    this.atmService.obtenerATM()
    .subscribe(
      data => {
        console.log(data);
      }
    );
  }

}
