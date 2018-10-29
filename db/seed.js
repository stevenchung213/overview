const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const db = require('./index.js');

const range = function (start, stop, step) {
  step = step || 1;
  let result = [];
  for (let i = start; i <= stop; i += step) {
    result.push(i);
  }
  return result;
};

const generator = function (amount) {

  amount = amount || 1;

  let docsArray = [];

  let types = ['House', 'Condo', 'Apartment', 'Townhouse', 'Cabin'];
  let area = range(1300, 4000, 50);
  let brCount = range(1, 5);
  let sleeps = range(1, 10);
  let bathCount = range(1, 5);
  let halfbathCount = range(1, 3);
  let minStay = range(1, 3);
  let propDesc = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna' +
  ' aliqua. Volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend. Cras semper auctor neque vitae tempus.' +
  ' Orci phasellus egestas tellus rutrum tellus pellentesque eu. Tincidunt id aliquet risus feugiat in ante metus dictum at. Et' +
  ' sollicitudin ac orci phasellus egestas tellus rutrum tellus. Nulla at volutpat diam ut venenatis tellus in metus. Et odio pellentesque' +
  ' diam volutpat. Urna molestie at elementum eu facilisis sed odio morbi. Venenatis a condimentum vitae sapien pellentesque habitant' +
  ' morbi tristique. Et malesuada fames ac turpis egestas integer eget. Risus commodo viverra maecenas accumsan lacus vel facilisis.' +
  ' Pellentesque adipiscing commodo elit at imperdiet dui. Leo a diam sollicitudin tempor id eu. Quis lectus nulla at volutpat diam ut' +
  ' venenatis tellus in. Aliquam nulla facilisi cras fermentum odio eu feugiat pretium. Varius vel pharetra vel turpis nunc. Amet purus' +
  ' gravida quis blandit turpis cursus in hac habitasse.', 'Varius duis at consectetur lorem donec massa sapien faucibus. Dignissim' +
  ' sodales ut eu sem integer vitae. Urna molestie at elementum eu facilisis sed odio morbi. Ac tincidunt vitae semper quis lectus nulla' +
  ' at volutpat diam. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Eget egestas purus viverra accumsan. Libero nunc' +
  ' consequat interdum varius sit amet mattis vulputate. Arcu bibendum at varius vel pharetra vel turpis. Vel elit scelerisque mauris' +
  ' pellentesque pulvinar pellentesque.', 'Sem nulla pharetra diam sit amet nisl suscipit. Aliquet eget sit amet tellus cras adipiscing' +
  ' enim eu turpis. Eu lobortis elementum nibh tellus molestie. Sit amet nisl suscipit adipiscing. Diam maecenas ultricies mi eget mauris' +
  ' pharetra. Eget nunc scelerisque viverra mauris. Vulputate odio ut enim blandit volutpat maecenas. Lacus viverra vitae congue eu' +
  ' consequat ac. Nisl suscipit adipiscing bibendum est ultricies. Netus et malesuada fames ac turpis egestas. Eget felis eget nunc' +
  ' lobortis mattis aliquam faucibus purus.', 'Scelerisque fermentum dui faucibus in ornare quam. Ac tortor dignissim convallis aenean et' +
  ' tortor at risus. Purus sit amet luctus venenatis. Tempus egestas sed sed risus pretium. Ac ut consequat semper viverra nam libero' +
  ' justo laoreet. Velit ut tortor pretium viverra suspendisse potenti nullam. Etiam tempor orci eu lobortis elementum nibh tellus' +
  ' molestie. Erat imperdiet sed euismod nisi porta lorem. Nulla posuere sollicitudin aliquam ultrices. Posuere sollicitudin aliquam' +
  ' ultrices sagittis. Faucibus nisl tincidunt eget nullam non nisi. Enim diam vulputate ut pharetra sit amet aliquam id diam. Est velit' +
  ' egestas dui id ornare arcu odio ut sem. Vitae turpis massa sed elementum tempus. At in tellus integer feugiat scelerisque. Ultricies' +
  ' mi eget mauris pharetra et ultrices.', 'Gravida cum sociis natoque penatibus et magnis. Mattis molestie a iaculis at erat' +
  ' pellentesque adipiscing commodo elit. Neque ornare aenean euismod elementum nisi quis. Sit amet justo donec enim diam vulputate ut.' +
  ' Tempor commodo ullamcorper a lacus. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Viverra ipsum nunc aliquet' +
  ' bibendum enim facilisis gravida neque. Ac placerat vestibulum lectus mauris. Nisl pretium fusce id velit ut tortor. Tristique' +
  ' senectus et netus et malesuada fames. Sollicitudin tempor id eu nisl. Turpis cursus in hac habitasse platea. Morbi tristique' +
  ' senectus et netus et malesuada fames ac. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Est placerat in egestas' +
  ' erat imperdiet sed euismod nisi.', 'Viverra aliquet eget sit amet tellus cras adipiscing enim. Fames ac turpis egestas maecenas' +
  ' pharetra convallis. Quam viverra orci sagittis eu volutpat odio. Dolor purus non enim praesent elementum facilisis. Dignissim cras' +
  ' tincidunt lobortis feugiat vivamus. Senectus et netus et malesuada fames ac turpis.', 'Consectetur purus ut faucibus pulvinar' +
  ' elementum integer. Risus ultricies tristique nulla aliquet enim tortor. Sodales neque sodales ut etiam sit. Elit ut aliquam purus' +
  ' sit amet luctus venenatis lectus. Sapien pellentesque habitant morbi tristique senectus et. Mauris cursus mattis molestie a iaculis' +
  ' at erat pellentesque. In nisl nisi scelerisque eu ultrices vitae auctor eu augue. Odio tempor orci dapibus ultrices in iaculis nunc.']; // length of 5

  let random = function (array) {
    return Math.floor(Math.random() * array.length);
  };

  for (let i = 0; i < amount; i++) {

    let document = {
      propertyID: i,
      type: types[random(types)],
      area: area[random(area)],
      bedrooms: brCount[random(brCount)],
      sleeps: sleeps[random(sleeps)],
      bathrooms: bathCount[random(bathCount)],
      halfBaths: halfbathCount[random(halfbathCount)],
      minStay: minStay[random(minStay)],
      description: propDesc[random(propDesc)]
    };

    docsArray.push(document);
  }
  return docsArray;
};

let documents = generator(500)/*?*/;

db.overview.create(documents);


/*
  let area1br = range(1000, 1600, 50);
  let area2br = range(1200, 1900, 50);
  let area3br = range(1700, 2400, 50);
  let area4br = range(2200, 3000, 50);
  let area5br = range(2700, 4000, 50);
*/