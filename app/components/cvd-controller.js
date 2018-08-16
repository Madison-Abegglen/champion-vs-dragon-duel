import CvdService from "./cvd-service.js";

let cvdService = new CvdService();
const app = document.getElementById("app");

function drawChampions(champions) {
  let template = "";
  for (let i = 0; i < champions.length; i++) {
    const champion = champions[i];
    template += `
      <div class="row">
        <div onclick="app.controllers.cvdController.setChamp(${champion.id})" class="card writing col-6">
          <div>
            <p><strong>${champion.name}:</strong> ${champion.race}</p>
            <p><strong>Starting HP:</strong> ${champion.hp}</p>
            <img src="${champion.imgUrl}" alt="icon">
          </div>
        </div>
      </div>
      `;
  }
  document.getElementById("champions").innerHTML = template;
}

function drawDragons(dragons) {
  let template = "";
  for (let i = 0; i < dragons.length; i++) {
    const dragon = dragons[i];
    template += `
      <div class="row">
        <div onclick="app.controllers.cvdController.setDragon(${dragon.id})" class="card writing col-6">
          <div>
            <p><strong>${dragon.name}</strong></p>
            <p><strong>Starting HP:</strong> ${dragon.maxHp}</p>
            <img src="${dragon.imgUrl}" alt="icon">
          </div>
        </div>
      </div>
    `;
  }
  document.getElementById("dragons").innerHTML = template;
}

export default class CvdController {
  constructor() {
    cvdService.getChampions(drawChampions);
    cvdService.getDragons(drawDragons);
  }

  setChamp(id) {
    cvdService.setChamp(id);
  }

  setDragon(id) {
    cvdService.setDragon(id);
  }
}
