var mysql = require('mysql');
var connect = mysql.createConnection({
  host: 'localhost', 
  user: 'root',      
  password: '',      
  database: 'db-mag-it' 
}); 
 
conn.connect(function(err) {
  if (err) throw err;
  console.log('Database is successfully connected!');
});
module.exports = connect;