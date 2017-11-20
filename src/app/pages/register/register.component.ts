import { Component, OnInit, ViewChild } from '@angular/core';
import { RegisterService } from './register.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { URLSearchParams } from "@angular/http";
import { EqualPasswordValidator } from '../../theme/validators';
import { Router } from '@angular/router';

@Component({
	selector: 'register',
	templateUrl: './register.component.html',
	styleUrls: ['./register.component.scss'],
	providers: [ RegisterService ]
})

export class RegisterComponent implements OnInit {

	registerForm: FormGroup;
	@ViewChild('registerModal') public registerModal: ModalDirective;

	constructor(private _service: RegisterService, private fb: FormBuilder, private router: Router){
		this.registerForm = fb.group({
			"email": ['', Validators.compose([Validators.required, Validators.email])],
			"fullName": ['', Validators.compose([Validators.required, Validators.minLength(5)])],
			'passwords': fb.group({
	        	'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
	        	'repeatPassword': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
	      	}, {validator: EqualPasswordValidator.validate('password', 'repeatPassword')})
		});
	}

	ngOnInit(): void {
		
	}

	register(form: any){
		console.dir(form);

		let body = new URLSearchParams();
		
		body.set('email', form.email);
		body.set('password', form.passwords.password);
		body.set('fullName', form.fullName);

		console.dir(body);

		this._service.register(body).subscribe(
			data => {
				console.log('data:');
				console.dir(data);
				this.router.navigate(['/pages/login']);
			},
			error => {
				console.log('error:');
				console.dir(error);
			}
		)

	}

	public showChildModal():void {
		this.registerModal.show();
	}
	
	public hideChildModal():void {
		this.registerModal.hide();
		this.router.navigateByUrl('/pages/home');
	}

	ngAfterViewInit(): void {
		this.showChildModal();
	}

}