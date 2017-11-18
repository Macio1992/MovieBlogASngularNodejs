import { Component, OnInit, ViewChild } from '@angular/core';
import { AddEditService } from './add-edit.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    selector: 'add-edit',
    templateUrl: './add-edit.component.html',
    styleUrls: ['./add-edit.scss'],
    providers: [ AddEditService ]
})

export class AddEditComponent implements OnInit {

    addForm: FormGroup;
    type: string;
    info: string;
    param: string = "";
    review: any;
    @ViewChild('addModal') public addModal: ModalDirective;

    constructor(private _service: AddEditService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute){
        this.addForm = fb.group({
            title: [null, Validators.required]
        });
    }

    ngOnInit(): void {

        this.type = this.router.url.split('/')[2];

        switch (this.type) {
            case 'add':
                this.info = 'Add new review';
                break;
        
            case 'edit':
                this.info = 'Edit this review';
                this.route.params.subscribe((params: Params) => {
                    this.param = params['id'];
                    this._service.getReview(this.param).subscribe(
                        review => {
                            this.review = review;
                            console.log('review:');
                            console.dir(review);
                        },
                        error => {
                            console.log('error:');
                            console.dir(error);
                        }
                    );
                });
                break;

            default:
                break;

            
        }
        console.log('type: ' + this.type);
        console.log('param: ' + this.param);
    }

    action(form: any){
        console.log('form:');
        console.dir(form);

        switch (this.type) {
            case 'add':
                this._service.addReview(form).subscribe(
                    result => {
                        console.log('result');
                        console.dir(result);
                    },
                    error => {
                        console.log('error: ');
                        console.dir(error);
                    }
                );
                break;
        
            case 'edit':
                console.log('edit');
                // this._service.editReview(form, this.id)
                break;

            default:
                break;
        }

        
    }

    public showChildModal():void {
		this.addModal.show();
	}
	
	public hideChildModal():void {
		this.addModal.hide();
		this.router.navigateByUrl('/pages/reviews');
	}

	ngAfterViewInit(): void {
		this.showChildModal();
	}


}