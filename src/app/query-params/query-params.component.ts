import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.css']
})
export class QueryParamsComponent {
  filteredProducts: any[] = [];
  titleFilter: string = '';
  minPriceFilter: number = 1;
  maxPriceFilter: number = 100;
  isLoading:boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductsService
  ) { }

  ngOnInit(): void {
    this.isLoading=true;
    this.route.queryParams.subscribe((params: Params) => {
      this.minPriceFilter = params['min_price'] ? +params['min_price'] : 10;
      this.maxPriceFilter = params['max_price'] ? +params['max_price'] : 1000;
      this.getFilteredProducts();
    });
  }

  getFilteredProducts(): void {

    this.isLoading=true;
    const queryParams = {
      title: this.titleFilter,
      min_price: this.minPriceFilter.toString(),
      max_price: this.maxPriceFilter.toString()
    };

    this.productService.getProductsForSale(queryParams)
      .subscribe((products: any[]) => {
        this.isLoading=false;
        this.filteredProducts = products;
      });
  }

  applyFilters(): void {
    const queryParams = {
      title: this.titleFilter,
      min_price: this.minPriceFilter.toString(),
      max_price: this.maxPriceFilter.toString()
    };

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: queryParams,
      queryParamsHandling: 'merge'
    });
  }
}
