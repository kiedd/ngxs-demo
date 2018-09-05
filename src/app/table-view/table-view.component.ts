import { Component, OnInit, OnDestroy } from '@angular/core';
import { RowViewModel } from '../viewmodels/rowViewModel';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { TableState, TableStateModel } from '../state/TableState';
import { RemoveRecordAction } from '../state/actions/RemoveRecordAction';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.css']
})
export class TableViewComponent implements OnInit, OnDestroy {
  public viewModel: RowViewModel[] = [];
  
  @Select(TableState) tableState: Observable<TableStateModel>;
  private subscription: Subscription;

  constructor(private store: Store) {}
  
  ngOnInit() {
    this.subscription = this.tableState.subscribe(data => {
      console.log(data);
      this.viewModel = data.rows;
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onRemoveRecord(index: number){
    this.store.dispatch(new RemoveRecordAction(index));
  }
}
