// ITERATION 1

// Suspects Collection
const suspectsArray = [
    {
        firstName: "Jacob",
        lastName: "Green",
        occupation: "Entrepreneur",
        age: 45,
        description: "He has a lot of connections",
        color: "green",
        image: "htttp://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg"
    },

    {
        firstName: "Doctor",
        lastName: "Orchid",
        occupation: "Scientist",
        age: 26,
        description: " PhD in plant toxicology. Adopted daughter of Mr. Boddy",
        color: "white",
        image: "htttp://www.radiotimes.com/uploads/images/Original/111967.jpg"
    },
    {
        firstName: "Victor",
        lastName: "Plum",
        occupation: "Designer",
        age: 22,
        description: "Billionaire video game designer",
        color: "purple",
        image: "htttp://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg"
    },
    {
        firstName: "Kasandra",
        lastName: "Scarlet",
        occupation: "Actor",
        age: 31,
        description: "She is an A-list movie star with a dark past",
        color: "red",
        image: "htttp://www.radiotimes.com/uploads/images/Original/111967.jpg"
    },
    {
        firstName: "Eleanor",
        lastName: "Peacock",
        occupation: "Socialité",
        age: 36,
        description: "She is from a wealthy family and uses her status and money to earn popularity",
        color: "blue",
        image: "https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg"
    },
    {
        firstName: "Jack",
        lastName: "Mustard",
        occupation: "Retired Football player",
        age: 62,
        description: "He is a former football player who tries to get by on his former glory",
        color: "yellow",
        image: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg"
    }
];

// Rooms Collection
const weaponsArray = [
    {
        name: "rope",
        weight: 10
    },
    {
        name: "knife",
        weight: 8
    },
    {
        name: "candlestick",
        weight: 2
    },
    {
        name: "dumbell",
        weight: 30
    },
    {
        name: "poison",
        weight: 2
    },
    {
        name: "axe",
        weight: 15
    },
    {
        name: "bat",
        weight: 13
    },
    {
        name: "trophy",
        weight: 25
    },
    {
        name: "pistol",
        weight: 20
    },
];

// Weapons Collection
const roomsArray = [
    { name: "Dining Room" },
    { name: "Conservatory" },
    { name: "Kitchen" },
    { name: "Study" },
    { name: "Library" },
    { name: "Billiard Room" },
    { name: "Lounge" },
    { name: "Ballroom" },
    { name: "Hall" },
    { name: "Spa" },
    { name: "Living Room" },
    { name: "Observatory" },
    { name: "Theater" },
    { name: "Guest House" },
    { name: "Patio" },
];

// ITERATION 2

function selectRandom(array) {
    let row = Math.floor(Math.random() * array.length);
    return array[row];
}

function pickMystery() {
    let a = suspectsArray;
    let b = weaponsArray;
    let c = roomsArray;
    let x = {
        suspect: selectRandom(a), 
        weapon: selectRandom(b),
        room: selectRandom(c)
    };

    return x;
}

// ITERATION 3

function revealMystery(envelope){
    return (envelope.suspect.firstName + " " + envelope.suspect.lastName + " killed Mr. Boddy using the " + envelope.weapon.name + " in the " + envelope.room.name + "!");
}