import { Component, OnInit, ViewChild,AfterViewInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})


export class PaginatorComponent implements OnInit,AfterViewInit {
  
  itemlist: Array<{dado1:String,dado2:String, dado3: number}> = [];

  displayedColumns2: string[] = ['nome', 'cidade', 'numero'];
  dataSource2 = new MatTableDataSource<Pessoa>(item_list);
  
  pageVariable2 = 2;
  optionsVariable2 = [2,3,5,10];

  constructor() {}

  ngOnInit(): void {
    this.itemlist = [{dado1:"amanda",dado2:"assis",dado3:1},{dado1:"Lara",dado2:"marilia",dado3:2},{dado1:"cris",dado2:"palmital",dado3:3}]
  }

  @ViewChild(MatPaginator)
  paginator2!: MatPaginator | null;

  ngAfterViewInit() {
    this.dataSource2.paginator = this.paginator2;
  }

  selecionaRegistro(value: Pessoa){
    alert("registro selecionado - " + "Nome: " + value.dado1 + " / "+ " Cidade: " + value.dado2 + " / " + " Numero: " + value.dado3);
  }

}

export interface Pessoa {
  dado1: string;
  dado2: string;
  dado3: number;
}

const item_list: Pessoa[] = [
  {dado1:"amanda",dado2:"assis",dado3:1},
  {dado1:"Lara",dado2:"marilia",dado3:2},
  {dado1:"cris",dado2:"palmital",dado3:3},
  {dado1:"Leticia",dado2:"Londrina",dado3:4},
  {dado1:"Marcus",dado2:"marilia",dado3:5},
  {dado1:"vitor",dado2:"marilia",dado3:6}
];