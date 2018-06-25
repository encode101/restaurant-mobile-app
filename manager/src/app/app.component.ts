import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  events: string[] = [];
  opened: boolean;
  shouldRun: boolean;
  
  ngOnInit() {
    this.opened = true;
    this.shouldRun = true;
  }

}
