// (Example #1)
/*
const wardrobe = {
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50,
    height: 80,
    manufacturer: "Killibrew & Sons"
}

wardrobe.material = "Cedar"

console.log(wardrobe)
*/

//---------------------------------------------
//(Example 2)
/*
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

//(called dimensional properties to console.log with dot notation)
console.log(empireStateBuilding.stories)
console.log(empireStateBuilding.height)
console.log(empireStateBuilding.squareFeet)
console.log(empireStateBuilding.eastWestLength)
console.log(empireStateBuilding.northSouthLength)

//(consolidated last 5 "properties describing the "empireStateBuilding")
const remainingFive = [empireStateBuilding.address, empireStateBuilding.constructionDate, empireStateBuilding.cost, empireStateBuilding.owner, empireStateBuilding.architect]
console.log(remainingFive)

*/

//-------------------------------------------------
//(example 3)
/*
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}

/*
//(step 1 output part-time followed by full-time)
console.log(nashvilleSoftwareSchool.instructors["partTime"])
console.log(nashvilleSoftwareSchool.instructors["fullTime"])
or
console.log(nashvilleSoftwareSchool.instructors["partTime"] + "," + nashvilleSoftwareSchool.instructors["fullTime"])
or 
const pTime = nashvilleSoftwareSchool.instructors["partTime"]
const fTime = nashvilleSoftwareSchool.instructors["fullTime"]

for (let i = 0; i < pTime.length; i++) {
    console.log(pTime[i])
}

for (let i = 0; i < fTime.length; i++) {
    console.log(fTime[i])
}
*/

/*
//(output only Andy and Zoe)
console.log(nashvilleSoftwareSchool.instructors["fullTime"][4] + " and " + nashvilleSoftwareSchool.instructors["partTime"][0])
*/
