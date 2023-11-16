export interface Hero {
    id: number;
    name: string;
    powers: string;
}
  
const heroes: Hero[] = [
{
    id: 1,
    name: "Spiderman",
    powers: "Climb walls, shoot webs, photographic reflexes",
},
{
    id: 2,
    name: "Superman",
    powers: "Super strength, super speed, flight, x-ray vision",
},
{
    id: 3,
    name: "Batman",
    powers: "Intelligence, physical training, technology",
},
];

export { heroes };