import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { InsteadComponent } from '@components/instead/instead.component';

@Component({
  selector: 'home',
  imports: [InsteadComponent, MatFormField, MatInput, MatLabel],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {}
