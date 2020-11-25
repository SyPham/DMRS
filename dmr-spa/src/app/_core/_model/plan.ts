export interface Plan {
    id: number;
    buildingID: number;
    hourlyOutput: number;
    workingHour: number;
    BPFCEstablishID: number;
    BPFCName: string;
    dueDate: any;
}
export interface Consumtion {
    id: number;
    modelName: string;
    modelNo: string;
    articleNo: string;
    process: string;
    glue: string;
    std: number;
    qty: number;
    line: string;
    totalConsumption: number;
    realConsumption: number;
    diff: number;
    percentage: number;
    dueDate: Date;
    mixingDate: Date;
}
