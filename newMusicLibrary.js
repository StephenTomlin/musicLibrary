// var library = {
//   creator: "creatorName",
//   name: "nameOfLibrary"
//   playlists: [
//          {
//       name: "Coding Music",
//       overallRating: 5,
//       totalDuration:12000,
//       tracks: ["t01", "t02"]
//     },
//         {
//       name: "p02",
//       overallRating: 5,
//       totalDuration:12000,
//       tracks: ["t01", "t02"]
//     ]


function Library(name,creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = []
}
function Playlists(name) {
  this.name = name;
  this.tracks = []
  this.totalDuration = function(tracks) {
      var totalTime = 0
      for (var i = 0; i < tracks.length; i++) {
        totalTime = tracks[i].length + totalTime;
      }
      return totalTime
    }
  this.overallRating = function(tracks) {
    var totalRating = 0
    var overallRating = 0
    for (var j = 0; j < tracks.length; j++) {
      totalRating = totalRating + tracks[j].rating;
    }
    overallRating = totalRating / tracks.length
    return overallRating
  }
}

function tracks(title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

var sweetLibrary = new Library("sweetLibrary","jeff")
var whoaPlaylist = new Playlists("whoa")

var track1 = new tracks("Beware",5, 300)
var track2 = new tracks("Guillotine",5, 300)
var track3 = new tracks("Come Up and Get Me",5, 300)
var track4 = new tracks("On GP",5, 300)
var track5 = new tracks("Get Got",5, 300)
var track6 = new tracks("The Fever",5, 300)
var track7 = new tracks("Culture Shock",5, 300)
var track8 = new tracks("Hacker",5, 300)



sweetLibrary.playlists.push(whoaPlaylist)
whoaPlaylist.tracks.push(track1)
whoaPlaylist.tracks.push(track2)
whoaPlaylist.tracks.push(track3)
whoaPlaylist.tracks.push(track4)
whoaPlaylist.tracks.push(track5)
whoaPlaylist.tracks.push(track6)
whoaPlaylist.tracks.push(track7)
whoaPlaylist.tracks.push(track8)



console.log(sweetLibrary)
console.log(sweetLibrary.playlists[0].overallRating(sweetLibrary.playlists[0].tracks))
console.log(sweetLibrary.playlists[0].totalDuration(sweetLibrary.playlists[0].tracks))