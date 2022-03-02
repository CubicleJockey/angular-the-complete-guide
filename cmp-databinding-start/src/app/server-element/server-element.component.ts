import { 
  Component, 
  Input, 
  ViewEncapsulation,
  AfterViewInit,
  OnInit,
  OnDestroy, 
  ViewChild, 
  ElementRef 
} from '@angular/core';
import { ServerInfo } from '../shared/server-info.model';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None //This causes the CSS to be setup globally.
})
export class ServerElementComponent 
  implements OnInit, 
             OnDestroy,
             AfterViewInit {
   @Input('server-element') public element: ServerInfo;
  //@Input() public element: ServerInfo;
  //public element: {type: string, name: string, content: string } IFF no model

  @ViewChild('heading') public header: ElementRef;
  
  public ngOnInit(): void {
    this.checkReferenceVariable('ngOnInit');
  }

  public ngAfterViewInit(): void {
    this.checkReferenceVariable('ngAfterViewInit');
  }

  public ngOnDestroy() : void {
    console.log('server-element.component.ts ngOnDestoryed() called!');
  }

  private checkReferenceVariable(callingMethodName: string): void {
    const text = this.header ? this.header.nativeElement.textContent : '<null>';
    console.log(`server-element.component.ts - ${callingMethodName}(): Attempt ElementRef [${text}]`);
  }
}
