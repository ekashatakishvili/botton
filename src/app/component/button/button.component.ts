import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonColor } from './button-color.model';


@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
public buttonColorType=input<ButtonColor>('primary')
public isloading=input<boolean>();
}
