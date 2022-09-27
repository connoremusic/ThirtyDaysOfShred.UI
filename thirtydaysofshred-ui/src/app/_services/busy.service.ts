import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestcount = 0;

  constructor(private spinnerService: NgxSpinnerService) { }

busy() {
  this.busyRequestcount++;
  this.spinnerService.show(undefined, {
    type: 'line-scale',
    bdColor: 'rgba(0, 0, 0, 0.5)',
    color: '#c80f0f'
  });
}

idle() {
  this.busyRequestcount--;
  if (this.busyRequestcount <= 0) {
    this.busyRequestcount = 0;
    this.spinnerService.hide();
  }
}

}
