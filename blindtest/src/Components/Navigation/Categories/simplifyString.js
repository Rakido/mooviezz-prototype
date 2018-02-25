export default function(s) {
  var map = [
      ["\\s", ""],
      ["[àáâãäå]", "a"],
      ["æ", "ae"],
      ["ç", "c"],
      ["[èéêë]", "e"],
      ["[ìíîï]", "i"],
      ["ñ", "n"],
      ["[òóôõö]", "o"],
      ["œ", "oe"],
      ["[ùúûü]", "u"],
      ["[ýÿ]", "y"],
      ["\\W", ""]
  ];
  for (var i=0; i<map.length; ++i) {
      s = s.replace(new RegExp(map[i][0], "gi"), function(match) {
          if (match.toUpperCase() === match) {
              return map[i][1].toUpperCase();
          } else {
              return map[i][1];
          }
      });
  }
  return s;
}