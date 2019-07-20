import { Component, OnInit } from '@angular/core';
import {FlatTreeControl, TreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';


// interface FoodNode{
//   name: string;
//   children?: FoodNode[];
// }


// const TREE_DATA: FoodNode[] = [
//   {
//     name: 'Fruit',
//     children: [
//       {name: 'Apple'},
//       {name: 'Banana'},
//       {name: 'Fruit loops'},
//     ]
//   }, {
//     name: 'Vegetables',
//     children: [
//       {
//         name: 'Green',
//         children: [
//           {name: 'Broccoli'},
//           {name: 'Brussel sprouts'},
//         ]
//       }, {
//         name: 'Orange',
//         children: [
//           {name: 'Pumpkins'},
//           {name: 'Carrots'},
//         ]
//       },
//     ]
//   },
// ];
// interface ExampleFlatNode {
//   expandable: boolean;
//   name: string;
//   level: number;
// }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
// private transformer = (node: FoodNode, level: number) => {
//   return {
//     expandable: !!node.children && node.children.length > 0, 
//     name: node.name,
//     level: level,
//   };
// }

// treeControl : new FlatTreeControl<ExampleFlatNode>(
//   node => node.level, node => node.expandable);


  constructor() { }

  ngOnInit() {
  }

}
