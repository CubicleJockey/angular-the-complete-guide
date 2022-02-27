import { Component } from "@angular/core";

@Component({
     selector: 'app-server'
    ,templateUrl: './server.component.html'
    ,styleUrls: [ './server.component.css' ]
})
export class ServerComponent{
    public serverId: Number = 10;
    public serverStatus: string;

    constructor(){
        this.serverStatus = this.getServerStatus();
    }

    private getServerStatus(): string {
       return Math.random() > 0.5 ? 'online' : 'offline';
    }

    public getColor(): string {
        return this.serverStatus === 'online' ? 'green' : 'red';
    }
}