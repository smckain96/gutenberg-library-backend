
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('library').del()
    .then(function () {
      // Inserts seed entries
      return knex('library').insert([
        {id: 1, text_id: 123},
        {id: 2, text_id: 456},
        {id: 3, text_id: 789},
        {id: 4, text_id: 987},
        {id: 5, text_id: 654},
        {id: 6, text_id: 321},
        {id: 7, text_id: 132},
        {id: 8, text_id: 465},
        {id: 9, text_id: 798},
        {id: 10, text_id: 1231},
      ]);
    });
};
