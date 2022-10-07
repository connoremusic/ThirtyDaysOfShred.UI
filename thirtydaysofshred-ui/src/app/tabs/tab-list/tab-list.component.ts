import { Component, OnInit } from '@angular/core';
import { Tab } from '../../_models/tab';
import { TabsService } from '../../_services/tabs.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent implements OnInit {
  tabs: Tab[];


  constructor(private tabsService: TabsService) { }

  ngOnInit(): void {
    this.loadTabs();
  }

  loadTabs() {
    this.tabsService.getTabs().subscribe(response => {
      this.tabs = response;
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

}
