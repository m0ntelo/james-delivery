import { LocalStorageService } from './../../service/localStorage.service';
import { Component, OnInit } from '@angular/core';

import { Establishments } from './../../model/establishments.model';
import { AppService } from './../../service/app.service';

@Component({
  selector: 'app-establishments',
  templateUrl: './establishments.component.html',
  styleUrls: ['./establishments.component.less']
})
export class EstablishmentsComponent implements OnInit {

  establishments: Establishments[]

  constructor(private establishmentsService: AppService, private storageService: LocalStorageService) { }

  ngOnInit(): void {
    this.getEstablishments();
  }

  private getEstablishments(): void {
    this.establishmentsService.read().subscribe(response => {
      this.updateEstablishments(response);
    });
  }

  private updateEstablishments(response: Establishments[]): void {

    const estabelecimentosLocais = <Establishments[]>this.storageService.getLocalEstablishments();

    if (estabelecimentosLocais != null) {

      response.forEach(e => {

        const findElement = estabelecimentosLocais.find(item => item.id === e.id);

        if (findElement) {
          const indexElement = response.findIndex(item => item.id == findElement.id);
          if (indexElement > -1)
            response.splice(indexElement, 1, findElement);
        }
      });
    }

    this.establishments = response;

  }

}
