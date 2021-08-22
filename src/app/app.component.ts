import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
    title = 'FastIssue';
    @ViewChild('issue') textarea: ElementRef | undefined;

    repositories = [
        's',
        'k',
        'f',
    ]

    constructor(
        private http: HttpClient,
        // private octokit: Octokit,
    ) {
    }


    ngOnInit(): void {
        //this.getRepositories();
        //this.getShit();
    }

    // public getRepositories(): void {

    //     const githubUrl = 'https://github.com/login/oauth/authorize';
    //     const httpOptions = {
    //         headers: new HttpHeaders({
    //             'Access-Control-Allow-Origin': '*',
    //             'Authorization': 'authkey',
    //         }),
    //         params: new HttpParams().set(
    //             'client_id', 'Iv1.f51fa8fc5f0f37d2'
    //         ),
    //     };

    //     this.http.get(githubUrl, httpOptions).subscribe(
    //         res => {
    //             console.log(res);
    //         },
    //         error => {
    //             console.error(error);
    //         }
    //     );
    // }

    public trySendIssue(): void {
        console.log(this.textarea?.nativeElement.value);
    }

    // private getShit(): void {
    //     this.octokit.auth().then(
    //         res => {
    //             console.log(res);
    //         },
    //         error => {
    //             console.error(error);
    //         }
    //     );
    // }
}


