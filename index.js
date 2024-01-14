function newImage(source, left, bottom) {
  let character = document.createElement('img')
  character.src = source;
  character.style.position = 'fixed';
  character.style.left = left + 'px';
  character.style.bottom = bottom + 'px';
  document.body.append(character);
  return character
}

newImage('assets/green-character.gif', 100, 100);
newImage('assets/pine-tree.png', 450, 200);
newImage('assets/tree.png', 200, 300);
newImage('assets/pillar.png', 350, 100);
newImage('assets/crate.png', 150, 200);
newImage('assets/well.png', 500, 425);
