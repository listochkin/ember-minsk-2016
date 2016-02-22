import PageObject from 'minsk-training-app/tests/page-object';

let {
  visitable,
  text
} = PageObject;

export default PageObject.create({
  visit: visitable('/r/11/Welcome'),
  roomName: text('h3')
});
