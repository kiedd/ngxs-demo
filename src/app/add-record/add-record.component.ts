import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddRecordAction } from '../state/actions/AddRecordAction';
import { RowViewModel } from '../viewmodels/rowViewModel';
import { ClearTableAction } from '../state/actions/ClearTableAction';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  public recordName: string = '';
  public recordComment: string = '';

  constructor(private store: Store) {}

  ngOnInit() {
  }

  public onAdd(){
    this.store.dispatch(new AddRecordAction(
      new RowViewModel({
        name: this.recordName,
        comment: this.recordComment,
        createdOn: new Date()
      })
    ));
    this.recordName = '';
    this.recordComment = '';
  }

  public onClear(){
    this.store.dispatch(new ClearTableAction());
  }

}
