import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  public newServerName:string = '';
  public newServerContent:string = '';

  @Output() public serverCreated: EventEmitter<{name: string; content: string}>;
  @Output() public blueprintCreated: EventEmitter<{name: string; content: string}>;

  constructor() { 
    this.serverCreated = new EventEmitter<{name: string; content: string}>();
    this.blueprintCreated = new EventEmitter<{name: string; content: string}>();
  }

  ngOnInit(): void {
  }

  onAddServer() {
     this.serverCreated.emit({ 
        name: this.newServerName
       ,content: this.newServerContent
      });
  }

  onAddBlueprint() {
    this.blueprintCreated.emit({
       name: this.newServerName
      ,content: this.newServerContent
    });
  }
}
