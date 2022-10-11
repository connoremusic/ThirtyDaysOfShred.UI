import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Tab } from 'src/app/_models/tab';
import { MembersService } from 'src/app/_services/members.service';
import { faFire } from '@fortawesome/free-solid-svg-icons'
import { faFireFlameCurved } from '@fortawesome/free-solid-svg-icons'
import { faGuitar } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-tab-details',
  templateUrl: './tab-details.component.html',
  styleUrls: ['./tab-details.component.css']
})
export class TabDetailsComponent implements OnInit {
  @Input() tabs: Tab[];
  faFire = faFire;
  faFireFlameCurved = faFireFlameCurved;
  faGuitar = faGuitar;

  constructor(private memberService: MembersService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  addGuitarTabFavorite(guitarTabId: number) {
    this.memberService.addGuitarTabFavorite(guitarTabId).subscribe({
      next: () => {
        this.toastr.success('Added to favorites')
      }
    })
  }

  skillArray(n: number) {
    return Array(n);
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

  isNew(date: Date) {
    let tabDate = new Date(date);
    let now = Date.now();
    let nowDate = new Date(now);
    let cutoffDate = new Date(nowDate.setDate(nowDate.getDate() - 7));

    if (tabDate.getDate() - cutoffDate.getDate() > 0) return true;

    return false;
  }

}
