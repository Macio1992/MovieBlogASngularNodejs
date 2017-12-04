import { Component, OnInit, ViewChild } from '@angular/core';
import { ReviewService } from './review-single.service';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { Router, ActivatedRoute } from '@angular/router';
import { url } from '../../globals/url';

@Component({
    selector: 'review-single',
    templateUrl: './review-single.component.html',
    styleUrls: ['./review-single.scss'],
    providers: [ ReviewService ]
})

export class ReviewSingleComponent implements OnInit {

    sub: any;
    id: any;
    review: any;
    category: string;

    @ViewChild('singleModal') public singleModal: ModalDirective;

    constructor(private _service: ReviewService, private router: Router, private route: ActivatedRoute, ) {}

    ngOnInit(): void {
        this.sub = this.route.params.subscribe(params =>  {
            this.id = params.id;
            this.review = this._service.getReview(this.id).subscribe(
                result => {
                    this.review = result;
                    this.review.image = url + '/file/' + this.review.image;
                    this._service.getCategory(this.review.category).subscribe(
                        category => {
                            this.category = category.name;
                        },
                        error => {
                        }
                    )
                },
                error => {
                    console.log('error');
                    console.dir(error);
                }
            )
        });
        
    }

    public showChildModal():void {
		this.singleModal.show();
	}
	
	public hideChildModal():void {
		this.singleModal.hide();
		this.router.navigateByUrl('/pages/reviews');
	}

	ngAfterViewInit(): void {
		this.showChildModal();
	}


}