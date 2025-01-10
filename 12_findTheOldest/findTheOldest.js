const findTheOldest = function(people) {
    return people.reduce((old, cur)=> {
            if(cur.yearOfDeath==undefined){
                cur.yearOfDeath = 2025;
            }
            if(old.yearOfDeath == undefined){
                old.yearOfDeath = 2025;
            }
            return old.yearOfDeath - old.yearOfBirth > cur.yearOfDeath - cur.yearOfBirth? old: cur;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
