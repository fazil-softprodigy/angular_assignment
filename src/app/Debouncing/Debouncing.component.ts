import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, Subject, switchMap } from 'rxjs';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-Debouncing',
  templateUrl: './Debouncing.component.html',
  styleUrls: ['../FilterPipe/FilterPipe.component.css'],
})
export class DebouncingComponent implements OnInit {
  isLoading: boolean = false;
  products: any[] = [];
  private searchText$ = new Subject<string>();

  constructor(private readonly productService: ProductsService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe((response) => {
      this.products = response.products;
      this.isLoading = false;
    });
    this.searchText$.pipe(
      debounceTime(1100),
      distinctUntilChanged(),
      switchMap((text: string) => {
        this.isLoading=true;
        return this.productService.getProducts(text)
      })
    ).subscribe(response=>{
      this.products = response.products;
      this.isLoading=false;
    })
  }

  searchProduct(text:string){
    this.searchText$.next(text);
  }
}
