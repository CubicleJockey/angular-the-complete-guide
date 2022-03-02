import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output()
  public OnNavigationClick: EventEmitter<{TabName: string}>;

  constructor() { 
    this.OnNavigationClick = new EventEmitter<{TabName: string}>();
  }
  ngOnInit(): void {

  }

  public OnNavigateTo($event: any): void {
    let anchor = $event.target;

    if(anchor && anchor.id){
      this.OnNavigationClick.emit({ TabName: anchor.id });
      return;
    }
    throw new Error('Navigation link must provide an id attribute.');
  }
}
