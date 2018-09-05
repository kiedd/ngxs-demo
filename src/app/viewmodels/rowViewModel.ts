
export interface IRowViewModel {
    name: string;
    comment: string;
    createdOn: Date;
}

export class RowViewModel implements IRowViewModel {
    public name: string;
    public comment: string;
    public createdOn: Date;

    constructor(initObj?: IRowViewModel){
        if (initObj){
            this.name = initObj.name || '';
            this.comment = initObj.comment || '';
            this.createdOn = initObj.createdOn;
        }
    }
}