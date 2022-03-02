import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //public newServerName:string = '';
  public newServerContent:string = '';

  @Output() public serverCreated: EventEmitter<{name: string; content: string}>;
  @Output('bpCreated') public blueprintCreated: EventEmitter<{name: string; content: string}>;

  constructor() { 
    this.serverCreated = new EventEmitter<{name: string; content: string}>();
    this.blueprintCreated = new EventEmitter<{name: string; content: string}>();
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {
     this.serverCreated.emit({ 
        name: nameInput.value
       ,content: this.newServerContent
      });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
       name: nameInput.value
      ,content: this.newServerContent
    });
  }
}
