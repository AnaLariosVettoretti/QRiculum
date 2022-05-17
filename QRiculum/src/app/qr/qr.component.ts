import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.component.html',
  styleUrls: ['./qr.component.css']
})
export class QrComponent implements OnInit {

  constructor() { }

  enlace: string = window.location.href.replace("qr", "cv");

  ngOnInit() {
    
  }

}
