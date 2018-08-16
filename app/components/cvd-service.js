import Champion from "../models/Champion.js";
import Dragon from "../models/Dragon.js";

const cvdApi = axios.create({
  baseURL: "https://dragon-duel.herokuapp.com/api/",
  timeout: 3000
});

let newGame = {};
let gameId = "";

export default class CvdService {
  constructor() { }

  getChampions(draw) {
    cvdApi.get("champions").then(res => {
      let champions = res.data.map(rawChampion => {
        return new Champion(rawChampion);
      });
      console.log(res);
      draw(champions);
    });
  }

  getDragons(draw) {
    cvdApi.get("dragons").then(res => {
      let dragons = res.data.map(rawDragon => {
        return new Dragon(rawDragon);
      });
      console.log(res);
      draw(dragons);
    });
  }

  setDragon(id) {
    newGame.championId = id;
  }

  setChamp(id) {
    newGame.championId = id;
  }

  newGame() {
    //draw game as callback
    if (
      newGame.hasOwnProperty("dragonId") &&
      newGame.hasOwnProperty("championId")
    ) {
      cvdApi.post("game", newGame).then(res => {
        gameId = res.data.game._id;
        console.log(res.data);
        //draw(game)
      });
    } else {
      alert("please pick both a dragon and champion");
    }
  }
}
