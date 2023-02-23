import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaApiService {

  readonly bibliotecaUrl = "https://localhost:7018/api";

  constructor(private http:HttpClient) { }
  
  getLivroList():Observable<any[]>{
    return this.http.get<any>(this.bibliotecaUrl + '/livros');
  }

  addLivro(data:any){
    return this.http.post(this.bibliotecaUrl + '/livros', data);
  }

  updateLivro(id:number|string, data:any){
    return this.http.put(this.bibliotecaUrl + `/livros/${id}`, data);
  }

  deleteLivro(id:number|string){
    return this.http.delete(this.bibliotecaUrl + `/livros/${id}`);
  }
}
