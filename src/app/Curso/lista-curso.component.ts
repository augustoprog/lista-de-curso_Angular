import { Component, OnInit } from "@angular/core";
import { Curso } from "./curso";
import { CursoService } from "./curso.service";

@Component({
    selector: 'app-lista-curso',
    templateUrl: './lista-curso.component.html'
})



export class ListCursoComponent implements OnInit{

    curso: Curso[] = [];

    constructor(private cursoervice: CursoService){

    }
    ngOnInit(): void{
        this.curso = this.cursoervice.retrieveAll();
        


}}