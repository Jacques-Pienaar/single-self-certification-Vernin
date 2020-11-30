import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { StyleService } from 'src/app/_shared/services/style.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class HomeComponent implements OnInit {
  //@Output () mode = new EventEmitter<boolean>();
  data: any;
  entity: any;
  localUrl: string = '';
  constructor(private styleService: StyleService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    if(this.entity == null){
      this.entity = 'default';
    }

    this.route.queryParamMap.subscribe(queryParams => {
      this.entity = queryParams.get("key")
      this.localUrl = `../../../assets/${this.entity}.scss`;
      console.log(this.entity);
    })
    this.styleService
      .getStyleUri()
      .then((data) => {
        this.data = data;
      })
      .catch((err) => {
        console.log(err);
      });
  }

  toggleStyle() {
    if (this.entity === "you-source"){
      this.entity = "ANZ";
    }
    else
    {
      this.entity  = 'you-source';
    }
    console.log(this.entity);
  }



}
