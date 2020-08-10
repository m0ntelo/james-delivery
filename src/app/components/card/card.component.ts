import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.less']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() id: string;
  @Input() name: string;
  @Input() address: string;
  @Input() picture: string;
  @Input() city: string;

  ngOnInit(): void {
  }

}
