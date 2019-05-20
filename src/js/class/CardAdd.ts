export class CardAdd{
  htmlTemplate:string = `
  <div class="card">
    <div class="card-body">
    </div>
  </div>
  `;

  genarateHTML:HTMLDivElement;
  constructor(html:string){
    let element = document.createElement('div');
    element.classList.add("col-12");
    element.classList.add("col-sm-6");
    element.innerHTML = this.htmlTemplate;
    let elementBody = element.querySelector(".card-body");
    elementBody.innerHTML = html;
    this.genarateHTML = element;
  }

  setHTML(){
    let lists = document.body.querySelector(".list");
    lists.appendChild(this.genarateHTML);
  }

  getElement(){
    return this.genarateHTML;
  }
}
