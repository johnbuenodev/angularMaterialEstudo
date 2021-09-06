import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

  status = false;
  value = 33;
  constructor() { }

  ngOnInit(): void {
  }

  alternaVisibilidade(){
    this.status = !this.status;
  }
  adicionar(){
    this.value++;
  }

}
