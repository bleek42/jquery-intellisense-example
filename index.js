/// <reference path="./node_modules/@types/jquery" />
/*
  this reference path is for VS Code to detect the "@types/jquery" folder & provide you with auto-suggestion/'intellisense' support!
*/

// wait for jQuery CDN to load
jQuery(function () {
  // other console methods - highlights log in blue text!
  console.info('jQuery document ready!');

  // reference DOM elements/nodes/whatever-same-thing-essentially
  var headerElem = $('header');
  var mainElem = $('main');
  var footerElem = $('footer');

  // do stuff to elements
  headerElem.on('hover', function (event) {
    console.info('mouse hover detected on header element...', event.target, this); // what's "this"..? take a look with the console methods like so...
  });
});
