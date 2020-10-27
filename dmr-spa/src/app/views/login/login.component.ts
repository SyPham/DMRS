import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../_core/_service/auth.service';
import { AlertifyService } from '../../_core/_service/alertify.service';
import { Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { UserForLogin } from 'src/app/_core/_model/user';
import { environment } from 'src/environments/environment';
const ADMIN = 1;
const SUPPER_ADMIN = 78;
const SUPERVISOR = 2;
const STAFF = 3;
const WORKER = 4;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: UserForLogin = {
    username: '',
    password: '',
    systemCode: environment.systemCode
  };
  uri: any;
  level: number;
  routerLinkAdmin = [
    '/setting/account-1',
    '/setting/account-2',
    '/setting/building',
    '/setting/supplier',
    '/setting/ingredient',
    '/setting/kind',
    '/setting/part',
    '/setting/building-setting',
    '/setting/material',
    //
    '/establish/bpfc',
    //
    '/manage/bpfc-status',
    '/manage/bpfc-schedule',
    '/manage/workplan',
    '/manage/establish-record',

    '/execution/todolist',
    '/execution/addition',

    //
    '/report/consumption',
  ];
  routerLinkSuperAdmin = [
    '/setting/costing',
    '/report/output-quantity',
  ];
  routerLinkSupervisor = [
    '/setting/account-1',
    '/setting/account-2',
    '/setting/building',
    '/setting/supplier',
    '/setting/ingredient',
    '/setting/building-setting',
    '/setting/kind',
    '/setting/part',
    '/setting/material',
    //
    '/establish/bpfc',
    //
    '/manage/bpfc-status',
    '/manage/bpfc-schedule',
    '/manage/workplan',
    '/manage/establish-record',
    //
    '/report/consumption',

    '/execution/todolist',
    '/execution/addition',
  ];
  routerLinkStaff = [
    '/establish/bpfc',
    //
    '/manage/bpfc-status',
    '/manage/bpfc-schedule',
    '/manage/workplan',
    '/manage/establish-record',
    //
    '/report/consumption',

    '/execution/todolist',
    '/execution/addition',
  ];
  routerLinkWorker = [
    '/execution/todolist',
    '/execution/addition',
  ];
  remember = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private cookieService: CookieService,
    private alertifyService: AlertifyService
  ) {
    if (this.cookieService.get('remember') !== undefined) {
      if (this.cookieService.get('remember') === 'Yes') {
        this.user = {
          username: this.cookieService.get('username'),
          password: this.cookieService.get('password'),
          systemCode: environment.systemCode
        };
        this.remember = true;
      }
    }
    this.route.queryParams.subscribe(params => {
      this.uri = params.uri;
    });
  }
  role: number;
  ngOnInit(): void {
  }
  onChangeRemember(args) {
    this.remember = args.target.checked;
  }
  login(): void {
    this.authService.login(this.user).subscribe(
      next => {
        this.role = JSON.parse(localStorage.getItem('user')).User.Role;
        this.alertifyService.success('Login Success!!');
        if (this.remember) {
          this.cookieService.set('remember', 'Yes') ;
          this.cookieService.set('username', this.user.username );
          this.cookieService.set('password', this.user.password);
          this.cookieService.set('systemCode', this.user.systemCode.toString());
        } else {
          this.cookieService.set('remember', 'No');
          this.cookieService.set('username', '');
          this.cookieService.set('password', '');
          this.cookieService.set('systemCode', '');
        }
        this.authService.getBuildingByUserID(JSON.parse(localStorage.getItem('user')).User.ID).subscribe((res: any) => {
          res = res || {};
          localStorage.setItem('level', JSON.stringify(res));
          this.level = res.level;
          if (this.level === WORKER) {
            const currentLang = localStorage.getItem('lang');
            if (currentLang) {
              localStorage.setItem('lang', currentLang);
            } else {
              localStorage.setItem('lang', 'vi');
            }
          } else {
            const currentLang = localStorage.getItem('lang');
            if (currentLang) {
              localStorage.setItem('lang', currentLang);
            } else {
              localStorage.setItem('lang', 'en');
            }
          }
          this.checkRole();
        });
      },
      error => {
        this.alertifyService.error('Login failed!!');
      },
      () => {
      }
    );
  }
  checkRouteSuperAdmin(uri) {
    let flag = false;
    this.routerLinkSuperAdmin.forEach(element => {
      if (uri.includes(element)) {
        flag = true;
      }
    });
    return flag;
  }
  checkRouteAdmin(uri) {
    let flag = false;
    this.routerLinkAdmin.forEach(element => {
      if (uri.includes(element)) {
        flag = true;
      }
    });
    return flag;
  }
  checkRouteSupervisor(uri) {
    let flag = false;
    this.routerLinkSupervisor.forEach(element => {
      if (uri.includes(element)) {
        flag = true;
      }
    });
    return flag;
  }
  checkRouteStaff(uri) {
    let flag = false;
    this.routerLinkStaff.forEach(element => {
      if (uri.includes(element)) {
        flag = true;
      }
    });
    return flag;
  }
  checkRouteWorker(uri) {
    let flag = false;
    this.routerLinkWorker.forEach(element => {
      if (uri.includes(element)) {
        flag = true;
      }
    });
    return flag;
  }
  checkRole() {
    const uri = decodeURI(this.uri);
    if (this.level === SUPPER_ADMIN) {
      if (uri !== 'undefined') {
        if (this.checkRouteSuperAdmin(uri)) {
          this.router.navigate([uri]);
        } else {
          this.router.navigate(['/ec/setting/costing']);
        }
      } else {
        this.router.navigate(['/ec/setting/costing']);
      }
    } else if (this.level === ADMIN) {
      if (uri !== 'undefined') {
        if (this.checkRouteAdmin(uri)) {
          this.router.navigate([uri]);
        } else {
          this.router.navigate(['/ec/establish/bpfc']);
        }
      } else {
        this.router.navigate(['/ec/establish/bpfc']);
      }
    } else if (this.level === SUPERVISOR) {
      if (uri !== 'undefined') {
        if (this.checkRouteSupervisor(uri)) {
          this.router.navigate([uri]);
        } else {
          this.router.navigate(['/ec/establish/bpfc']);
        }
      } else {
        this.router.navigate(['/ec/establish/bpfc']);
      }
    } else if (this.level === STAFF) {
      if (uri !== 'undefined') {
        if (this.checkRouteStaff(uri)) {
          this.router.navigate([uri]);
        } else {
          this.router.navigate(['/ec/establish/bpfc']);
        }
      } else {
        this.router.navigate(['/ec/establish/bpfc']);
      }
    } else if (this.level === WORKER) {
      if (uri !== 'undefined') {
        if (this.checkRouteWorker(uri)) {
          this.router.navigate([uri]);
        } else {
          this.router.navigate(['/ec/execution/todolist']);
        }
      } else {
        this.router.navigate(['/ec/execution/todolist']);
      }
    }
  }
}
