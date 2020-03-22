import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Properties:Array<any>=[
    {
      Id:1,
      Name:'Birala house',
      Type:"House",
      Price:12000
    },
    {
      Id:2,
      Name:'Silicon house',
      Type:"House",
      Price:13000
    },
    {
      Id:3,
      Name:'ABC house',
      Type:"House",
      Price:14000
    },
    {
      Id:4,
      Name:'Birala bunglow',
      Type:"Bunglow",
      Price:15000
    },
    {
      Id:5,
      Name:'xyz Bunglow',
      Type:"House",
      Price:16000
    },
    {
      Id:6,
      Name:'spring house',
      Type:"House",
      Price:17000
    },
    {
      Id:7,
      Name:'Birala house',
      Type:"House",
      Price:18000
    },
    {
      Id:8,
      Name:'pqr house',
      Type:"House",
      Price:19000
    },
    {
      Id:9,
      Name:'Gigaplex house',
      Type:"House",
      Price:20000
    }
  ]

}
