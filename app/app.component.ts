import { Component, OnInit, OnDestroy, Renderer2, ElementRef } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from './data.service';

import { LogService } from './log.service';
import { Pet } from './pet.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  intervalSub: any;

  title = 'Hola Mundo!';

  showText = false;

  todaysDate = new Date();

  itemImageUrl = '../assets/mal.jpg';

  isUnchanged = true;

  fontSizepx = 16;

  firstExample = '';

  isSpecial = true;
  currentClasses = {};
  currentStyle = {};

  name = 'tu madre';

  items = [
    { name: 'Carlos'},
    { name: 'Erni'},
    { name: 'Barny'},
  ]

  item = { name: 'Penelope'};

  isActive = true;

  species = ['pez', 'gato', 'perro'];
  model = new Pet(1, 'Doradito', this.species[0]);
  submited = false;

  nameb = new FormControl('');
  namec = new FormControl('');

  profileForm = new FormGroup ({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  nameInput = '';
  validationForm = new FormGroup({
    namef: new FormControl(this.nameInput, [
      Validators.required,
      Validators.minLength(4)
    ])
  });


  constructor(
    // private logService: LogService,
    // private renderer: Renderer2,
    // private host: ElementRef
    private dataService: DataService
    ) {}

  ngOnInit(): void {
    this.setCurrentClasses();
    this.setCurrentStyles();
    // this.logService.logMessage('Hola');
    // this.renderer.setStyle(this.host.nativeElement, 'color', 'red');
    this.intervalSub = setInterval(() => {
      console.log('Hola de ngOnInit');
    }, 1000);

    this.dataService.getData().subscribe((res) => {
      console.log(res);
    });
  }

  ngOnDestroy() {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

  getMin(a: number, b: number) {
    if (a < b) {
      return a;
    }
    return b;
  }

  toggleText(event: any): void {
    this.showText = !this.showText;
    console.log(event);
  }

  onSave() {
    console.log('click on save');
  }

  deleteItem(item: any) {
    console.log(item);
  }

  callPhone(phone: string) {
    console.log(phone);
  }

  setCurrentClasses() {
    this.currentClasses = {
      saveable: true,
      modified: false,
      special: true
    }
  }

  setCurrentStyles() {
    this.currentStyle = {
      'font-style': 'italic',
      'font-weight': 'bold'
    }
  }

  onSubmit() {
    this.submited = true;
  }

  updateName() {
    this.namec.setValue('Norberto');
  }

  onSubmitb() {
    console.warn(this.profileForm.value);
  }

  get namef() {
    return this.validationForm.get('name');
  }

}
