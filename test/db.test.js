import {overview} from '../db/index.js';

describe('Database Tests', () => {

  test('Should return proper values based on the chosen document', () => {
    expect.assertions(15);
    return overview.find({propertyID: 4}).exec()
      .then(document => {
        expect(document[0].propertyID).toBe(4);
        expect(typeof document[0].propertyID).toBe('number');
        expect(document[0].headline).toBe("Leo rhoncus sed vestibulum sit amet cursus");
        expect(document[0].type).toBe('Cabin');
        expect(typeof document[0].type).toBe('string');
        expect(document[0].area).toBe(2300);
        expect(document[0].bedrooms).toBe(3);
        expect(document[0].sleeps).toBe(5);
        expect(document[0].bathrooms).toBe(5);
        expect(document[0].halfBaths).toBe(3);
        expect(document[0].minStay).toBe(3);
        expect(document[0].brief).toBe("Leo rhoncus sed vestibulum sit amet cursus");
        expect(document[0].description).toBe("Gravida cum sociis natoque penatibus et magnis. Mattis molestie a iaculis at erat pellentesque adipiscing commodo elit. Neque ornare aenean euismod elementum nisi quis. Sit amet justo donec enim diam vulputate ut. Tempor commodo ullamcorper a lacus. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque. Ac placerat vestibulum lectus mauris. Nisl pretium fusce id velit ut tortor. Tristique senectus et netus et malesuada fames. Sollicitudin tempor id eu nisl. Turpis cursus in hac habitasse platea. Morbi tristique senectus et netus et malesuada fames ac. Quisque sagittis purus sit amet volutpat consequat mauris nunc. Est placerat in egestas erat imperdiet sed euismod nisi.");
        expect(document[0].owner).toBe('Gavrielle Wiggam');
        expect(document[0].phone).toBe('779-708-9518');

      });
  });

});
