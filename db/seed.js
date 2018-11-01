const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const {overview} = require('./index.js');

const range = (start, stop, step) => {
  step = step || 1;
  let result = [];
  for (let i = start; i <= stop; i += step) {
    result.push(i);
  }
  return result;
};

const generator = amount => {

  amount = amount || 1;

  let docsArray = [];

  let headlines = [ 'In tempor turpis nec euismod scelerisque quam',
    'Mauris ullamcorper purus sit amet nulla',
    'Nec nisi vulputate nonummy maecenas',
    'Ac tellus semper interdum mauris ullamcorper purus sit',
    'Tortor duis mattis egestas metus aenean fermentum donec ut',
    'Erat fermentum justo nec condimentum neque',
    'Odio elementum eu interdum eu tincidunt in leo maecenas pulvinar',
    'Sit amet consectetuer adipiscing elit proin interdum mauris',
    'Nulla integer pede justo lacinia eget tincidunt eget',
    'Lacinia nisi venenatis tristique fusce congue diam id ornare',
    'Amet justo morbi ut odio cras',
    'Eleifend luctus ultricies eu nibh quisque id',
    'Vestibulum sed magna at nunc commodo placerat praesent blandit nam nulla',
    'Ligula nec sem duis aliquam convallis nunc proin at turpis a',
    'Euismod scelerisque quam turpis adipiscing lorem vitae',
    'Risus praesent lectus vestibulum quam sapien varius ut',
    'Id justo sit amet sapien dignissim',
    'Rhoncus aliquam lacus morbi quis tortor',
    'Sed nisl nunc rhoncus dui',
    'Nibh quisque id justo sit amet sapien dignissim vestibulum vestibulum ante',
    'Ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet',
    'Orci luctus et ultrices posuere cubilia curae',
    'Id lobortis convallis tortor risus',
    'Adipiscing molestie hendrerit at vulputate',
    'Id mauris vulputate elementum nullam varius nulla facilisi',
    'Magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient',
    'Nisi venenatis tristique fusce congue diam id ornare imperdiet',
    'Felis sed interdum venenatis turpis enim blandit mi in porttitor pede',
    'Nisl nunc nisl duis bibendum felis sed interdum venenatis turpis enim',
    'Facilisi cras non velit nec nisi',
    'Lectus vestibulum quam sapien varius ut',
    'Eros elementum pellentesque quisque porta volutpat erat quisque',
    'Eget massa tempor convallis nulla neque libero convallis eget eleifend',
    'Pellentesque volutpat dui maecenas tristique est et',
    'Rhoncus aliquam lacus morbi quis tortor id nulla ultrices aliquet maecenas',
    'In consequat ut nulla sed accumsan felis ut at dolor',
    'Quis orci nullam molestie nibh in',
    'Convallis eget eleifend luctus ultricies eu nibh',
    'Enim leo rhoncus sed vestibulum sit amet cursus id turpis',
    'Mus vivamus vestibulum sagittis sapien cum',
    'Sapien dignissim vestibulum vestibulum ante ipsum primis',
    'Pellentesque volutpat dui maecenas tristique est et tempus semper est',
    'Eget congue eget semper rutrum nulla nunc',
    'Eros suspendisse accumsan tortor quis turpis sed ante vivamus tortor',
    'Imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed',
    'Pede ac diam cras pellentesque volutpat dui maecenas',
    'Lacinia nisi venenatis tristique fusce congue diam id ornare imperdiet sapien',
    'Odio elementum eu interdum eu',
    'Neque libero convallis eget eleifend luctus ultricies eu',
    'Erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi',
    'Blandit mi in porttitor pede',
    'Condimentum neque sapien placerat ante nulla',
    'Pede justo eu massa donec dapibus',
    'Phasellus sit amet erat nulla',
    'Vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio',
    'Leo rhoncus sed vestibulum sit',
    'Orci luctus et ultrices posuere cubilia curae nulla dapibus',
    'Sagittis sapien cum sociis natoque penatibus et magnis dis',
    'Purus eu magna vulputate luctus cum sociis natoque penatibus et magnis',
    'Elit sodales scelerisque mauris sit amet',
    'Vivamus vestibulum sagittis sapien cum sociis natoque penatibus et magnis',
    'Leo rhoncus sed vestibulum sit amet cursus',
    'Vel lectus in quam fringilla rhoncus mauris enim leo',
    'Justo aliquam quis turpis eget elit sodales scelerisque mauris sit amet',
    'Et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum',
    'Vehicula consequat morbi a ipsum integer a nibh',
    'Ipsum ac tellus semper interdum mauris ullamcorper purus sit amet',
    'Nulla mollis molestie lorem quisque ut erat curabitur gravida nisi',
    'Hendrerit at vulputate vitae nisl aenean lectus pellentesque',
    'Porttitor lorem id ligula suspendisse ornare consequat',
    'Interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit',
    'Nulla dapibus dolor vel est donec odio justo sollicitudin',
    'Nam dui proin leo odio porttitor id consequat in consequat',
    'Dis parturient montes nascetur ridiculus mus vivamus vestibulum',
    'Quam sollicitudin vitae consectetuer eget rutrum at',
    'Amet nunc viverra dapibus nulla suscipit ligula in lacus',
    'Lacinia aenean sit amet justo morbi ut',
    'Leo maecenas pulvinar lobortis est phasellus sit amet erat',
    'Ac neque duis bibendum morbi',
    'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere',
    'Odio condimentum id luctus nec molestie sed justo pellentesque viverra',
    'Nisl venenatis lacinia aenean sit amet justo morbi ut',
    'Sem sed sagittis nam congue',
    'Imperdiet nullam orci pede venenatis non sodales sed tincidunt',
    'Blandit nam nulla integer pede justo lacinia eget tincidunt',
    'Pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi',
    'Vivamus vel nulla eget eros elementum',
    'Sapien iaculis congue vivamus metus',
    'Praesent lectus vestibulum quam sapien varius ut',
    'Lorem id ligula suspendisse ornare consequat lectus in est',
    'Vel sem sed sagittis nam congue risus semper porta volutpat quam',
    'Ultrices posuere cubilia curae nulla dapibus dolor',
    'Augue luctus tincidunt nulla mollis molestie lorem quisque ut',
    'Potenti in eleifend quam a odio',
    'Nisl nunc nisl duis bibendum felis sed interdum venenatis turpis',
    'Cras in purus eu magna vulputate luctus cum sociis natoque penatibus',
    'Odio porttitor id consequat in consequat',
    'Rhoncus aliquam lacus morbi quis tortor id',
    'Elit sodales scelerisque mauris sit amet eros suspendisse',
    'Est phasellus sit amet erat nulla tempus vivamus in' ];
  let types = ['House', 'Condo', 'Apartment', 'Townhouse', 'Cabin'];
  let area = range(1300, 4000, 50);
  let brCount = range(1, 5);
  let sleeps = range(1, 10);
  let bathCount = range(1, 5);
  let halfbathCount = range(1, 3);
  let minStay = range(1, 3);
  let brief = headlines;
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
  let owners = [ 'Mohandas Hatherley',
    'Amelita Boatright',
    'Shelia Chiese',
    'Gifford Jeannel',
    'Giraud Shropsheir',
    'Barn Licas',
    'Daven Cossington',
    'Shannon McGurgan',
    'L;urette Pate',
    'Nowell Austick',
    'Federico Tefft',
    'Etta Compson',
    'Jewell Frear',
    'Pauly Figures',
    'Emmalynne Schwier',
    'Blaire Scurrer',
    'Brod Szepe',
    'Heloise McHenry',
    'Cleopatra Regelous',
    'Ferne Liddall',
    'Elizabeth Choffin',
    'Alisander Romanet',
    'Gun Artus',
    'Dave Trusse',
    'Derward Monro',
    'Rakel Eva',
    'Clemmy Eye',
    'Sherill Grzesiewicz',
    'Kally Brewse',
    'Milt Clyde',
    'Andie Farleigh',
    'Roselin Delos',
    'Sayers Laborda',
    'Ainslee Eyeington',
    'Bartie Stathers',
    'Mollie Shropsheir',
    'Francklin Blaxland',
    'Galven Klausen',
    'Janeczka Lamartine',
    'Katleen Decayette',
    'Mallorie Gammidge',
    'Saunders Pull',
    'Ferdinand Carbett',
    'Lockwood Castard',
    'Kailey St Pierre',
    'Anna-maria Cabera',
    'Maryann Ertel',
    'Jennette McCafferky',
    'Gertrud Sumner',
    'Jessie Pennone',
    'Nadiya Pree',
    'Ruttger Boutellier',
    'Llywellyn Hankinson',
    'Brittney Rhymes',
    'Lynne Braithwaite',
    'Charissa Batten',
    'Waldo Beebis',
    'Donn Fantonetti',
    'Ryley Downgate',
    'Arabel Bracci',
    'Oliver Nuzzetti',
    'Cordell Rowcastle',
    'Gavrielle Wiggam',
    'Wandis Giottini',
    'Celine Townson',
    'Gates Clayworth',
    'Bo Timby',
    'Jesselyn Tadman',
    'Kipper Vidyapin',
    'Dianemarie Coaster',
    'Kristyn Hubatsch',
    'Moses Rushmere',
    'Aldridge Giorgini',
    'Daffy Durrans',
    'Raymund Dodworth',
    'Maurita Issett',
    'Shanda Gendrich',
    'Fayre Closs',
    'Ker Schlagh',
    'Nicol Dewdney',
    'Vicky Medler',
    'Fitzgerald Yeskov',
    'Gusta Pacquet',
    'Fitzgerald Calrow',
    'Aveline Gapp',
    'Brittne Stiegars',
    'Egbert Gibben',
    'Berrie Borwick',
    'Paton Oda',
    'Sheryl Younie',
    'Humbert Zanettini',
    'Danny Tenman',
    'Curry Glamart',
    'Aindrea Limprecht',
    'Dasha Coping',
    'Dominique O\'Cullen',
    'Dicky Bransby',
    'Berty Steeples',
    'Isabelle Kyston',
    'Melita Foster' ];
  let phoneNumbers = [ '559-828-3900',
    '602-667-2724',
    '406-238-2060',
    '210-636-3499',
    '596-667-7262',
    '293-340-6474',
    '273-120-5257',
    '396-766-0395',
    '782-327-2892',
    '650-334-2022',
    '582-675-2569',
    '293-775-0508',
    '535-454-7148',
    '140-814-2135',
    '378-469-0009',
    '801-606-7709',
    '447-192-3657',
    '627-186-2288',
    '882-269-2144',
    '407-741-9774',
    '536-565-3931',
    '771-514-4166',
    '443-114-3634',
    '936-455-2625',
    '202-121-2351',
    '955-480-3396',
    '742-891-2748',
    '228-919-2902',
    '715-671-3542',
    '745-782-5589',
    '242-560-7078',
    '460-560-0346',
    '792-300-2181',
    '472-580-9945',
    '424-852-8390',
    '588-813-1250',
    '628-908-5365',
    '845-960-8647',
    '641-769-4092',
    '777-784-5007',
    '970-500-0932',
    '177-454-8442',
    '732-938-8869',
    '509-587-1058',
    '197-288-5139',
    '430-825-2425',
    '125-542-2913',
    '786-146-9807',
    '831-254-4306',
    '287-779-7852',
    '433-302-6101',
    '680-214-9096',
    '504-634-0150',
    '924-503-0035',
    '262-364-2289',
    '779-708-9518',
    '236-981-8482',
    '713-967-1112',
    '793-294-2239',
    '412-120-3083',
    '905-423-9633',
    '517-608-2429',
    '997-123-0305',
    '376-416-3900',
    '760-880-5244',
    '827-155-4169',
    '850-331-0351',
    '978-300-0164',
    '552-306-9679',
    '937-373-1754',
    '906-737-7825',
    '994-682-8035',
    '123-270-5849',
    '696-655-3568',
    '605-568-3316',
    '331-168-2867',
    '550-217-8303',
    '304-827-1948',
    '405-975-2903',
    '322-293-1091',
    '568-746-1766',
    '994-188-1343',
    '811-773-4404',
    '133-852-4423',
    '616-561-7445',
    '919-518-3968',
    '973-398-4539',
    '162-571-3171',
    '795-838-4599',
    '488-764-6280',
    '967-843-0163',
    '345-975-1852',
    '102-781-5071',
    '889-398-7819',
    '440-308-1081',
    '380-815-2188',
    '140-268-4999',
    '569-475-1692',
    '270-586-0052',
    '719-737-0069' ];

  let random = array => {
    return Math.floor(Math.random() * array.length);
  };

  for (let i = 0; i < amount; i++) {

    let document = {
      propertyID: i,
      headline: headlines[random(headlines)],
      type: types[random(types)],
      area: area[random(area)],
      bedrooms: brCount[random(brCount)],
      sleeps: sleeps[random(sleeps)],
      bathrooms: bathCount[random(bathCount)],
      halfBaths: halfbathCount[random(halfbathCount)],
      minStay: minStay[random(minStay)],
      brief: brief[random(brief)],
      description: propDesc[random(propDesc)],
      owner: owners[random(owners)],
      phone: phoneNumbers[random(phoneNumbers)]
    };

    docsArray.push(document);
  }
  return docsArray;
};

const documents = generator(100)/*?*/;

overview.create(documents).then(() => overview.disconnect());


