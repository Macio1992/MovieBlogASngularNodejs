import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { LoginService } from './login.service';
import { Location } from '@angular/common';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { URLSearchParams } from "@angular/http";
import { Router } from '@angular/router';
import { FacebookService, InitParams, LoginResponse} from 'ngx-facebook';
import { ToastyService, ToastyConfig, ToastOptions, ToastData} from 'ng2-toasty';

@Component({
    selector: 'login',
	templateUrl: './login.component.html',
	encapsulation: ViewEncapsulation.None,
	styleUrls: [
		'./login.component.scss',
		'../../../../node_modules/ng2-toasty/style-bootstrap.css'
	],
	providers: [ LoginService ]
})

export class LoginComponent implements OnInit{

	loginForm: FormGroup;
	@ViewChild('loginModal') public loginModal: ModalDirective;

	constructor(
		private _location: Location,
		private fb: FormBuilder,
		private _service: LoginService,
		private router: Router,
		private facebook: FacebookService,
		private toastyService: ToastyService,
		private toastyConfig: ToastyConfig
	){
		this.toastyConfig.theme = 'bootstrap';
		this.loginForm = fb.group({
			'email': ['', Validators.compose([Validators.required, Validators.email])],
			'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
		});

		let initParams: InitParams = {
			appId: '1735370773431859',
			xfbml: true,
			version: 'v2.8'
		};

		facebook.init(initParams);
		
	}

	ngOnInit(): void {}

	addToast(message: string): void {
		let toastOptions: ToastOptions = {
			title: 'Błąd',
			msg: message,
			showClose: true,
			timeout: 5000,
			theme: 'bootstrap',
			onAdd: (toast: ToastData) => {},
			onRemove: function(toast: ToastData) {}
		};

		this.toastyService.error(toastOptions);
	}

	login(form: any): void {
		console.dir(form);
		
		let body = new URLSearchParams();
		body.set('email', form.email);
		body.set('password', form.password);

		this._service.login(body).subscribe(
			data => {
				console.log('token:' + data.token);
				localStorage.setItem('movieUserToken', JSON.stringify({ token: data.token, email: form.email }));
				this.hideChildModal();
			},
			error => {
				this.addToast('Zły login lub hasło');
				console.log('error:' + JSON.parse(error._body).message);
				console.dir(JSON.parse(error._body));
			}
		);
	}

	loginWithFacebook(): void {
		this.facebook.login().then(
			(response: LoginResponse) => {
				console.dir(response);
				localStorage.setItem('movieUserToken', JSON.stringify({ token: response.authResponse.accessToken }));
				this.hideChildModal();
			}
		)
		.catch((error: any) => console.error(error))
	}

	getProfile(): void {
		this.facebook.api('/me').then(
			(res: any) => {
				console.log('Got users profile');
				console.dir(res);
			}
		).catch(this.handleError);
	}

	private handleError(error: any): void {
		console.log('error:');
		console.dir(error);
	}

	public showChildModal():void {
		this.loginModal.show();
	}
	
	public hideChildModal():void {
		this.loginModal.hide();
		this.router.navigateByUrl('/pages/home');
	}

	ngAfterViewInit(): void {
		this.showChildModal();
	}

}