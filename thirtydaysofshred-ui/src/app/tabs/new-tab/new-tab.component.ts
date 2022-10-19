import { Component, OnInit } from '@angular/core';
import { TabsService } from 'src/app/_services/tabs.service';

@Component({
  selector: 'app-new-tab',
  templateUrl: './new-tab.component.html',
  styleUrls: ['./new-tab.component.css']
})
export class NewTabComponent implements OnInit {
  radioModel = 'Medium';

  constructor(private tabsService: TabsService) { }

  ngOnInit(): void {
  }

  addNewTab() {

  }

}
