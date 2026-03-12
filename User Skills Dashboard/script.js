let profile = {
    userName: "Raushan Bhai Patel",
    age: 24,
    address: {
        vill: "Jamuk",
        post: "Jamuk",
        dist: "Jehanabad",
        ps: "Jehanabad Nagar Thana",
        state: "Bihar",
        pincode: 804429
    },
    skills: {
        skill1: "HTML",
        skill2: "CSS",
        skill3: "JavaScript",
        skill4: "Tailwind",
        skill5: "React",
        skill6: "Node.js"
    }
};

let permanentAddress = [];
for(let key in profile.address){
    permanentAddress.push(profile.address[key]);
}
console.log(permanentAddress);
for(let index in permanentAddress){
    console.log(index + " : " + permanentAddress[index]);
};

let skillList =[];
for(let key in profile.skills){
    skillList.push(profile.skills[key]);
};
console.log(skillList);

//Use Array.from() to convert values into an array
let skillArray = Array.from(Object.values(profile.skills));
console.log(skillArray);
console.log(Object.values(profile.address));
