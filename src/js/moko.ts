import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../assets/css/moko.scss"

import Hammer from 'hammerjs'

import { usagi } from "../assets/svg/svg-list";

import { AddSVG } from './class/AddSVG'

export class main{
  elm:HTMLDivElement;
  moveElms:any[];
  isTouch:boolean = false
  touchstartX;
  touchstartY;
  isHami:boolean = false;
  constructor(){
    this.elm = new AddSVG(usagi).getElement()
    document.body.querySelector(".svg-area").appendChild(this.elm);
    this.addMokoTouchEventLisner();
    this.moveElms = this.getHamaElm();
    this.moveElms.forEach((v)=>{
      this.setHanaPostion(v);
    })

    document.body.querySelector("#hami-check").addEventListener("change",(e)=>{
      this.isHami = (e.srcElement as any).checked;
    })
  }

  getHamaElm(){
    let ids = ["#目","#歯1","#歯2","#ほっぺ_xFF1F_","#鼻","#ひげ","#てん"];
    let elms = [];
    ids.forEach((v)=>{
      elms.push(this.elm.querySelector(v));
    })
    return elms;
  }

  setHanaPostion(v){
    v.style.transition = "transform 0.1s linear";

    // v.style.position = "fixed";
    // v.style.top = v.getBoundingClientRect().top + "px";
    // v.style.left = v.getBoundingClientRect().left + "px";
  }

  addMokoTouchEventLisner(){
    let mc = new Hammer(this.elm);
    let tmpX,tmpY;
    mc.on("panstart",(e)=>{
      this.changeTouchstatus(true);
      this.touchstartX = e.deltaX;
      this.touchstartY = e.deltaY;
    });
    mc.on("panmove", (e)=> {
      tmpX = e.deltaX;
      tmpY = e.deltaY;
      // this.moveElms.forEach((v)=>{
      //   v.style.transform = `translateX(${-(this.touchstartX - e.deltaX)/20}%) translateY(${-(this.touchstartY - e.deltaY)/20}%)`
      // })
    });
    mc.on("panend", (e)=> {
      this.changeTouchstatus(false);
      this.moveElms.forEach((v)=>{
        v.style.transform = `translateX(0%) translateY(0%)`
      })
    });

    document.addEventListener('touchmove', (e)=>{
      e.preventDefault();
    }, {passive: false});

    setInterval(()=>{
      if(this.isTouch){
        this.moveElms.forEach((v)=>{
          let x = -(this.touchstartX - tmpX)/20;
          let y = -(this.touchstartY - tmpY)/20;
          if(!this.isHami){
            if(x > 5.4){
              x = 5.4
            }if(x < -5.4){
              x = -5.4
            }
            if(y > 2.4){
              y = 2.54
            }if(y < - 10){
              y = - 10
            }
          }
          v.style.transform = `translateX(${x}%) translateY(${y}%)`
        })
      }
    },1000/30)
  }

  changeTouchstatus(f:boolean){
    this.isTouch = f;
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new main();
});
