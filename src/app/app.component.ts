import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './component/button/button.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.component.html',
  styles: [`
    .row{
     display:flex;
     justify-content:space-between ;
     margin-botton: 16px; 
    }
     `]
})
export class AppComponent { }
