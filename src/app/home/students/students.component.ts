import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, ChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';


@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
  })
export class StudentsComponent  {
  // scatter
  public scatterChartOptions: ChartOptions = {
    responsive: true,
  };

  public scatterChartData: ChartDataSets[] = [
    {
      data: [
        { x: 1, y: 1 },
        { x: 2, y: 3 },
        { x: 3, y: -2 },
        { x: 4, y: 4 },
        { x: 5, y: -3, r: 20 },
      ],
      label: 'Series A',
      pointRadius: 10,
    },
  ];
  public scatterChartType: ChartType = 'scatter';

  constructor() { }

  ngOnInit() {
  }
}






// ----------------------------- ng2-charts    bubble ------------------------------------
// import { Component, OnInit } from '@angular/core';
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { Color } from 'ng2-charts';


// @Component({
//     selector: 'app-students',
//     templateUrl: './students.component.html',
//     styleUrls: ['./students.component.scss']
//   })
// export class StudentsComponent  {
//   public bubbleChartOptions: ChartOptions = {
//     responsive: true,
//     scales: {
//       xAxes: [{
//         ticks: {
//           min: 0,
//           max: 30,
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           min: 0,
//           max: 30,
//         }
//       }]
//     }
//   };
//   public bubbleChartType: ChartType = 'bubble';
//   public bubbleChartLegend = true;

//   public bubbleChartData: ChartDataSets[] = [
//     {
//       data: [
//         { x: 10, y: 10, r: 10 },
//         { x: 15, y: 5, r: 15 },
//         { x: 26, y: 12, r: 23 },
//         { x: 7, y: 8, r: 8 },
//       ],
//       label: 'Series A',
//     },   
//   ];

//   constructor() { }

//   ngOnInit() {
//   }
// }




// --------------------------------- ng2-charts    Bar Chart ------------------------------
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
// import { Label } from 'ng2-charts';


// @Component({
//     selector: 'app-students',
//     templateUrl: './students.component.html',
//     styleUrls: ['./students.component.scss']
//   })
// export class StudentsComponent  {
//   public barChartOptions: ChartOptions = {
//     responsive: true,
//   };
//   public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
//   public barChartType: ChartType = 'bar';
//   public barChartLegend = true;
//   public barChartPlugins = [];

//   public barChartData: ChartDataSets[] = [
//     { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
//     { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
//     { data: [30, 48, 40, 19, 86, 27, 40], label: 'Series C' }
//   ];

//   constructor() { }

//   ngOnInit() {
//   }
// }





// //----------------------------- ng2  Pie -------------------------------------
// import { Component, OnInit, ViewChild } from '@angular/core';
// import { ChartType, ChartOptions } from 'chart.js';
// import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';

// @Component({
//     selector: 'app-students',
//     templateUrl: './students.component.html',
//     styleUrls: ['./students.component.scss']
//   })
// export class StudentsComponent  {
//  // Pie
//  public pieChartOptions: ChartOptions = {
//   responsive: true,
// };
// public pieChartLabels: Label[] = [['Download', 'Sales'], ['In', 'Store', 'Sales'], 'Mail Sales'];
// public pieChartData: SingleDataSet = [300, 500, 100];
// public pieChartType: ChartType = 'pie';
// public pieChartLegend = true;
// public pieChartPlugins = [];

// constructor() {
//   monkeyPatchChartJsTooltip();
//   monkeyPatchChartJsLegend();
// }

//   ngOnInit() {
//   }
// }


// ---------------------------------------------CanvasJS ---------------------------------------------------------------

// import { Component, OnInit } from '@angular/core';
// import * as CanvasJS from 'src/assets/canvasjs.min';

// @Component({
//   selector: 'app-students',
//   templateUrl: './students.component.html',
//   styleUrls: ['./students.component.scss']
// })
// export class StudentsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
// 		let chart = new CanvasJS.Chart("chartContainer", {
//       animationEnabled: true,
//       exportEnabled: true,
//       title: {
//         text: "Basic Column Chart in Angular"
//       },
//       data: [{
//         type: "column",
//         dataPoints: [
//           { y: 71, label: "Apple" },
//           { y: 55, label: "Mango" },
//           { y: 50, label: "Orange" },
//           { y: 65, label: "Banana" },
//           { y: 95, label: "Pineapple" },
//           { y: 68, label: "Pears" },
//           { y: 28, label: "Grapes" },
//           { y: 34, label: "Lychee" },
//           { y: 14, label: "Jackfruit" }
//         ]
//       }]
//     });		
//     chart.render();
    
//     // Dashed Chart
//     let chart1 = new CanvasJS.Chart("chartContainerDashed", {
//       animationEnabled: true,
//       theme: "light2",
//       title:{
//         text: "Site Traffic"
//       },
//       axisX:{
//         valueFormatString: "DD MMM",
//         crosshair: {
//           enabled: true,
//           snapToDataPoint: true
//         }
//       },
//       axisY: {
//         title: "Number of Visits",
//         includeZero: true,
//         crosshair: {
//           enabled: true
//         }
//       },
//       toolTip:{
//         shared:true
//       },  
//       legend:{
//         cursor:"pointer",
//         verticalAlign: "bottom",
//         horizontalAlign: "left",
//         dockInsidePlotArea: true,
//         itemclick: toogleDataSeries
//       },
//       data: [{
//         type: "line",
//         showInLegend: true,
//         name: "Total Visit",
//         markerType: "square",
//         xValueFormatString: "DD MMM, YYYY",
//         color: "#F08080",
//         dataPoints: [
//           { x: new Date(2017, 0, 3), y: 650 },
//           { x: new Date(2017, 0, 4), y: 700 },
//           { x: new Date(2017, 0, 5), y: 710 },
//           { x: new Date(2017, 0, 6), y: 658 },
//           { x: new Date(2017, 0, 7), y: 734 },
//           { x: new Date(2017, 0, 8), y: 963 },
//           { x: new Date(2017, 0, 9), y: 847 },
//           { x: new Date(2017, 0, 10), y: 853 },
//           { x: new Date(2017, 0, 11), y: 869 },
//           { x: new Date(2017, 0, 12), y: 943 },
//           { x: new Date(2017, 0, 13), y: 970 },
//           { x: new Date(2017, 0, 14), y: 869 },
//           { x: new Date(2017, 0, 15), y: 890 },
//           { x: new Date(2017, 0, 16), y: 930 }
//         ]
//       },
//       {
//         type: "line",
//         showInLegend: true,
//         name: "Unique Visit",
//         lineDashType: "dash",
//         dataPoints: [
//           { x: new Date(2017, 0, 3), y: 510 },
//           { x: new Date(2017, 0, 4), y: 560 },
//           { x: new Date(2017, 0, 5), y: 540 },
//           { x: new Date(2017, 0, 6), y: 558 },
//           { x: new Date(2017, 0, 7), y: 544 },
//           { x: new Date(2017, 0, 8), y: 693 },
//           { x: new Date(2017, 0, 9), y: 657 },
//           { x: new Date(2017, 0, 10), y: 663 },
//           { x: new Date(2017, 0, 11), y: 639 },
//           { x: new Date(2017, 0, 12), y: 673 },
//           { x: new Date(2017, 0, 13), y: 660 },
//           { x: new Date(2017, 0, 14), y: 562 },
//           { x: new Date(2017, 0, 15), y: 643 },
//           { x: new Date(2017, 0, 16), y: 570 }
//         ]
//       }]
//     });
//     chart1.render();
    
//     function toogleDataSeries(e){
//       if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
//         e.dataSeries.visible = false;
//       } else{
//         e.dataSeries.visible = true;
//       }
//       chart.render();
//     }

//   } //ngOnInit

// }

