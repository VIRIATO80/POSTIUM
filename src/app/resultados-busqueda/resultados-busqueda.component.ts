import { Component, OnInit } from '@angular/core';
import { Post } from "../post";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-resultados-busqueda',
  templateUrl: './resultados-busqueda.component.html',
  styleUrls: ['./resultados-busqueda.component.css']
})
export class ResultadosBusquedaComponent implements OnInit {
  
  posts: Post[];

  constructor(
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.data.subscribe((data: { posts: Post[] }) => this.posts = data.posts);
  }
}


