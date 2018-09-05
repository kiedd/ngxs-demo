export class RemoveRecordAction {
    public static type: string = 'Remove record';
    public index: number;
    constructor(index: number){
        this.index = index;
    }
}