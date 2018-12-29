export enum VehicleValidationResultCode {
 
    NotSpecified ,
    Invalid ,
    Valid 
}

export class VehicleResponse {

    VehicleId : number;

    ReturnCode : VehicleValidationResultCode;

    TextCode : string;
}
