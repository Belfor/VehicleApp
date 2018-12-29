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
    console.log("Formulario enviado");
    console.log(this.vehicleRequest);
    this.vehicleService.processVehicle(this.vehicleRequest).subscribe( (data : any) =>{
      console.log(data);
      this.vehicleResponse.VehicleId = data.vehicleId;
      this.vehicleResponse.ReturnCode = VehicleValidationResultCode[VehicleValidationResultCode[data.returnCode]];
      console.log(VehicleValidationResultCode[1])
      console.log(data.returnCode)
      this.response = true;

      if (this.vehicleResponse.ReturnCode == VehicleValidationResultCode.Valid ){
        console.log("Valid")
        this.valid = true;
        this.vehicleResponse.TextCode = "Valid"
      }else{
        console.log("Invalid")
        this.valid = false;
        this.vehicleResponse.TextCode = "Invalid"
      }
    });
    this.vehicleRequest = new VehicleRequest()
  }

}
