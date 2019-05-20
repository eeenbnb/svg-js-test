export class Kumo{
  ames:NodeList;

  constructor(){
    this.ames = this.getAmes();
    this.amesSetInterval();
  }

  getAmes(){
    return document.body.querySelectorAll(".card-body .ame");
  }

  amesSetInterval(){
    setInterval(()=>{
      this.ames.forEach((v:any)=>{
        let per = v.getAttribute("data-translatezY")
        console.log(per);
        if(!per){
          v.setAttribute("data-translatezY", "0");
          per = 0;
        }
        v.style.transform = `translateY(${per}%)`
        per += 10;
        if(per > 30){
          per = 0;
        }
        v.setAttribute("data-translatezY", per);
      })
    },500);
  }
}
