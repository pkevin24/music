import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit {
  data=['Artist : Old town road','Album : Lil Nas X',' Duration : 2:04 mins','Genre : rock']

  constructor() { }

  ngOnInit(): void {
  }

}
