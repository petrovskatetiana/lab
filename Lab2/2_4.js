/*1*/
function fn (){

    const object = { name: "Tetiana" };
    let object2 = {name: "Tetiana" };

    object.name = "Sofia";
    object2.name = "Sofia";

    const object3 = {name: "Anna" };
    object2 = object3;

    console.log (object2);

}
fn ();

/*2*/
function createUser (name, city) {

    return {name, city }
}
let resalt = createUser ("Anna", "Kherson");
console.log (resalt);