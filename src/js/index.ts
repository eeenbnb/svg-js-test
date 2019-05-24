import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../assets/css/common.scss"

import { kuma,ame,usagi } from "../assets/svg/svg-list";

import { CardAdd } from "./class/CardAdd";
import { KumaNoHana } from "./class/KumaNoHana";
import { Kumo } from "./class/Kumo";

export class main{
  svgList:string[] = [
    kuma,
    ame,
    usagi
  ];

  constructor(){
    this.svgList.forEach((v)=>{
      this.getSvgAndSetCard(v);
    });
    new KumaNoHana();
    new Kumo();
  }

  getSvgAndSetCard(html:string){
    new CardAdd(html).setHTML();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new main();
});
