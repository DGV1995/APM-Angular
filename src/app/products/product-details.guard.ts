import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailsGuard implements CanActivate {
  constructor(private route: Router) {}

  // The ActivatedRouteSnapshot contains information about a route at any particular moment in time.
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let id = +next.url[1].path; // Get first param of the route
    /*if (isNaN(id) || id < 1) {
      alert("Invalid product id");
      this.route.navigate(['/products']);
      return false;
    }*/
    return true;
  }
}
