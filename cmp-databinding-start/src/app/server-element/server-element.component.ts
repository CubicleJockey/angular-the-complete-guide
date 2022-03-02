import { Component, Input, ViewEncapsulation, OnDestroy } from '@angular/core';
import { ServerInfo } from '../shared/server-info.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //This causes the CSS to be setup globally.
})
export class ServerElementComponent implements OnDestroy{

  @Input('server-element') public element: ServerInfo;
  //@Input() public element: ServerInfo;
  //public element: {type: string, name: string, content: string } IFF no model
  
  public ngOnDestroy() : void {
    console.log('server-element.component.ts ngOnDestoryed() called!');
  }
}
