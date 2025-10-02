import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonColor } from './button-color.model';


@Component({
  selector: 'app-button',
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
public buttonColorType=input<ButtonColor>('primary')
public isLoading=input<boolean>();
}
