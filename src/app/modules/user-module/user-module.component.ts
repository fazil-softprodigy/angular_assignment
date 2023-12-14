import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserServicesService } from '../services/user-services.service';

@Component({
  selector: 'app-user-module',
  templateUrl: './user-module.component.html',
  styleUrls: ['./user-module.component.css']
})
export class UserModuleComponent {
  userId: string | undefined;

  constructor(private route: ActivatedRoute, private userService: UserServicesService) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.userId = params['id'];
      // Call API using this.userId and fetch related data
      // Check if this.userId is undefined and assign a default value if needed
      if (typeof this.userId === 'undefined') {
        // Assign a default value or handle the undefined case accordingly
        this.userId = ''; // For example, setting an empty string as the default value
      }
      this.userService.getUserDetails(this.userId).subscribe(data => {
        // Handle received data
      });
    });
  }
}


// import { ActivatedRoute } from '@angular/router';

// export class UserDetailsComponent implements OnInit {
//   userId: string;

//   constructor(private route: ActivatedRoute, private userService: UserService) { }

//   ngOnInit() {
//     this.route.queryParams.subscribe(params => {
//       this.userId = params['id'];
//       // Call API using this.userId and fetch related data
//       this.userService.getUserDetails(this.userId).subscribe(data => {
//         // Handle received data
//       });
//     });
//   }
// }

