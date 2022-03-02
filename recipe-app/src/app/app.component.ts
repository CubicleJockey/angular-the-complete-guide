import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'recipe-app';
  public TabSelected: string;

  constructor(){
    this.TabSelected = 'home';
  }

  public OnNavigationChange($event: {TabName: string}): void{
    //console.log($event.TabName);
    if($event.TabName){
      this.TabSelected = $event.TabName.toLowerCase();
      return;
    }
  }
}
