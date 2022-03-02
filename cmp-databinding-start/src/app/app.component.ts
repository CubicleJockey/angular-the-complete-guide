import { Component, OnDestroy } from '@angular/core';
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

  public onServerAdded(server: { name: string, content: string }): void {
    this.serverElements.push(new ServerInfo(
      server.name,
      server.content,
      'server'
    ));
  }

  public onBlueprintAdded(blueprint: { name: string, content: string }): void {
    this.serverElements.push(new ServerInfo(
      blueprint.name,
      blueprint.content,
      'blueprint'
    ));
  }

  public ngOnDestory() : void {
    console.log('app.component.ts ngOnDestoryed() called!');
  }

  public destoryLastServer(): void{
    if(this.serverElements.length >= 1){
      const last = this.serverElements.length - 1;
      this.serverElements.splice(last, 1);
    }
  }
}
