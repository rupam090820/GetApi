import { Component, OnInit } from '@angular/core';
//import services
import { ApiService } from '../api.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  public recivedApi: any = [];
  public recivedApi2: any = [];
  public p: number = 1;
  public total: any = '';
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.service.getApi().subscribe((item: any) => {
      this.recivedApi = item;
      // console.log("service component recived api");
       console.log(this.recivedApi);
      this.total = this.recivedApi.length;
      this.recivedApi2 = item['_links'];
      // console.log(this.recivedApi2);
    });
  }
}
