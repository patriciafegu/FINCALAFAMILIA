import { Component, OnInit } from '@angular/core';
import {Aplanta} from '../../SERVICES/service-plantaqr/plantas.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-plantas',
  templateUrl: './plantas.component.html',
  styleUrls: ['./plantas.component.css']
})
export class PlantaComponent implements OnInit {
  //constructor(private CrudService:CrudService, private router:Router) { }
  Plant:any = [];
  
  constructor(private Aplanta: Aplanta) { }


  ngOnInit(): void {
    this.Aplanta.GetBooks().subscribe(res => {
      console.log(res)
      this.Plant =<any>res;
    });
    
  }

}
