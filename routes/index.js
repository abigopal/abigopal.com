
/*
 * GET home page.
 */

exports.index = function(req, res) {
  res.render('index', { title: 'Abi Gopal' });
};

exports.key = function(req, res) {
  res.render('key', { title: 'Abi Gopal' });
};
