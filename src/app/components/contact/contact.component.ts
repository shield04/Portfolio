import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
interface contactForm 
{
  name: string,
  phone: number,
  email: string,
  message: string
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass']
})
export class ContactComponent implements OnInit {
  public status!: string;
  public contact = {
    name: '',
    phone: '',
    email: '',
    message: ''
  }
  constructor(
    private _http: HttpClient
  ){}

  ngOnInit(){
    
  }
  onSubmit(form: any){
    
    this._http.post('https://formspree.io/f/xnqrbyvz', this.contact).subscribe(
      {
        next: response =>{

          this.status = 'success';
          form.reset();
          //console.log(<any>response);
        },
        error: err => {
          //console.log(<any>err);
          this.status = 'failed';
        }

      });

  }

}
