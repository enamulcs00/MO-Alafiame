import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digital-identity-solution-admin-panel';
  constructor(){
    console.log('This is title',this.title)
  }
}
