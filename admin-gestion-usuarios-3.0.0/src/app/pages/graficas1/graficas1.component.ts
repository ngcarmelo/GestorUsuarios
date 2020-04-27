import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-graficas1",
  templateUrl: "./graficas1.component.html",
  styles: [],
})
export class Graficas1Component implements OnInit {
  graficos: any = {
    grafico1: {
      labels: ["Carne", "Fruta", "Legumbres"],
      data: [24, 30, 46],
      type: "doughnut",
      leyenda: "Dieta equilibrada",
    },
    grafico2: {
      labels: ["Hombres", "Mujeres"],
      data: [4500, 6000],
      type: "doughnut",
      leyenda: "Entrevistados",
    },
    grafico3: {
      labels: ["Si", "No"],
      data: [95, 5],
      type: "doughnut",
      leyenda: "¿Cumple una dieta sana?",
    },
    grafico4: {
      labels: ["No", "Si"],
      data: [85, 15],
      type: "doughnut",
      leyenda: "¿Problemas digestivos?",
    },
  };

  constructor() {}

  ngOnInit() {}
}
