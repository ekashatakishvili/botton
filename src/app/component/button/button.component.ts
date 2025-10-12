import { NgClass } from '@angular/common';
import { Component, input } from '@angular/core';
import { ButtonColor } from './button-color.model';
import { ButtonSize } from './button-size.model';


@Component({
  selector: 'app-button',
  standalone: true, 
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
public buttonColorType = input<ButtonColor>('primary');
public isLoading=input<boolean>(false);
public isDisabled=input<boolean>(false);
public size = input<ButtonSize>('medium'); 
}

