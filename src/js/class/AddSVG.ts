export class AddSVG{
  genarateHTML:HTMLDivElement;
  constructor(html:string){
    let element = document.createElement('div');
    element.classList.add("moko-wrapper");
    element.innerHTML = html;
    this.genarateHTML = element;
  }

  getElement(){
    return this.genarateHTML;
  }
}
