import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { Global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.sass'],
  providers: [ProjectService]
})
export class DetailComponent implements OnInit {
  public url: string;
  public project!: Project;

  constructor(
    private _projectService: ProjectService,
    private _router: Router,
    private _route: ActivatedRoute
  ){
    this.url= Global.url;
  }
  
  ngOnInit(){
    this._route.params.subscribe(params =>{
      let id = params['id'];

      this.getProject(id);
    });
  }
  getProject(id: string){
    this._projectService.getProject(id).subscribe({

      next: response => {
        this.project = response.project;
      },
      error: err =>{
        console.log(<any>err);
      }
      
    });

  }
  deleteProject(id: string){
    this._projectService.deleteProject(id).subscribe({
      next: response =>{
        if(response.project){
          this._router.navigate(['/projects']);
        }
      },
      error: err =>{
        console.log(<any>err);
      }
    });
  }

}
