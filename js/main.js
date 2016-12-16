
var myHeaders = new Headers({
  'Authorization': 'Basic' + btoa(user + ":" + pass)
});
var myInit = {
  method: 'GET',
  headers: myHeaders,
  mode: 'no-cors'
};
var endpoint = 'https://www.mysportsfeeds.com/api/feed/pull/nfl/2015-2016-regular/active_players.json';
var container = document.querySelector('.container');
var players = [],
    cowboys = [],
    giants = [],
    eagles = [],
    redskins = [],
    cardinals = [],
    rams = [],
    fortyNiners = [],
    seahawks = [],
    bears = [],
    lions = [],
    packers = [],
    vikings = [],
    falcons = [],
    panthers = [],
    saints = [],
    buccaneers = [],
    titans = [],
    jaguars = [],
    colts = [],
    texans = [],
    steelers = [],
    browns = [],
    bengals = [],
    ravens = [],
    chargers = [],
    raiders = [],
    chiefs = [],
    broncos = [],
    jets = [],
    patriots = [],
    dolphins = [],
    bills = [];

fetch(endpoint)
  .then(blob => blob.json())
  .then(function(data, callback) {
    players.push(...data.rosterplayers.playerentry), players.forEach(function(player) {
      if (player.team.Name == 'Packers') {
        packers.push(player)
      }
      if (player.team.Name == 'Lions') {
        lions.push(player)
      }
      if (player.team.Name == 'Chiefs') {
        chiefs.push(player)
      }
      if (player.team.Name == 'Texans') {
        texans.push(player)
      }
      if (player.team.Name == 'Bears') {
        bears.push(player)
      }
      if (player.team.Name == '49ers') {
        fortyNiners.push(player)
      }
      if (player.team.Name == 'Colts') {
        colts.push(player)
      }
      if (player.team.Name == 'Falcons') {
        falcons.push(player)
      }
      if (player.team.Name == 'Chargers') {
        chargers.push(player)
      }
      if (player.team.Name == 'Panthers') {
        panthers.push(player)
      }
      if (player.team.Name == 'Buccaneers') {
        buccaneers.push(player)
      }
      if (player.team.Name == 'Eagles') {
        eagles.push(player)
      }
      if (player.team.Name == 'Browns') {
        browns.push(player)
      }
      if (player.team.Name == 'Giants') {
        giants.push(player)
      }
      if (player.team.Name == 'Dolphins') {
        dolphins.push(player)
      }
      if (player.team.Name == 'Rams') {
        rams.push(player)
      }
      if (player.team.Name == 'Raiders') {
        raiders.push(player)
      }
      if (player.team.Name == 'Bengals') {
        bengals.push(player)
      }
      if (player.team.Name == 'Steelers') {
        steelers.push(player)
      }
      if (player.team.Name == 'Patriots') {
        patriots.push(player)
      }
      if (player.team.Name == 'Ravens') {
        ravens.push(player)
      }
      if (player.team.Name == 'Cowboys') {
        cowboys.push(player)
      }
      if (player.team.Name == 'Redskins') {
        redskins.push(player)
      }
      if (player.team.Name == 'Cardinals') {
        cardinals.push(player)
      }
      if (player.team.Name == 'Seahawks') {
        seahawks.push(player)
      }
      if (player.team.Name == 'Vikings') {
        vikings.push(player)
      }
      if (player.team.Name == 'Saints') {
        saints.push(player)
      }
      if (player.team.Name == 'Titans') {
        titans.push(player)
      }
      if (player.team.Name == 'Jaguars') {
        jaguars.push(player)
      }
      if (player.team.Name == 'Broncos') {
        broncos.push(player)
      }
      if (player.team.Name == 'Jets') {
        jets.push(player)
      }
      if (player.team.Name == 'Bills') {
        bills.push(player)
      }
    })
  })

var selection = document.querySelector('#team');
var container = document.querySelector('.container')

// function displayTeam(team) {
//     var teamArray = team;
//     console.log(teamArray);
//     var html = teamArray.map(function(person) {
//         return `
//             <li>
//                 <span>${person.player.FirstName} ${person.player.LastName}</span>
//             </li>
//         `;
//     });
//     container.innerHTML = html;
// }

selection.addEventListener('change', function() {
  if (this.value == 'packers') {
    var html = packers.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'lions') {
    var html = lions.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'chiefs') {
    var html = chiefs.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'texans') {
    var html = texans.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'bears') {
    var html = bears.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == '49ers') {
      var html = fortyNiners.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'colts') {
       var html = colts.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'falcons') {
      var html = falcons.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'chargers') {
      var html = chargers.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'panthers') {
    var html = panthers.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'buccaneers') {
      var html = buccaneers.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'eagles') {
    var html = eagles.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'browns') {
    var html = browns.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'giants') {
    var html = giants.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'dolphins') {
    var html = dolphins.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'rams') {
    var html = rams.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'raiders') {
    var html = raiders.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'bengals') {
    var html = bengals.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'steelers') {
    var html = steelers.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'patriots') {
    var html = patriots.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'ravens') {
    var html = ravens.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'cowboys') {
    var html = cowboys.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'redskins') {
    var html = redskins.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'cardinals') {
    var html = cardinals.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'seahawks') {
    var html = seahawks.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'vikings') {
    var html = vikings.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'saints') {
    var html = saints.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'titans') {
    var html = titans.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'jaguars') {
    var html = jaguars.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'broncos') {
    var html = broncos.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'jets') {
    var html = jets.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
  if (this.value == 'bills') {
    var html = bills.map(function(player) {
        return `
            <li>
                <span>${player.player.FirstName} ${player.player.LastName}</span>
            </li>
        `;
    });
    container.innerHTML = html.join('');
  }
})

// selection.addEventListener('change', function() {
//     displayTeam(this.value);
// });




// players.forEach(function(player) {
//   if(player.team.Name == 'Packers') {
//     packers.push(player);
//   }
// });

// function findMatches(wordToMatch, cities) {
//   return cities.filter(place => {
//     conts regex = new RegExp(wordToMatch, 'gi');
//     return place.city.match(regex) || place.state.match(regex);
//   });
// }
// });

// var apiKey = 'yfy4zedzj8ng6dfzfy38jkuv';
// var year = 2016;
// var week = 1;
// var seasonName = '2016-2017-regular';
// var endpoint = `"http://api.sportradar.us/nfl-ot1/games/${year}/REG/${week}/schedule.json?${apiKey}"`;
// var endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
// function findTeam(teamToMatch, players) {
//   return players.filter(function(team) {
//     var regex = new RegExp(teamToMatch, 'gi');
//     return team.team.Name.match(regex);
//   });
// }