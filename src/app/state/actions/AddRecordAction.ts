import { RowViewModel } from "../../viewmodels/rowViewModel";

export class AddRecordAction {
    public static type: string = 'Add new record';
    public record: RowViewModel;
    constructor(record: RowViewModel){
        this.record = record;
    }
}