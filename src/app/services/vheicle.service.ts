import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { VehicleRequest } from '../Dao/vehicle-request';
import { HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class VheicleService {

  

  constructor(private http: HttpClient) { 
    console.log("Servicio")
  }

  processVehicle(vehicleRequest : VehicleRequest){
    return  this.http.post('https://localhost:44381/api/vehicle',vehicleRequest,httpOptions)
  }
}
