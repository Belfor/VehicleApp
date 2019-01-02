import { Component, OnInit } from '@angular/core';
 
import { VehicleResponse,VehicleValidationResultCode } from '../Dao/process-vehicle-response';
 
import { VehicleRequest } from '../Dao/vehicle-request';

 
import { VheicleService } from '../services/vheicle.service';

@Component({
  selector: 'app-vehicle-form',
  templateUrl: './vehicle-form.component.html',
  styleUrls: ['./vehicle-form.component.css']
})
export class VehicleFormComponent implements OnInit {

  response = false;

  valid = false;

  vehicleResponse  = new VehicleResponse();

  vehicleRequest = new VehicleRequest();

  constructor(private vehicleService : VheicleService) { }

  ngOnInit() {
  }

  process(){
    this.vehicleService.processVehicle(this.vehicleRequest).subscribe( (data : any) =>{
      this.vehicleResponse.VehicleId = data.vehicleId;
      this.vehicleResponse.ReturnCode = VehicleValidationResultCode[VehicleValidationResultCode[data.returnCode]];
      this.response = true;

      if (this.vehicleResponse.ReturnCode == VehicleValidationResultCode.Valid ){
     
        this.valid = true;
        this.vehicleResponse.TextCode = "Valid";
      }else{
       
        this.valid = false;
        this.vehicleResponse.TextCode = "Invalid";
      }
    },
    error => {
      console.log("Error Server");
      this.valid = false;
      this.vehicleResponse.VehicleId = 0;
      this.vehicleResponse.ReturnCode = VehicleValidationResultCode.NotSpecified;
      this.vehicleResponse.TextCode = "The server does not respond";
    });
    this.vehicleRequest = new VehicleRequest()
  }

}
