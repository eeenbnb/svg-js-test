export class KumaNoHana{
  hana:Element;
  constructor(){
    this.hana = this.getKumaNoHana();
    this.hanaSetInterval();
  }

  getKumaNoHana(){
    return document.body.querySelector(".card-body .hana");
  }

  hanaSetInterval(){
    let lrFlag = true;
    setInterval(()=>{
      if(lrFlag){
        (this.hana as any).style.transform = "translateX(3%)"
      }else{
        (this.hana as any).style.transform = "translateX(-3%)"
      }
      lrFlag = !lrFlag;
    },500)
  }
}
