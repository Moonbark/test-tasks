// 'use strict';

console.log(new Date().getHours() + ':' + new Date().getMinutes());

const zone1 = document.querySelector('.zone-1');
const zone2 = document.querySelector('.zone-2');

const filler = document.querySelector('#lips');

zone1.ondragover = allowDop;
zone2.ondragover = allowDop;

function allowDop(event) {
  event.preventDefault();
}

filler.ondragstart = moveIt;

function moveIt(event) {
  console.log('объект DataTransfer из DragEvent: ', event.dataTransfer);
  event.dataTransfer.setData('dataId', event.target.id);
}

zone1.ondrop = dropIt;
zone2.ondrop = dropIt;

function dropIt(event) {
  const itemId = event.dataTransfer.getData('dataId');
  console.log('item id from dataTransfer >>', itemId);
  console.log('event target element >>', event.target);
  event.target.append(document.getElementById(itemId));
}
