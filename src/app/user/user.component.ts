import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule, TooltipPosition } from '@angular/material/tooltip';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { User } from '../../models/user.class';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, MatTooltipModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',

})
export class UserComponent {

  user = new User();

  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  showDelay = new FormControl(500);
  hideDelay = new FormControl(1000);
  position = new FormControl(this.positionOptions[1]);

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogAddUserComponent, {
      panelClass: 'custom-dialog-container'
    });
  }

}