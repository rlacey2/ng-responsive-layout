import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import { AsyncPipe } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { SelectableItem, UiMenuComponent } from '../ui-menu/ui-menu.component';
import { GenericDialogComponent } from '../dialogs/generic/genericdialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-status.d-flex.flex-column.overflow-hidden.h-100',
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss',
  standalone: true,
  imports: [
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    MatMenuModule, 
    RouterLink,
    UiMenuComponent
  ]
})
export class StatusComponent {

  items: SelectableItem[] = [
    {
      name: 'Option 1', value: '1',
      children: [
        { name: 'Option 1.1', value: '1.1' },
        {
          name: 'Option 1.2', value: '1.2',
          children: [
            { name: 'Option 1.2.1', value: '1.2.1' },
            {
              name: 'Option 1.2.2', value: '1.2.2',
              children: [
                { name: 'Option 1.2.3.1', value: '1.2.3.1' },
                { name: 'Option 1.2.3.2', value: '1.2.3.2' },
                { name: 'Option 1.2.3.3', value: '1.2.3.3' },
              ]
            },
          ]
        },
      ]
    },
    { name: 'Option 2', value: '2' },
    { name: 'Option 3', value: '3' },
  ];

  public dialog = inject(MatDialog)

  nestedMenuChoice(input: any) {
    console.log('Value selected:', input)
  }

  openDialog() {

    /*
     Fullscreen dialog with  margins
     */
    const dialogRef = this.dialog.open(GenericDialogComponent, {
      height: "calc(100% - 15px)",
      width:  "calc(100% - 15px)",
      maxWidth: "100%",
      maxHeight: "100%",
      disableClose: true, // only the cancel button closes the dialog when true
   //   panelClass: 'bg-danger'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
