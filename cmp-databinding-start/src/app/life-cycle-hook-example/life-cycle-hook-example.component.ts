import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-life-cycle-hook-example',
  templateUrl: './life-cycle-hook-example.component.html',
  styleUrls: ['./life-cycle-hook-example.component.css']
})
export class LifeCycleHookExampleComponent 
    implements OnInit
              ,OnChanges
              ,DoCheck
              ,AfterContentInit
              ,AfterContentChecked
              ,AfterViewInit
              ,AfterViewChecked
              ,OnDestroy {

  constructor() { 
    console.log(`constructor() called! - ${this.getCallTime()}`);
  }

  ngOnInit(): void {
    console.log(`ngOnInit() called. - ${this.getCallTime()}`);
  }

  ngOnChanges(): void{
    console.log(`ngOnChanges() called! - ${this.getCallTime()}`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck() called! - ${this.getCallTime()}`);
  }
  ngAfterContentInit(): void {
    console.log(`ngAfterContentInit() called! - ${this.getCallTime()}`);
  }
  ngAfterContentChecked(): void {
    console.log(`ngAfterContentChecked() called! - ${this.getCallTime()}`);
  }
  ngAfterViewInit(): void {
    console.log(`ngAfterViewInit() called! - ${this.getCallTime()}`);
  }
  ngAfterViewChecked(): void {
    console.log(`ngAfterViewChecked() called! - ${this.getCallTime()}`);
  }
  ngOnDestroy(): void {
    console.log(`ngOnDestory() called! - ${this.getCallTime()}`);
  }

  private getCallTime(): string{
    let now = new Date(Date.now());
    return `${(now.getHours() > 12 ? now.getHours() - 12 : now.getHours())}:${now.getMinutes()}.${now.getSeconds()} ${(now.getHours() >= 12 ? "PM" : "AM")}`;
  }
}
