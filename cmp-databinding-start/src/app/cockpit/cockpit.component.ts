import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  //public newServerName:string = '';
  //public newServerContent:string = '';

  @Output() public serverCreated: EventEmitter<{name: string; content: string}>;
  @Output('bpCreated') public blueprintCreated: EventEmitter<{name: string; content: string}>;

  //Get local reference
  @ViewChild('serverContentInput') 
  public serverContentInput: ElementRef;

  constructor() { 
    this.serverCreated = new EventEmitter<{name: string; content: string}>();
    this.blueprintCreated = new EventEmitter<{name: string; content: string}>();
  }

  ngOnInit(): void {
  }

  onAddServer(nameInput: HTMLInputElement) {   
     this.serverCreated.emit({ 
        name: nameInput.value
       ,content: this.serverContentInput.nativeElement.value
      });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
       name: nameInput.value
      ,content: this.serverContentInput.nativeElement.value
    });
  }
}
