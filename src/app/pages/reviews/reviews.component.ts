import { Component, OnInit, ElementRef } from '@angular/core';
import { ReviewsService } from './reviews.service';
import { FacebookService, InitParams, LoginResponse, LoginOptions, UIResponse, UIParams, FBVideoComponent } from 'ngx-facebook';
import { url } from '../../globals/url';

@Component({
    selector: 'reviews',
    templateUrl: './reviews.component.html',
    styleUrls: ['./reviews.component.scss'],
    providers: [ ReviewsService ]
})

export class ReviewsComponent implements OnInit{

    reviews: any[];
    isLastPage: boolean = true;
    page: number = 1;

    constructor(private _service: ReviewsService, private fb: FacebookService){
        let initParams: InitParams = {
			appId: '1735370773431859',
			xfbml: true,
			version: 'v2.8'
		};

		fb.init(initParams);
    }

    ngOnInit(): void {

        this._service.getReviews(this.page).subscribe(
            result => {
                this.reviews = result.reviews;
                this.reviews.forEach(
                    obj => {
                        if(obj.image)
                            obj.image = url + '/file/' + obj.image;
                        this._service.getCategory(obj.category).subscribe(
                            category => {
                                obj.category = category.name;
                            },
                            error => {
                                console.log('error');
                                console.dir(error);
                            }
                        );
                    }
                );
                this.isLastPage = result.isLastPage;
            },
            error => {
                console.log('error:');
                console.dir(error);
            }
        );
    }


    showMore(): void {
        if(!this.isLastPage){
            this.page++;
            this._service.getReviews(this.page).subscribe(
                result => {
                    this.reviews = this.reviews.concat(result.reviews);
                    this.isLastPage = result.isLastPage;
                }
            );
        }
    }

    share(id: number) {
        
        const options: UIParams = {
            method: 'share',
            href: `https://restapimovies.herokuapp.com/pages/review/${id}`
        };

        this.fb.ui(options)
            .then((res: UIResponse) => {
            console.log('Got the users profile', res);
            })
            .catch(this.handleError);

    }

    private handleError(error) {
        console.error('Error processing action', error);
    }

    // setCategory(id: string): string {
    //     let cat: string = '';
    //     this._service.getCategory(id).subscribe(
    //         category => {
    //             cat = category.name;
    //         },
    //         error => {
    //             cat = 'error';
    //         }
    //     );

    //     return cat;
    // }
}