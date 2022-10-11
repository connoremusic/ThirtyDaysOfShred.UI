export class TabParams {
  minSkillLevel = 1;
  maxSkillLevel = 5;
  searchString: string;
  pageNumber = 1;
  pageSize = 5;
  orderBy = 'created';

  constructor() {
    this.searchString = "";
  }
}
