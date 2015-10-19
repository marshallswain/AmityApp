import fixture from 'can-connect/fixture/';

const store = fixture.store([{
  name: 0,
  description: 'First item'
}, {
  name: 1,
  description: 'Second item'
}]);

fixture({
  'GET /amity/servers': store.findAll,
  'GET /amity/servers/{name}': store.findOne,
  'POST /amity/servers': store.create,
  'PUT /amity/servers/{name}': store.update,
  'DELETE /amity/servers/{name}': store.destroy
});

export default store;

