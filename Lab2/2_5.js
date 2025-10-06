let user1 = {name: "Dima", phone: "+380979566782"};
let user2 = {name: "Katia", phone: "+380970400659"};
let user3 = {name: "Vova", phone: "+380974544632"};
let arr = [user1, user2, user3];

function findPhoneByName (name){
    for(const item of arr){
        if (item.name === name){
            console.log (item.phone);
            return;
        }
    }
}

findPhoneByName ("Dima");
findPhoneByName ("Katia");
findPhoneByName ("Vova");