import React from 'react';
import ReactDOM from 'react-dom';
import Overview from './components/overview.jsx';

const test = { propertyID: 0,
  headline: 'Amet justo morbi ut odio cras',
  type: 'Apartment',
  area: 3600,
  bedrooms: 5,
  sleeps: 2,
  bathrooms: 4,
  halfBaths: 2,
  minStay: 1,
  description: 'Varius duis at consectetur lorem donec massa sapien faucibus. Dignissim sodales ut eu sem integer vitae. Urna molestie at elementum eu facilisis sed odio morbi. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Elit at imperdiet dui accumsan sit amet nulla facilisi morbi. Eget egestas purus viverra accumsan. Libero nunc consequat interdum varius sit amet mattis vulputate. Arcu bibendum at varius vel pharetra vel turpis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque.',
  owner: 'Andie Farleigh',
  phone: '460-560-0346' };




ReactDOM.render(<Overview />, document.getElementById('overview'));
