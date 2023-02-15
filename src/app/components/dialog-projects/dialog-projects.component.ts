import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'


@Component({
  selector: 'app-dialog-projects',
  templateUrl: './dialog-projects.component.html',
  styleUrls: ['./dialog-projects.component.sass']
})
export class DialogProjectsComponent implements OnInit {

  public result: any;

  constructor(
    public dialogRef: MatDialogRef<DialogProjectsComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any)
    {

    

    }
  
  onClickNo(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.result = this.data;
    
  }


}
