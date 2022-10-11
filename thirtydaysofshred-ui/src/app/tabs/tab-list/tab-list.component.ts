import { Component, OnInit } from '@angular/core';
import { Pagination } from 'src/app/_models/pagination';
import { TabParams } from 'src/app/_models/tabParams';
import { User } from 'src/app/_models/user';
import { Tab } from '../../_models/tab';
import { TabsService } from '../../_services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent implements OnInit {
  tabs: Tab[];
  pagination: Pagination;
  tabParams: TabParams;
  user: User;
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

  downloadTab(url: string) {
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = url;
    link.download = url;
    document.body.appendChild(link);
    link.click();
    link.remove();
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
