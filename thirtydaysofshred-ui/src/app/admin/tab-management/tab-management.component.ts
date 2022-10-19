import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/_models/pagination';
import { TabParams } from 'src/app/_models/tabParams';
import { TabsService } from 'src/app/_services/tabs.service';
import { Tab } from '../../_models/tab';


@Component({
  selector: 'app-tab-management',
  templateUrl: './tab-management.component.html',
  styleUrls: ['./tab-management.component.css']
})
export class TabManagementComponent implements OnInit {
  tabs: Tab[];
  tabParams: TabParams;
  pagination: Pagination;
  currentSkillLevel: number;
  selectedDifficulty: string = "Any";


  constructor(private tabsService: TabsService) {
    this.tabParams = this.tabsService.getTabParams();
  }

  ngOnInit(): void {
    this.loadTabs();
  }

  loadTabs() {
    this.tabsService.setTabParams(this.tabParams);
    this.tabsService.getTabs(this.tabParams).subscribe(response => {
      this.tabs = response.result;
      this.pagination = response.pagination;
    })
  }

  addNewTab() {

  }

  skillArray(n: number) {
    return Array(n);
  }

  pageChanged(event: any) {
    this.tabParams.pageNumber = event.page;
    this.tabsService.setTabParams(this.tabParams);
    this.loadTabs();
  }

  setSkillLevel (n: number) {
    switch (n) {
      case 1:
        this.selectedDifficulty = "Beginner";
        break;
      case 2:
        this.selectedDifficulty = "Easy";
        break;
      case 3:
        this.selectedDifficulty = "Medium";
        break;
      case 4:
        this.selectedDifficulty = "Hard";
        break;
      case 5:
        this.selectedDifficulty = "Advanced";
        break;
      case 6:
        this.selectedDifficulty = "Any";
        break;
    }
    if (n < 6) {
      this.tabParams.minSkillLevel = n;
      this.tabParams.maxSkillLevel = n;
    } else {
      this.tabParams.minSkillLevel = 1;
      this.tabParams.maxSkillLevel = 5;
    }

    this.loadTabs();
  }

}
