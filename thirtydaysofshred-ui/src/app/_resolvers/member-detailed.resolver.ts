import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { Member } from "../_models/member";
import { MembersService } from "../_services/members.service";

@Injectable({
  providedIn: 'root'
})
export class MemberDetailedResolver implements Resolve<Member> {

  constructor(private memberServer: MembersService) { }

  resolve(route: ActivatedRouteSnapshot): Observable<Member> {
    return this.memberServer.getMember(route.paramMap.get('username'));
  }

}
