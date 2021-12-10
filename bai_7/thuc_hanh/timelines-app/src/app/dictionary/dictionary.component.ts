import { Component, OnInit } from '@angular/core';
import {IWord} from "../iword";
import {DictionaryServiceService} from "../service/dictionary-service.service";

@Component({
  selector: 'app-dictionary',
  templateUrl: './dictionary.component.html',
  styleUrls: ['./dictionary.component.css']
})
export class DictionaryComponent implements OnInit {
  words: IWord[] = [];

  constructor(private dictionaryService: DictionaryServiceService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.words = this.dictionaryService.getAll();
  }

}
