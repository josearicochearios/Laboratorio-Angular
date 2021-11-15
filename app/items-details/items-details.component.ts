import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-items-details',
  template: '<button (click)="delete()">Borrar</button>',
  styleUrls: ['./items-details.component.css']
})
export class ItemsDetailsComponent implements OnInit {

  @Output() deleteRequest = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }
  delete() {
    this.deleteRequest.emit('item name');
  }

}
