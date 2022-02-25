import { Component } from "@angular/core";

@Component({
     selector: 'app-server'
    ,templateUrl: './server.component.html'
    ,styleUrls: [ './server.component.css' ]
})
export class ServerComponent{
    public serverId: Number = 10;

    public getServerStatus(){
        let number = Math.floor(Math.random() * 3);
        if(number <= 0){
            return 'online';
        } else {
            return 'offline';
        }
    }
}