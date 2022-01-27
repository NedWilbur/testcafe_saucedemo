export interface IUser {
    userName: string;
    password: string;
}

export const standardUser: IUser = { userName: 'standard_user', password: 'secret_sauce'};
export const lockedUser: IUser = { userName: 'locked_out_user', password: 'secret_sauce'};