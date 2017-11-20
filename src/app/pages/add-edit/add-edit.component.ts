import { Component, OnInit, ViewChild } from '@angular/core';
import { AddEditService } from './add-edit.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FileUploader } from 'ng2-file-upload';
import { url } from '../../globals/url';

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
    buttonText: string = "";
    @ViewChild('addModal') public addModal: ModalDirective;
    public uploader:FileUploader = new FileUploader({url: url + '/upload'});

    constructor(private _service: AddEditService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute){
        this.addForm = fb.group({
            title: [null, Validators.required],
            content: [null],
            image: [null]
        });
    }

    ngOnInit(): void {

        this.type = this.router.url.split('/')[2];

        switch (this.type) {
            case 'add':
                this.info = 'Add new review';
                this.buttonText = 'create review';
                break;
        
            case 'edit':
                this.info = 'Edit this review';
                this.buttonText = 'edit';
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
    }

    action(form: any){

        switch (this.type) {
            case 'add':
                this._service.addReview(form).subscribe(
                    result => {
                        this.hideChildModal();
                    },
                    error => {
                        console.log('error: ');
                        console.dir(error);
                    }
                );
                break;
        
            case 'edit':
                console.log('edit: ' + this.review._id);
                this._service.editReview(form, this.review._id).subscribe(
                    result => {
                        this.hideChildModal();
                    },
                    error => {
                        console.log('error');
                        console.dir(error);
                    }
                );
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

    delete(id: string): void {
        console.log('id: ' + id);
        this._service.deleteReview(id).subscribe(
            result => {
                this.hideChildModal();
            },
            error => {
                console.log('error');
                console.dir(error);
            }
        );
    }

    setUrl(name: string): void {
        let imageUrl = this.addForm.get('image');
        imageUrl.reset(name);
        console.dir(this.addForm);
    }

}