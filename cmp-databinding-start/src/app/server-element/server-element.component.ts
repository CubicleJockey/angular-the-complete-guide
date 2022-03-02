import { 
  Component, 
  Input, 
  ViewEncapsulation,
  AfterViewInit,
  AfterContentInit,
  OnInit,
  OnDestroy, 
  ViewChild, 
  ElementRef, 
  ContentChild
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
             AfterViewInit,
             AfterContentInit {
   @Input('server-element') public element: ServerInfo;
  //@Input() public element: ServerInfo;
  //public element: {type: string, name: string, content: string } IFF no model

  @ViewChild('heading') public header: ElementRef;

  //This gets a Reference type on HTML elements that get swapped into the <ng-content> tag.
  @ContentChild('contentParagraph') public paragraph: ElementRef;
  
  public ngOnInit(): void {
    const methodName = 'ngOnInit';
    this.checkReferenceVariable(methodName);
    this.checkContentReferenceVariable(methodName);
  }

  public ngAfterViewInit(): void {
    this.checkReferenceVariable('ngAfterViewInit');
  }

  public ngAfterContentInit(): void {
    this.checkContentReferenceVariable('ngAfterContentInit');
  }

  public ngOnDestroy() : void {
    console.log('server-element.component.ts ngOnDestoryed() called!');
  }

  private checkReferenceVariable(callingMethodName: string): void {
    const text = this.header ? this.header.nativeElement.textContent : '<null>';
    console.log(`server-element.component.ts - ${callingMethodName}(): Attempt ElementRef [${text}]`);
  }

  private checkContentReferenceVariable(callingMethodName: string) : void{
    const text = this.paragraph ? this.paragraph.nativeElement.textContent : '<null>';
    console.log(`server-element.compontent.ts - ${callingMethodName}(): Attempted Content ElementRef [${text}]`);
  }
}
