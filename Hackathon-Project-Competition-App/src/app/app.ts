import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Hackathon-Project-Competition-App');

  loggedData: any;
  constructor(){
    const localData = localStorage.getItem("hackathonuser");
    if(localData != null)
    {
      this.loggedData= JSON.parse(localData)
    }
  }
  
  onLogOff(){
    localStorage.removeItem("hackathonuser");
    this.loggedData=undefined;
  }
}
