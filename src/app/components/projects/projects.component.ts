import { Component, OnInit} from '@angular/core';
import { Project } from '../../models/project';
import { Projects } from 'src/app/models/project-array';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { MatDialog } from '@angular/material/dialog'
import { DialogProjectsComponent } from '../dialog-projects/dialog-projects.component';
declare var $ : any;

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass'],
  providers: [ProjectService]
})
export class ProjectsComponent implements OnInit {
  public projects: Project[]=[];
  public url: string;
  public proj: Projects[]=[];

  constructor(
    private _projectService: ProjectService,
    public dialog: MatDialog,
    )
    
  {
    this.url = Global.url;
    console.log(this.proj);
  }
  openDialog(project: any): void{
    const dialogRef = this.dialog.open(DialogProjectsComponent,{
      width:'550px',
      data: {name: project.name, description: project.description, image: project.image, langs: project.langs },
      enterAnimationDuration: '500ms',
      exitAnimationDuration: '500ms',
      //backdropClass: 'backdropBackground',
    });

    /*dialogRef.afterClosed().subscribe(res =>{
      console.log(res);
    });*/
  }

  ngOnInit(){
     
    this.getProjects(); 
  }

  getProjects(){
    this._projectService.getProjects().subscribe({
        next: response =>{
          if(response.projects){
            this.projects = response.projects;
          }
        },
        error: err =>{
          console.log(<any>err);
        }
    });
  }

}
