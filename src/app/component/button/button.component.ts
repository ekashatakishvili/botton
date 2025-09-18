import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { buttoncolor } from './button-color.model';

@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
public buttoncolortype=input<buttoncolor>('primary')
}
