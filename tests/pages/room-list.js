import PageObject from '../page-object';

let {
  visitable,
  text,
  clickable,
  collection
} = PageObject;

export default PageObject.create({
  visit: visitable('/'),
  roomList: collection({ itemScope: '[data-test="room-list"]' }),
  roomListItems: collection({
    itemScope: '[data-test="room-list"] li',
    item: {
      text: text('a'),
      click: clickable('a')
    }
  }),
});
