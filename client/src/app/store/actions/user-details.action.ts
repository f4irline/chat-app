import { Action } from '@ngrx/store';

export const UPDATE_USERNAME = '[USERDETAILS] Update username';
export const UPDATE_ROOM = '[USERDETAILS] Update room';
export const RESET_DETAILS = '[USERDETAILS] Reset details';

export class UpdateRoom implements Action {
    readonly type = UPDATE_ROOM;

    constructor(public payload: number) {}
}

export class UpdateUsername implements Action {
    readonly type = UPDATE_USERNAME;

    constructor(public payload: string) {}
}

export class ResetDetails implements Action {
    readonly type = RESET_DETAILS;

    constructor() {}
}

export type Actions =  UpdateUsername | UpdateRoom | ResetDetails;
