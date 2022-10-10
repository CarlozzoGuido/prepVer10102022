import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albertoAngela',
  templateUrl: './albertoAngela.component.html',
  styleUrls: ['./albertoAngela.component.css']
})
export class AlbertoAngelaComponent implements OnInit {
  names: string[];
  constructor() {
    this.names = ["trattore", "mietitrebbia", "ruspa", "betoniera", "rullo compressore", "autocarro", "gru", "cricchetto"];
   }

  ngOnInit(): void {
  }

}
