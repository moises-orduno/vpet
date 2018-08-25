import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterinary',
  templateUrl: './veterinary.component.html',
  styleUrls: ['./veterinary.component.css']
})
export class VeterinaryComponent implements OnInit {

  public title = 'My first AGM project';
  public lat = 19.328321;
  public lng = -99.171932;



  constructor() { }

  ngOnInit() {
  }

}
