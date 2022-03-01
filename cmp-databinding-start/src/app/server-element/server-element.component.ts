import { Component, Input, OnInit } from '@angular/core';
import { ServerInfo } from '../shared/server-info.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input() public element: ServerInfo;
  //public element: {type: string, name: string, content: string } IFF no model

  constructor() { }

  ngOnInit(): void {
  }

}
