import {Injectable} from '@angular/core';
import {IWord} from '../iword';

@Injectable({
  providedIn: 'root'
})
export class DictionaryServiceService {
  words: IWord[] = [
    {
      word: 'computer',
      mean: 'Máy tính'
    },
    {
      word: 'Summer',
      mean: 'Mùa hè'
    },
    {
      word: 'winter',
      mean: 'Mùa đông'
    }
  ]
  constructor() {
  }
  getAll() {
    return this.words;
  }
}
