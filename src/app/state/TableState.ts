import { State, Action, StateContext } from '@ngxs/store';
import { RowViewModel } from '../viewmodels/rowViewModel';
import { AddRecordAction } from './actions/AddRecordAction';
import { ClearTableAction } from './actions/ClearTableAction';
import { RemoveRecordAction } from './actions/RemoveRecordAction';

export class TableStateModel {
    rows: RowViewModel[] = new Array<RowViewModel>();
}

@State<TableStateModel>({
  name: 'table',
  defaults: {
      rows: []
  }
})
export class TableState {
    @Action(AddRecordAction)
        addRecord(ctx: StateContext<TableStateModel>, action: AddRecordAction) {
            const state = ctx.getState();
            state.rows.push(action.record)
            ctx.setState(state);
        }
    @Action(ClearTableAction)
        clearTable(ctx: StateContext<TableStateModel>) {
            ctx.setState(new TableStateModel());
        }
    @Action(RemoveRecordAction)
        removeRecord(ctx: StateContext<TableStateModel>, action: RemoveRecordAction) {
            const state = ctx.getState();
            state.rows.splice(action.index, 1);
            ctx.setState(state);
        }
}