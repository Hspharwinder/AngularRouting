import { Component, OnInit } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
  selector: 'app-emp',
  template: `
    <div>
      emp works!
    </div>

    <div *ngFor='let emp of emp'>
    <span>{{emp.name}}</span>
    </div>
  `,
  styles: []
})
export class EmpComponent implements OnInit {

  constructor(private _service : EmpService) { }
  emp:any[];
  ngOnInit() {
    this.emp = this._service.getEmp();
  }

}
