import { Establishments } from './../../model/establishments.model';
import { LocalStorageService } from './../../service/localStorage.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

import { AppService } from '../../service/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-single-establishment',
  templateUrl: './single-establishment.component.html',
  styleUrls: ['./single-establishment.component.less']
})
export class SingleEstablishmentComponent implements OnInit {

  establishments: Establishments;
  establishmentsLocal: Establishments[] = [];

  banco: Array<Object> = ['Ítau', 'Santander', 'Bradesco'];
  cidade: Array<Object> = ['Curitiba', 'Sao Paulo', 'Porto Alegre', 'Rio de Janeiro'];
  tConta: Array<Object> = ['Conta Corrente', 'Poupança'];
  sAutomatico: Array<Object> = ['Sim', 'Não'];

  formEstablishments: FormGroup;

  constructor(
    private storageService: LocalStorageService,
    private establishmentsService: AppService,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.createForm(new Establishments())
    this.getEstablishments()
  }

  getEstablishments(): void {

    const id = this.route.snapshot.params['id'];
    this.establishmentsService.readById(id).subscribe((resource) => {

      this.establishments = resource;

      if (this.findByItemLocalStorage(resource.id)) {
        this.establishments = this.findByItemLocalStorage(resource.id);
      }

      this.formEstablishments.patchValue(this.establishments);

    })
  }

  onSubmit(): void {

    const newEstablishments = this.formEstablishments.value;

    if (this.storageService.getLocalEstablishments() != null) {
      this.establishmentsLocal = [].concat(this.storageService.getLocalEstablishments());
    }

    const oldEstablishments = this.establishmentsLocal.find(item => item.id === newEstablishments.id);

    if (oldEstablishments) {
      const indexElement = this.establishmentsLocal.indexOf(oldEstablishments);
      this.establishmentsLocal.splice(indexElement, 1, newEstablishments);
    }
    else {
      this.establishmentsLocal.push(newEstablishments);
    }

    this.storageService.setLocalEstablishments(this.establishmentsLocal);
    this.establishments = newEstablishments;
    this.establishmentsService.showMessage("Estabelecimento atualizado com sucesso!");

  }

  createForm(p: Establishments) {

    this.formEstablishments = this.formBuilder.group({

      id: [null, [Validators.required]],
      index: [null, [Validators.required]],
      guid: [null, [Validators.required]],
      picture: [null, [Validators.required]],
      name: [null, [Validators.required, Validators.minLength(5), Validators.maxLength(15)]],
      email: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      address: [null, [Validators.required]],
      registered: [null, [Validators.required]],
      latitude: [null, [Validators.required]],
      longitude: [null, [Validators.required]],
      city: [null, [Validators.required]],
      bank: [null, [Validators.required]],
      tAccount: [null, [Validators.required]],
      cpf: [null, [Validators.required]],
      agency: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      digitAgency: [null, [Validators.required]],
      account: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(5)]],
      digitAccount: [null, [Validators.required]],
      sAutomatic: [null, [Validators.required]]
    });
  }

  private findByItemLocalStorage(id: string): Establishments {

    if (this.storageService.getLocalEstablishments() != null) {
      this.establishmentsLocal = [].concat(this.storageService.getLocalEstablishments());
      return this.establishmentsLocal.find(item => item.id === id);
    }
    return null;
  }

  hasError(formControl): boolean {
    return formControl.invalid && (formControl.dirty || formControl.touched);
  }

  getErrorMessage(formControl): string | null {
    if (formControl.errors.required) {
      return 'Campo Obrigatório';

    } else if (formControl.errors.email) {
      return 'Formato de email inválido';

    } else if (formControl.errors.minlength) {
      const requiredLength = formControl.errors.minlength.requiredLength;
      return `O campo deve ter no mínino ${requiredLength} caracteres`;

    } else if (formControl.errors.maxlength) {
      const requiredLength = formControl.errors.maxlength.requiredLength;
      return `O campo deve ter no máximo ${requiredLength} caracteres`;
    }
  }
}
