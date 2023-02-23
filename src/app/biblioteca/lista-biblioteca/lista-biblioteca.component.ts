import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BibliotecaApiService } from 'src/app/biblioteca-api.service';

@Component({
  selector: 'app-lista-biblioteca',
  templateUrl: './lista-biblioteca.component.html',
  styleUrls: ['./lista-biblioteca.component.css']
})
export class ListaBibliotecaComponent implements OnInit {

  bibliotecaList$!:Observable<any[]>;
  bibliotecaList:any=[]

  bibliotecaListMap:Map<number, string> = new Map()
  
  constructor(private service:BibliotecaApiService) {}

  ngOnInit(): void {
    this.bibliotecaList$ = this.service.getLivroList();
    this.refreshBibliotecaListMap();
  }

  modalTitle:string = '';
  activateAddEditBibliotecaComponent:boolean = false;
  biblioteca:any;

  modalAdd(){
    this.biblioteca = {
      id:0,
      titulo:null,
      subtitulo:null,
      resumo:null,
      quantidadeDePaginas:null,
      dataDaPublicacao:null,
      editora:null,
      edicao:null,
      autores:null,
    }
    this.modalTitle = "Cadastro de Livros";
    this.activateAddEditBibliotecaComponent = true; 
  }

  refreshBibliotecaListMap(){
    this.service.getLivroList().subscribe(data =>{
      this.bibliotecaList = data;

      for (let i = 0; i < data.length; i++){
        this.bibliotecaListMap.set(this.bibliotecaList[i].id, this.bibliotecaList[i].biblioteca)

      }
    })
  }
}
