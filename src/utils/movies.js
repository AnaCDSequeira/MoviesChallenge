import Batman from "./assets/batman.svg";
import Blonde from "./assets/blonde.svg";
import BulletTrain from "./assets/bullettrain.svg";
import Flash from "./assets/flash.svg";
import Minions from "./assets/minions.svg";
import Spiderman from "./assets/spiderman.svg";
import TheGrayMan from "./assets/the-gray-man.svg";
import Thor from "./assets/thor.svg";
import TopGun from "./assets/topgun.svg";
import BlackPanther from "./assets/BlackPanther.jpg";
import TheGodfather from "./assets/theGodfather.jpg";
import PurpleHearts from "./assets/purpleHearts.jpg";
import LordOfTheRings from "./assets/lord.jpeg";
import Up from "./assets/up.jpg";
import ToyStory from "./assets/toystory.jpeg";
import Joker from "./assets/joker.jpeg";
import Memento from "./assets/memento.jpg";
import Amelie from "./assets/amelie.jpg";
import Coco from "./assets/coco.webp";
import FightClub from "./assets/fightclub.jpeg";
import ForrestGump from "./assets/forrestgump.jpg";
import HacksawRidge from "./assets/hacksawridge.jpg";
import HarryPotter from "./assets/harrypotter.jpeg";
import IngloriousBastards from "./assets/up.jpg";
import Interstellar from "./assets/interstellar.jpeg";
import IntoTheWild from "./assets/intothewild.jpg";
import LionKing from "./assets/lionking.webp";
import PulpFiction from "./assets/pulpfiction.jpeg";
import Walle from "./assets/walle.jpeg";
import WizardOfOz from "./assets/wizard.jpeg";
import ShutterIsland from "./assets/shutterisland.jpg";
import Vendetta from "./assets/vendetta.jpg";
import Maleficient from "./assets/maleficient.webp";
import InsideOut from "./assets/insideout.jpeg";
import Inception from "./assets/inception.jpeg";
import TheMatrix from "./assets/thematrix.jpeg";
import SchindlersList from "./assets/schindlerslist.jpeg";
import StarWarsV from "./assets/starwarsv.jpeg";
import Ratatouille from "./assets/Ratatouille.webp";

const movies = [
  {
    id: "0",
    name: "The Gray Man",
    image: TheGrayMan,
    url: "https://www.imdb.com/title/tt1649418/?ref_=nv_sr_srsg_0",
    associatedMovies: [
      {
        id: "3",
        name: "Top Gun: Maverick",
        image: TopGun,
        url: "https://www.imdb.com/title/tt1745960/?ref_=nv_sr_srsg_1",
        associatedMovies: [
          {
            id: "12",
            name: "Lord of the Rings",
            image: LordOfTheRings,
            url: "https://www.imdb.com/title/tt0120737/?ref_=nv_sr_srsg_6",
          },
          {
            id: "13",
            name: "Up",
            image: Up,
            url: "https://www.imdb.com/title/tt1049413/?ref_=nv_sr_srsg_0",
          },
          {
            id: "14",
            name: "Maleficient",
            image: Maleficient,
            url: "https://www.imdb.com/title/tt1587310/?ref_=nv_sr_srsg_0",
          },
        ],
      },
      {
        id: "4",
        name: "Bullet Train",
        image: BulletTrain,
        url: "https://www.imdb.com/title/tt12593682/?ref_=nv_sr_srsg_0",
        associatedMovies: [
          {
            id: "15",
            name: "Star Wars: Episode V - The Empire Strikes Back Train",
            image: StarWarsV,
            url: "https://www.imdb.com/title/tt0080684/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_15",
          },
          {
            id: "16",
            name: "Schindler's List",
            image: SchindlersList,
            url: "https://www.imdb.com/title/tt0108052/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=tt_mv_close",
          },
          {
            id: "17",
            name: "Inception",
            image: Inception,
            url: "https://www.imdb.com/title/tt1375666/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_14",
          },
        ],
      },
      {
        id: "5",
        name: "Thor: Love and Thunder",
        image: Thor,
        associatedMovies: [
          {
            id: "18",
            name: "The Matrix",
            image: TheMatrix,
            url: "https://www.imdb.com/title/tt0133093/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_16",
          },
          {
            id: "19",
            name: "Inside Out",
            image: InsideOut,
            url: "https://www.imdb.com/title/tt2096673/?ref_=nv_sr_srsg_0",
          },
          {
            id: "20",
            name: "Joker",
            image: Joker,
            url: "https://www.imdb.com/title/tt7286456/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_71",
          },
        ],
      },
    ],
  },
  {
    id: "1",
    name: "Blonde",
    image: Blonde,
    associatedMovies: [
      {
        id: "6",
        name: "Purple Hearts",
        image: PurpleHearts,
        associatedMovies: [
          {
            id: "21",
            name: "Coco",
            image: Coco,
            url: "https://www.imdb.com/title/tt2380307/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_74",
          },
          {
            id: "22",
            name: "Toy Story",
            image: ToyStory,
            url: "https://www.imdb.com/title/tt0114709/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_75",
          },
          {
            id: "23",
            name: "Amélie",
            image: Amelie,
            url: "https://www.imdb.com/title/tt0211915/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_101",
          },
        ],
      },
      {
        id: "7",
        name: "Black Panther",
        image: BlackPanther,
        associatedMovies: [
          {
            id: "24",
            name: "Shutter Island",
            image: ShutterIsland,
            url: "https://www.imdb.com/title/tt1130884/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_145",
          },
          {
            id: "25",
            name: "V for Vendetta",
            image: Vendetta,
            url: "https://www.imdb.com/title/tt0434409/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_158",
          },
          {
            id: "26",
            name: "Harry Potter and the Deathly Hallows",
            image: HarryPotter,
            url: "https://www.imdb.com/title/tt1201607/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_181",
          },
        ],
      },
      {
        id: "8",
        name: "The Godfather",
        image: TheGodfather,
        associatedMovies: [
          {
            id: "27",
            name: "Hacksaw Ridge",
            image: HacksawRidge,
            url: "https://www.imdb.com/title/tt2119532/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_193",
          },
          {
            id: "28",
            name: "Ratatouille",
            image: Ratatouille,
            url: "https://www.imdb.com/title/tt0382932/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_217",
          },
          {
            id: "29",
            name: "Into the Wild",
            image: IntoTheWild,
            url: "https://www.imdb.com/title/tt0758758/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_221",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    name: "Minions",
    image: Minions,
    associatedMovies: [
      {
        id: "9",
        name: "Spiderman",
        image: Spiderman,
        associatedMovies: [
          {
            id: "30",
            name: "The Wizard of Oz",
            image: WizardOfOz,
            url: "https://www.imdb.com/title/tt0032138/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_222",
          },
          {
            id: "31",
            name: "WALL-E",
            image: Walle,
            url: "https://www.imdb.com/title/tt0910970/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_57",
          },
          {
            id: "32",
            name: "Inglourious Basterds",
            image: IngloriousBastards,
            url: "https://www.imdb.com/title/tt0361748/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_73",
          },
        ],
      },
      {
        id: "10",
        name: "Flash",
        image: Flash,
        associatedMovies: [
          {
            id: "33",
            name: "Pulp Fiction",
            image: PulpFiction,
            url: "https://www.imdb.com/title/tt0110912/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_8",
          },
          {
            id: "34",
            name: "Forrest Gump",
            image: ForrestGump,
            url: "https://www.imdb.com/title/tt0109830/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_11",
          },
          {
            id: "35",
            name: "Fight Club",
            image: FightClub,
            url: "https://www.imdb.com/title/tt0137523/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_12",
          },
        ],
      },
      {
        id: "11",
        name: "Batman",
        image: Batman,
        associatedMovies: [
          {
            id: "36",
            name: "Interstellar",
            image: Interstellar,
            url: "https://www.imdb.com/title/tt0816692/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_26",
          },
          {
            id: "37",
            name: "The Lion King",
            image: LionKing,
            url: "https://www.imdb.com/title/tt0110357/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_36",
          },
          {
            id: "38",
            name: "Memento",
            image: Memento,
            url: "https://www.imdb.com/title/tt0209144/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=1a264172-ae11-42e4-8ef7-7fed1973bb8f&pf_rd_r=5QGQ6KXTPZGQFFZXP1HQ&pf_rd_s=center-1&pf_rd_t=15506&pf_rd_i=top&ref_=chttp_tt_54",
          },
        ],
      },
    ],
  },
];

export { movies as movieList };
