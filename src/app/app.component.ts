import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'digital-identity-solution-admin-panel';
<<<<<<< HEAD
  constructor(){}
=======
  constructor(){
    console.log('This is title',this.title)
  }
>>>>>>> 27e696c67efb2e0b9f2133990aa92825880f1c2a
}
