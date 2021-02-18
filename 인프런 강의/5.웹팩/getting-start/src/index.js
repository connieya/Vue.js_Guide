// ES6 모듈 문법
import _ from 'lodash';

// ES5 문법
// var _ = require('lodash'); 
// var path = require('path');

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello','webpack'], ' ');
                    // _.join 은 lodash API이다. 
//   element.innerHTML = 'Hello webpack' //위 코드랑 뭐가 다른거지? 

  return element;
}

document.body.appendChild(component());