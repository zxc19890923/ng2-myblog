import {Injectable} from "@angular/core";
@Injectable()
export class PageService {
  page:number;

  constructor() {
    this.page = 1;
  }

  changePage(currentPage) {
    this.page = currentPage;
    return currentPage;
  }
}
