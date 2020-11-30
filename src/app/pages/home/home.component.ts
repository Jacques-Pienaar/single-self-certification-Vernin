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
  setmode = "you-source";
  localUrl: string = '';
  constructor(private styleService: StyleService, private sanitizer: DomSanitizer, private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(queryParams => {
      this.entity = queryParams.get("key")
      this.localUrl = `../../../assets/${this.entity}.scss`;
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
    if (this.setmode === "you-source"){
      this.setmode = "ANZ";
    }
    else
    {
      this.setmode = "you-source";
    }
    console.log(this.setmode);
  }


  //Method that gets the entity from the API URL
  getEntity(){
    var arr = this.data.url.split('/');
    var entityArr = arr[arr.length-1].split('.');
    var entity = entityArr[0];
    console.log(entity);
    return entity;
  }
}
