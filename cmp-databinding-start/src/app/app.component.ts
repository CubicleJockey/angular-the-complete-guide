import { Component } from '@angular/core';
import { ServerInfo } from './shared/server-info.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public serverElements: ServerInfo[] = [];

  constructor(){
    this.serverElements.push(
      new ServerInfo('Server', 'This is a test server.', 'server')
    );
  }
}
