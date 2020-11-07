import { DialgoComponent } from './../dialgo/dialgo.component';
import { Component, OnInit , ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog'

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent {

  constructor(private dialog: MatDialog) { }

  openDialog() {
    const dialogRef = this.dialog.open(DialgoComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
