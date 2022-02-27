import { Component } from "@angular/core";

@Component({
     selector: 'app-server'
    ,templateUrl: './server.component.html'
    ,styleUrls: [ './server.component.css' ]
})
export class ServerComponent{
    public serverId: Number = 10;

    public getServerStatus(){
       return Math.random() > 0.5 ? 'online' : 'offline';
    }

    public getColor(): string {
        return this.getServerStatus() === 'online' ? 'green' : 'red';
    }
}