import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-FilterPipe',
  templateUrl: './FilterPipe.component.html',
  styleUrls: ['./FilterPipe.component.css'],
})
export class FilterPipeComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private readonly user: UsersService
  ) {}
  data: any = [];
  searchString: string = '';
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isLoading = true;
    this.user.getUsersFromHttp().subscribe((response) => {
      this.isLoading = false;
      this.data = response?.users;
    });
  }
}
