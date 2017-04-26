import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router,
              public route : ActivatedRoute) { }

  type;

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.type = params['type'];
    });

    // this.type = this.route.snapshot.params['type'];
  }

  GoFlot() {
    // this.router.navigateByUrl('/charts/flot');
    this.router.navigate(['/charts', 'flot'])
  }

  GoNext(num: number) {
    let nextid = +this.type + num;

    // this.router.navigate(['/cards', nextid]);
    // this.router.navigateByUrl('/cards/' + nextid);

    this.router.navigate(['..', nextid], {
      relativeTo: this.route
    });

  }

}
