import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { LotteryServiceService } from 'src/app/services/lottery-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  response: any;
  constructor(
    private data: LotteryServiceService,
    private http: HttpClient,
    
    ) {
    
  }
add(email: string, password: string, prefix: string, first_name: string, last_name: string, birthdate: string, phone_number: string) {
  console.log(email);
  console.log(password);
  console.log(prefix);
  console.log(first_name);
  console.log(last_name);
  console.log(birthdate);
  console.log(phone_number);

  let jsonObj = {
    email: email,
    password: password,
    prefix: prefix,
    first_name: first_name,
    last_name: last_name,
    birthdate: birthdate,
    phone_number: phone_number
  };

  // console.log(jsonObj);

  // Convert the JSON object to a JSON string
  let jsonString = JSON.stringify(jsonObj);
  
  // console.log(jsonString);
  
  // Send a POST request to the API endpoint
  this.http.post(this.data.apiEndpoint + "/users/add", jsonString, { observe: 'response' }).subscribe((response) => {
    console.log(response);
    console.log(JSON.stringify(response.status));
    console.log(JSON.stringify(response.body));
  
  });
}

}
