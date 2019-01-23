import { Component, OnInit } from '@angular/core';
import { FilterItem } from 'src/app/Models/filter-item';

@Component({
  selector: 'app-computer',
  templateUrl: './computer.component.html',
  styleUrls: ['./computer.component.css']
})
export class ComputerComponent implements OnInit {

  items: FilterItem[] = new Array<FilterItem>();

  constructor() { }

  ngOnInit() {
    let staticData = new Array<FilterItem>();
    let computer = new FilterItem();

    computer.key = "HP";
    computer.value = 1;

    computer.children = new Array<FilterItem>();
    let cpu = new FilterItem();
    cpu.key = "i3";
    cpu.value = 1;
    cpu.parent = computer;

    let brand = new FilterItem();
    brand.key = "Intel";
    brand.value = 1;
    brand.parent = cpu;

    let brand2 = new FilterItem();
    brand2.key = "AMD";
    brand2.value = 2;
    brand2.parent = cpu;

    cpu.children = new Array<FilterItem>();

    cpu.children.push(brand);
    cpu.children.push(brand2);

    computer.children.push(cpu);

    let computer1 = new FilterItem();
    computer1.key = "Dell";
    computer1.value = 2;

    let cpu1 = new FilterItem();
    cpu1.key = "i5";
    cpu1.value = 2;
    cpu1.parent = computer1;

    cpu1.children = new Array<FilterItem>();

    let brand3 = new FilterItem();
    brand3.key = "Cyrix";
    brand3.value = 3;
    brand3.parent = cpu1;

    let brand4 = new FilterItem();
    brand4.key = "Asd";
    brand4.value = 4;
    brand4.parent = cpu1;

    cpu1.children.push(brand3);
    cpu1.children.push(brand4);

    let cpu2 = new FilterItem();
    cpu2.key = "i7";
    cpu2.value = 3;
    cpu2.parent = computer1;

    cpu2.children = new Array<FilterItem>();

    let brand5 = new FilterItem();
    brand5.key = "jhg";
    brand5.value = 5;
    brand5.parent = cpu2;

    let brand6 = new FilterItem();
    brand6.key = "hgsdfa";
    brand6.value = 6;
    brand6.parent = cpu2;

    cpu2.children.push(brand5);
    cpu2.children.push(brand6);

    computer1.children = new Array<FilterItem>();
    computer1.children.push(cpu2);
    computer1.children.push(cpu1);

    staticData.push(computer);
    staticData.push(computer1);


    this.items = staticData;


  }

}
