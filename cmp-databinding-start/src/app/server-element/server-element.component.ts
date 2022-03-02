import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ServerInfo } from '../shared/server-info.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //This causes the CSS to be setup globally.
})
export class ServerElementComponent implements OnInit {
  @Input('server-element') public element: ServerInfo;
  //@Input() public element: ServerInfo;
  //public element: {type: string, name: string, content: string } IFF no model

  constructor() { }

  ngOnInit(): void {
  }
}
