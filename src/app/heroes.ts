export interface Hero {
    id: number;
    image: string;
    name: string;
    powers: string;
}
  
const heroes: Hero[] = [
{
    id: 1,
    name: "Spiderman",
    powers: "Climb walls, shoot webs, photographic reflexes",
    image: "https://wallpapers.com/images/hd/spiderman-on-building-p4ashmgeamn2mvkn.jpg",
},
{
    id: 2,
    name: "Superman",
    powers: "Super strength, super speed, flight, x-ray vision",
    image: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2022/04/superman.jpeg?fit=1200%2C750&quality=50&strip=all&ssl=1",
},
{
    id: 3,
    name: "Batman",
    powers: "Intelligence, physical training, technology",
    image: "https://img2.rtve.es/i/?w=1600&i=1371454504089.jpg",
},
];

export { heroes };