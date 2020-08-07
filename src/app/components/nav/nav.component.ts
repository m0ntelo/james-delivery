import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.less']
})
export class NavComponent implements OnInit {

  @Input() picture: string;
  @Input() name: string;
  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
  }

}
