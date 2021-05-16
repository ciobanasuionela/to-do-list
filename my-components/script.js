import {COLOR, htmlMaker} from "../constants.js";

class MyComponent extends HTMLElement {
  connectedCallback() {

    this.innerHTML = htmlMaker(this.title, this.order);
   
    this.querySelector(".task-title").addEventListener(
      "mouseover", () => {
        this.changeColor();
      }
    );

    this.querySelector(".delete-button").addEventListener("click", () => {    
      this.handleDeleteTask();
    });

    this.querySelector(".done-button").addEventListener("click", () => {
      this.handleCheckTask();
    });
  } 

  handleDeleteTask() {
    this.remove();
  }

  handleCheckTask() {
    this.classList.toggle("checked");
  }

  changeColor() {
    this.querySelector(".task-box").style.background = COLOR;
  }
}

customElements.define("my-component", MyComponent);
