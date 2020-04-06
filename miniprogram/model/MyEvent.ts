export interface MyEvent{
    type: string;
    timeStamp: number,
    detail: any,
    target: MyEventTarget,
    curreentTarget: MyEventTarget,
}

export interface MyEventTarget{
    id: string;
    dataset: any;
}