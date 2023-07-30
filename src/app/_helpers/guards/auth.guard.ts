import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { StorageService } from "src/app/_services/storage.service";



@Injectable({
    providedIn: "root",
})

export class AuthGuard implements CanActivate {
    constructor(private storage: StorageService,
                private router: Router){}


    canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot): boolean  {
        
        if (! this.storage.isLoggedIn()){
            this.router.navigate(['/login']);
            return false;
        }
        return this.storage.isLoggedIn();
    }

}

