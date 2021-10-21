// 20211020095441
// http://hp-api.herokuapp.com/api/characters
let personajesData = [
  {
    "name": "Harry Potter",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "31-07-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "black",
    "wand": {
      "wood": "holly",
      "core": "phoenix feather",
      "length": 11
    },
    "patronus": "stag",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Daniel Radcliffe",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/harry.jpg"
  },
  {
    "name": "Hermione Granger",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "19-09-1979",
    "yearOfBirth": 1979,
    "wizard": true,
    "ancestry": "muggleborn",
    "eyeColour": "brown",
    "hairColour": "brown",
    "wand": {
      "wood": "vine",
      "core": "dragon heartstring",
      "length": ""
    },
    "patronus": "otter",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Emma Watson",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/hermione.jpeg"
  },
  {
    "name": "Ron Weasley",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "01-03-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "blue",
    "hairColour": "red",
    "wand": {
      "wood": "willow",
      "core": "unicorn tail-hair",
      "length": 14
    },
    "patronus": "Jack Russell terrier",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Rupert Grint",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/ron.jpg"
  },
  {
    "name": "Draco Malfoy",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "05-06-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "grey",
    "hairColour": "blonde",
    "wand": {
      "wood": "hawthorn",
      "core": "unicorn tail-hair",
      "length": 10
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Tom Felton",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/draco.jpg"
  },
  {
    "name": "Minerva McGonagall",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "04-10-1925",
    "yearOfBirth": 1925,
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "tabby cat",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Dame Maggie Smith",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/mcgonagall.jpg"
  },
  {
    "name": "Cedric Diggory",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": 1977,
    "wizard": true,
    "ancestry": "",
    "eyeColour": "grey",
    "hairColour": "brown",
    "wand": {
      "wood": "ash",
      "core": "unicorn hair",
      "length": 12.25
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Robert Pattinson",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": "http://hp-api.herokuapp.com/images/cedric.png"
  },
  {
    "name": "Cho Chang",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "brown",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "swan",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Katie Leung",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/cho.jpg"
  },
  {
    "name": "Severus Snape",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "09-01-1960",
    "yearOfBirth": 1960,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "black",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "doe",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Alan Rickman",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": "http://hp-api.herokuapp.com/images/snape.jpg"
  },
  {
    "name": "Rubeus Hagrid",
    "alternate_names": [
      ""
    ],
    "species": "half-giant",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "06-12-1928",
    "yearOfBirth": 1928,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "black",
    "hairColour": "black",
    "wand": {
      "wood": "oak",
      "core": "",
      "length": 16
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Robbie Coltrane",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/hagrid.png"
  },
  {
    "name": "Neville Longbottom",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "30-07-1980",
    "yearOfBirth": 1980,
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "blonde",
    "wand": {
      "wood": "cherry",
      "core": "unicorn tail-hair",
      "length": 13
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Matthew Lewis",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/neville.jpg"
  },
  {
    "name": "Luna Lovegood",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Ravenclaw",
    "dateOfBirth": "13-02-1981",
    "yearOfBirth": 1981,
    "wizard": true,
    "ancestry": "",
    "eyeColour": "grey",
    "hairColour": "blonde",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "hare",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Evanna Lynch",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/luna.jpg"
  },
  {
    "name": "Ginny Weasley",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "11-08-1981",
    "yearOfBirth": 1981,
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "brown",
    "hairColour": "red",
    "wand": {
      "wood": "yew",
      "core": "",
      "length": ""
    },
    "patronus": "horse",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Bonnie Wright",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/ginny.jpg"
  },
  {
    "name": "Sirius Black",
    "alternate_names": [
      "Padfoot",
      "Snuffles"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "03-11-1959",
    "yearOfBirth": 1959,
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "grey",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "hare",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Gary Oldman",
    "alternate_actors": [
      "James Walters",
      "Rohan Gotobed"
    ],
    "alive": false,
    "image": "http://hp-api.herokuapp.com/images/sirius.JPG"
  },
  {
    "name": "Remus Lupin",
    "alternate_names": [
      "Professor Lupin",
      "Moony"
    ],
    "species": "werewolf",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "10-03-1960",
    "yearOfBirth": 1960,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "green",
    "hairColour": "brown",
    "wand": {
      "wood": "cypress",
      "core": "unicorn tail-hair",
      "length": 10.25
    },
    "patronus": "wolf",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "David Thewlis",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": "http://hp-api.herokuapp.com/images/lupin.jpg"
  },
  {
    "name": "Arthur Weasley",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "06-02-1950",
    "yearOfBirth": 1950,
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "blue",
    "hairColour": "red",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "weasel",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Mark Williams",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/arthur.jpg"
  },
  {
    "name": "Bellatrix Lestrange",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": 1951,
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "brown",
    "hairColour": "black",
    "wand": {
      "wood": "walnut",
      "core": "dragon heartstring",
      "length": 12.75
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Helena Bonham Carter",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": "http://hp-api.herokuapp.com/images/bellatrix.jpg"
  },
  {
    "name": "Lord Voldemort",
    "alternate_names": [
      "Tom Marvolo Riddle"
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "31-12-1926",
    "yearOfBirth": 1926,
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "red",
    "hairColour": "bald",
    "wand": {
      "wood": "yew",
      "core": "phoenix feather",
      "length": 13.5
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Ralph Fiennes",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": "http://hp-api.herokuapp.com/images/voldemort.jpg"
  },
  {
    "name": "Horace Slughorn",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "green",
    "hairColour": "blonde",
    "wand": {
      "wood": "cedar",
      "core": "dragon heartstring",
      "length": 10.25
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Jim Broadbent",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/slughorn.JPG"
  },
  {
    "name": "Kingsley Shacklebolt",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "brown",
    "hairColour": "brown",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "lynx",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "George Harris",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/kingsley.jpg"
  },
  {
    "name": "Dolores Umbridge",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "brown",
    "hairColour": "grey",
    "wand": {
      "wood": "birch",
      "core": "dragon heartstring",
      "length": 8
    },
    "patronus": "persian cat",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Imelda Staunton",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/umbridge.jpg"
  },
  {
    "name": "Lucius Malfoy",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": 1954,
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "grey",
    "hairColour": "blonde",
    "wand": {
      "wood": "elm",
      "core": "dragon heartstring",
      "length": 18
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Jason Isaacs",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/lucius.jpg"
  },
  {
    "name": "Vincent Crabbe",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "black",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Jamie Waylett",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": "http://hp-api.herokuapp.com/images/crabbe.jpg"
  },
  {
    "name": "Gregory Goyle",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "brown",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Josh Herdman",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/goyle.jpg"
  },
  {
    "name": "Mrs Norris",
    "alternate_names": [
      ""
    ],
    "species": "cat",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "yellow",
    "hairColour": "brown",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Maxime, Alanis and Tommy the cats",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/norris.JPG"
  },
  {
    "name": "Argus Filch",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "squib",
    "eyeColour": "",
    "hairColour": "grey",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "David Bradley",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": "http://hp-api.herokuapp.com/images/filch.jpg"
  },
  {
    "name": "Vernon Dursley",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Richard Griffiths",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Petunia Dursley",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "blonde",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Fiona Shaw",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Dudley Dursley",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "blue",
    "hairColour": "blond",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Harry Melling",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Lily Potter",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "muggleborn",
    "eyeColour": "green",
    "hairColour": "",
    "wand": {
      "wood": "willow",
      "core": "",
      "length": 10.25
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Geraldine Somerville",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "James Potter",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "black",
    "wand": {
      "wood": "mahogany",
      "core": "",
      "length": 11
    },
    "patronus": "stag",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Adrian Rawlins",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Albus Dumbledore",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": 0,
    "wizard": true,
    "ancestry": "",
    "eyeColour": "blue",
    "hairColour": "silver",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Richard Harris",
    "alternate_actors": [
      "Michael Gambon"
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Dedalus Diggle",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "David Brett",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Madam Pomfrey",
    "alternate_names": [
      "Poppy Pomfrey"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Gemma Jones",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mrs Figg",
    "alternate_names": [
      "Arabella Doreen Figg"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "squib",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Kathryn Hunter",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Marge Dursley",
    "alternate_names": [
      "Marjorie Eileen Dursley",
      "Aunt Marge",
      "Auntie Marge",
      "Margie"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Pam Ferris",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Yvonne",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Piers Polkiss",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Jason Boyd",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Dennis",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Christopher Rithin",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Malcolm",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Richard Macklin",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Gordon",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Miranda Gaushawk",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Bathilda Bagshot",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Adalbert Waffling",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Emeric Switch",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Phyllida Spore",
    "alternate_names": "Dame Phyllida Spore",
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Arsenius Jigger",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Newt Scamander",
    "alternate_names": [
      "Newton Artemis Fido Scamander"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Eddie Redmayne",
    "alternate_actors": [
      "Joshua Shea",
      "Callum Turner"
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Quentin Trimble",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Tom",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Derek Deadman",
    "alternate_actors": [
      "Jim Tavare"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Doris Crockford",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Nina Young",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Professor Quirrel",
    "alternate_names": [
      "Quirinus Quirrel"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Ian Hart",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Griphook",
    "alternate_names": [
      ""
    ],
    "species": "goblin",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Verne Troyer",
    "alternate_actors": [
      "Warwick Davis"
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Madam Malkin",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Vindictus Viridian",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Garrick Ollivander",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "pale, silvery",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "John Hurt",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Hedwig",
    "alternate_names": [
      ""
    ],
    "species": "owl",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "amber",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Gizmo",
    "alternate_actors": [
      "Ook",
      "Sprout",
      "Kasper",
      "Swoops",
      "Oh Oh",
      "Elmo",
      "Bandit"
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Molly Weasley",
    "alternate_names": [
      "Molly Prewett"
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "red",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Julie Walters",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Percy Weasley",
    "alternate_names": [
      "Perce",
      "Percy Ignatius Weasley",
      "Weatherby"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "red",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Chris Rankin",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Fred Weasley",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "red",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "James Phelps",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "George Weasley",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "red",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Oliver Phelps",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Lee Jordan",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Luke Youngblood",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Bill Weasley",
    "alternate_names": [
      "William Arthur Weasley"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "red",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Richard Fish",
    "alternate_actors": [
      "Domhnall Gleeson"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Charlie Weasley",
    "alternate_names": [
      "Charles Weasley"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "red",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Alex Crockford",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Fat Friar",
    "alternate_names": [
      ""
    ],
    "species": "ghost",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Simon Fisher-Becker",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Peeves",
    "alternate_names": [
      ""
    ],
    "species": "poltergeist",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Hannah Abbott",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "",
    "hairColour": "blonde",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Charlotte Skeoch",
    "alternate_actors": [
      "Louisa Warren"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Susan Bones",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Eleanor Columbus",
    "alternate_actors": [
      "Emma Jayne-Corboz"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Terry Boot",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Kevin Lee Yi",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mandy Brocklehurst",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Christina Petrou",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Lavender Brown",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Kathleen Cauley",
    "alternate_actors": [
      "Jennifer Smith",
      "Jessie Cave"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Millicent Bulstrode",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Helen Stuart",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Justin Finch-Fletchley",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "muggleborn",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Edward Randell",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Seamus Finnegan",
    "alternate_names": [
      "O'Flaherty"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "",
    "hairColour": "sandy",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Devon Murray",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Morag MacDougal",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Lily Moon",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Theodore Nott",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Pansy Parkinson",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Genevieve Gaunt",
    "alternate_actors": [
      "Lauren Shotton",
      "Scarlett Byrne"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Parvati Patil",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Sitara Shah",
    "alternate_actors": [
      "Shefali Chowdhury"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Padma Patil",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Sharon Sandhu",
    "alternate_actors": [
      "Afshan Azad"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Sally-Anne Perks",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Lisa Turpin",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "female",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Blaise Zabini",
    "alternate_names": [
      ""
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Louis Cordice",
    "alternate_actors": [
      ""
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Nearly Headless Nick",
    "alternate_names": [
      "Sir Nicholas de Mimsy-Porpington",
      "Sir Nicholas",
      "Nick"
    ],
    "species": "ghost",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "John Cleese",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Bloody Baron",
    "alternate_names": [
      
    ],
    "species": "ghost",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Terence Bayler",
    "alternate_actors": [
      ""
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Fat Lady",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Elizabeth Spriggs",
    "alternate_actors": [
      "Dawn French"
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Professor Sprout",
    "alternate_names": [
      "Pomona Sprout"
    ],
    "species": "human",
    "gender": "female",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Miriam Margolyes",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Professor Binns",
    "alternate_names": [
      "Cuthbert Binns"
    ],
    "species": "ghost",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Emeric the Evil",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Uric the Oddball",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Professor Flitwick",
    "alternate_names": [
      "Filius Flitwick"
    ],
    "species": "human",
    "gender": "male",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Warwick Davis",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Madam Hooch",
    "alternate_names": [
      "Rolanda Hooch"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "yellow",
    "hairColour": "grey",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Zoë Wanamaker",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Oliver Wood",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Sean Biggerstaff",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Gregory the Smarmy",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Wizard Baruffio",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Angelina Johnson",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Danielle Tabor",
    "alternate_actors": [
      "Tiana Benjamin"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Marcus Flint",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Jamie Yeates",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Alicia Spinet",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Leilah Sutherland",
    "alternate_actors": [
      "Rochelle Douglas"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Katie Bell",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Emily Dale",
    "alternate_actors": [
      "Georgina Leonidas"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Adrian Pucey",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Scot Fearn",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Miles Bletchley",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "David Churchyard",
    "alternate_actors": [
      "Amy Puglia"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Terrence Higgs",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Will Theakston",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Fluffy",
    "alternate_names": [
      
    ],
    "species": "three-headed dog",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Nicolas Flamel",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Brontis Jodorowsky",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Gellert Grindelwald",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "blue",
    "hairColour": "blond",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Jamie Campbell Bower",
    "alternate_actors": [
      "Michael Byrne",
      "Johnny Depp",
      "Mads Mikkelsen"
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Norberta",
    "alternate_names": [
      
    ],
    "species": "dragon",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "orange",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Ronan",
    "alternate_names": [
      
    ],
    "species": "centaur",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "red",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Bane",
    "alternate_names": [
      
    ],
    "species": "centaur",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Jason Piper",
    "alternate_actors": [
      "Nuno Silva"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Firenze",
    "alternate_names": [
      "Professor Firenze"
    ],
    "species": "centaur",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "blue",
    "hairColour": "blond",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Ray Fearon",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Elfrick the Eager",
    "alternate_names": [
      
    ],
    "species": "goblin",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Perenelle Flamel",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Bertie Bott",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Dobby",
    "alternate_names": [
      
    ],
    "species": "house-elf",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "green",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Toby Jones",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Mr Mason",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Jim Norton",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mrs Mason",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Veronica Clifford",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Perkins",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "white",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Celestina Warbeck",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "larch",
      "core": "phoenix feather",
      "length": 10.5
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Professor Lockhart",
    "alternate_names": [
      "Gilderoy Lockhart"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "blue",
    "hairColour": "blond",
    "wand": {
      "wood": "cherry",
      "core": "dragon heartstring",
      "length": 9
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Kenneth Branagh",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mundungus Fletcher",
    "alternate_names": [
      "Dung"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "ginger",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Andy Linden",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mr Borgin",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Edward Tudor-Pole",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mr Granger",
    "alternate_names": [
      "Wendell Wilkins"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Tom Knight",
    "alternate_actors": [
      "Ian Kelly"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mrs Granger",
    "alternate_names": [
      "Monica Wilkins"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Heather Bleasdale",
    "alternate_actors": [
      "Michelle Fairley"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Dr Filibuster",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Colin Creevey",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "muggleborn",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Hugh Mitchell",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Gladys Gudgeon",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Veronica Smethley",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Patrick Delaney-Podmore",
    "alternate_names": [
      "Sir Patrick Delaney-Podmore"
    ],
    "species": "ghost",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Z. Nettles",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "D.J. Prod",
    "alternate_names": [
      "Demetrius J. Prod"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Chris Wilson",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Elsie Prod",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Moaning Myrtle",
    "alternate_names": [
      "Myrtle Elizabeth Warren"
    ],
    "species": "ghost",
    "gender": "female",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggleborn",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Shirley Henderson",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Godric Gryffindor",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Rowena Ravenclaw",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Helga Hufflepuff",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Salazar Slytherin",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Madame Pince",
    "alternate_names": [
      "Irma Pince"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Sally Mortemore",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Milicent Bullstroude",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Helen Stuart",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Ernie Macmillan",
    "alternate_names": [
      "Ernest Macmillan"
    ],
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "blond",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "boar",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Louis Doyle",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Armando Dippet",
    "alternate_names": [
      "Professor Dippet"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "white",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Alfred Burke",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Penelope Clearwater",
    "alternate_names": [
      "Penny"
    ],
    "species": "human",
    "gender": "female",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Gemma Padley",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Cornelius Fudge",
    "alternate_names": [
      "Minister Cornelius Oswald Fudge"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "grey",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Robert Hardy",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Aragog",
    "alternate_names": [
      
    ],
    "species": "acromantula",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "white",
    "hairColour": "brows",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Julian Glover",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Mosag",
    "alternate_names": [
      
    ],
    "species": "acromantula",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "black",
    "hairColour": "brown",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Stanley Shunpike",
    "alternate_names": [
      "Stan"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Lee Ingleby",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Ernest Prang",
    "alternate_names": [
      "Ernie"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Jimmy Gardner",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Madam Marsh",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Florean Fortescue",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Sir Cadogan",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Paul Whitehouse",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Sybill Trelawney",
    "alternate_names": [
      "Sybill Patricia Trelawney",
      "Professor Trelawney"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Emma Thompson",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Buckbeak",
    "alternate_names": [
      "Beaky"
    ],
    "species": "hippogriff",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "orange",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Peter Pettigrew",
    "alternate_names": [
      "Wormtail",
      "Scabbers",
      "Wormy"
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "chestnut",
      "core": "dragon heartstring",
      "length": 9.25
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Timothy Spall",
    "alternate_actors": [
      "Charles Hughes"
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Madam Rosmerta",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Julie Christie",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Derek",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Professor Vector",
    "alternate_names": [
      "Septima Vector"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Cassius Warrington",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Ashley Hull",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Graham Montague",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Peregrine Derrick",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Lucian Bole",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Walden Macnair",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Peter Best",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Franc Bryce",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Eric Sykes",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Dot",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Bertha Jorkins",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Barty Crouch",
    "alternate_names": [
      "Bartemius Crouch Senior"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Roger Lloyd-Pack",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Ludo Bagman",
    "alternate_names": [
      "Ludovic Bagman"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "blue",
    "hairColour": "blond",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Amos Diggory",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "brown",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Jeff Rawle",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mr Roberts",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mr Payne",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "muggle",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Basil",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Archie Aymslowe",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Cuthbert Mockridge",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Gilbert Wimple",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Arnold Peasegood",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Broderick Bode",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Saul Croaker",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Ali Bashir",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Victor Krum",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "dark",
    "hairColour": "dark",
    "wand": {
      "wood": "hornbeam",
      "core": "dragon heartstring",
      "length": 10.25
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Stanislav Ianevski",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Winky",
    "alternate_names": [
      
    ],
    "species": "house-elf",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Narcissa Malfoy",
    "alternate_names": [
      "Cissy"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "blue",
    "hairColour": "blonde",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Helen McCrory",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Vasily Dimitrov",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Clara Ivanova",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Lev Zograf",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Alexei Levski",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Pyotr Vulchanov",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Ivan Volkov",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Connolly",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Barry Ryan",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Troy",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mullet",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Moran",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Quigley",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Aidan Lynch",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Hassan Mostafa",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Dennis Creevey",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "muggleborn",
    "eyeColour": "",
    "hairColour": "brown",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Professor Sinistra",
    "alternate_names": [
      "Aurora Sinistra["
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Stewart Ackerley",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Malcolm Baddock",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Eleanor Branstone",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Owen Cauldwell",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Emma Dobbs",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Laura Madley",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Huffleluff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Natalie McDonald",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Graham Pritchard",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Orla Quirke",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Kevin Whitby",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Eloise Midgen",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Samantha Clinch",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Professor Moody",
    "alternate_names": [
      "Alastor Moody",
      "Mad-Eye"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "dark",
    "hairColour": "grey",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Brendan Gleeson",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Madame Maxime",
    "alternate_names": [
      "Olympe Maxime"
    ],
    "species": "half-giant",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Frances de la Tour",
    "alternate_actors": [
      "Ian Whyte"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Igor Karkaroff",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "blue",
    "hairColour": "silver",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Predrag Bjelac",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Poliakoff",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Fawcett",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Alex Argenti",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Summers",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Fleur Delacour",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "blue",
    "hairColour": "blonde",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Clémence Poésy",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Gregorovic",
    "alternate_names": [
      "Mykew Gregorovitch"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "white",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Rade Šerbedžija",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Rita Skeeter",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "blonde",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Miranda Richardson",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Stebbins",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Professor Grubbly-Plank",
    "alternate_names": [
      "Wilhelmina Grubbly-Plank"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "grey",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": true,
    "actor": "Apple Brook",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Bozo",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Peter O'Farrell",
    "alternate_actors": [
      "Robert Wilfort"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Evan Rosier",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Wilkes",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Rodolphus Lestrange",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Avery",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Richard Rosson",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Antonin Dolohov",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "dark",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Arben Bajraktaraj",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Travers",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "grey",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Tav MacDougall",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Marlene McKinnon",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Mulciber",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Augustus Rookwood",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Richard Trinder",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Frank Longbottom",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "James Payton",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Alice Longbottom",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "white",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Lisa Wood ",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Violet",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Apollyon Pringle",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Ogg",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Mafalda Hopkirk",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "hazel",
    "hairColour": "grey",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Jessica Hynes",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Nymphadora Tonks",
    "alternate_names": [
      "Dora",
      "Nymphadora Lupin"
    ],
    "species": "human",
    "gender": "female",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "brown",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Natalia Tena",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Kingsley Shacklebolt",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "black",
    "hairColour": "bald",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "George Harris",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Elphias Doge",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "blue",
    "hairColour": "silver",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Peter Cartwright",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Dedalus Diggle",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "David Brett",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Emmeline Vance",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Brigitte Millar",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Sturgis Podmore",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "blond",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Hestia Jones",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Ragnok",
    "alternate_names": [
      
    ],
    "species": "goblin",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Alphard Black",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Regulus Black",
    "alternate_names": [
      "Regulus Arcturus Black"
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Tom Moorcroft",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Phineas Nigelus Black",
    "alternate_names": [
      "Professor Phineas Nigellus Black"
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "John Atterbury",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Araminta Meliflua Black",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Elladora Black",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Andromeda Tonks",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "brown",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Ted Tonks",
    "alternate_names": [
      "Edward"
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "muggleborn",
    "eyeColour": "",
    "hairColour": "blond",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Rodolphus Lestrange",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Rabastan Lestrange",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slytherin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Eric Munch",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Bob",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Nicholas Blane",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Bengie Fenwick",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Edgar Bones",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Cliff Lanning",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Amelia Bones",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "grey",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Sian Thomas",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Caradoc Dearborn",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Gideon Prewett",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Fabian Prewett",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Aberforth Dumbledore",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "half-blood",
    "eyeColour": "blue",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "goat",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Jim McManus",
    "alternate_actors": [
      "Ciarán Hinds"
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Dorcas Meadowes",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Algie Longbottom",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Anthony Goldstein",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Stubby Boardman",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Doris Purkiss",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Euan Abercrombie",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Rose Zeller",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Patricia Stimpson",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Kenneth Towler",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Vicky Frobisher",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Geoffrey Hooper",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Cassandra Trelawney",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Michael Corner",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Ryan Nelson",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Zacharias Smith",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "blond",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "Nick Shirm",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Barnabas the Barmy",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Karkus",
    "alternate_names": [
      
    ],
    "species": "giant",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Golgomath",
    "alternate_names": [
      
    ],
    "species": "giant",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Fridwulfa",
    "alternate_names": [
      
    ],
    "species": "giant",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": false,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Andrew Kirke",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Jack Sloper",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Gryffindor",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Everard",
    "alternate_names": [
      "Professor Everard"
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Sam Beazley",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Dilys Derwent",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "silver",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Hippocrates Smethwyck",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Augustus Pye",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Urquhart Rackharrow",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": false,
    "image": ""
  },
  {
    "name": "Willy Widdershins",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Agnes",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Miriam Strout",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Madam Puddifoot",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "black",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Summerby",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Hufflepuff",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Theodore Nott",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "Slythetin",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "pure-blood",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Marietta Edgecombe",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "Ravenclaw",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "blonde",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": true,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "Madam Edgecombe",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "female",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  },
  {
    "name": "John Dawlish",
    "alternate_names": [
      
    ],
    "species": "human",
    "gender": "male",
    "house": "",
    "dateOfBirth": "",
    "yearOfBirth": "",
    "wizard": true,
    "ancestry": "",
    "eyeColour": "",
    "hairColour": "grey",
    "wand": {
      "wood": "",
      "core": "",
      "length": ""
    },
    "patronus": "",
    "hogwartsStudent": false,
    "hogwartsStaff": false,
    "actor": "Richard Leaf",
    "alternate_actors": [
      
    ],
    "alive": true,
    "image": ""
  }
]