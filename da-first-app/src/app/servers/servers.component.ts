import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-servers', by element
  selector: '[app-servers]', //by attribute
  //selector: '.app-servers' by class
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public allowNewServer: boolean = false;
  public serverCreationStatus: string = 'No server was created.';
  public serverName: string = '';
  public serverCreated: boolean = false;

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  public onCreateServer(): void {
    this.serverCreationStatus = `Server was created! Name is ${this.serverName}`;
    this.serverCreated = true;
  }

  public onUpdateServerName(event: Event): void {
      this.serverName = (<HTMLInputElement>event.target).value;
  }
}
