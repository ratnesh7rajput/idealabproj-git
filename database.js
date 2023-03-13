const mysql = require('mysql');

const connection = mysql.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'riddhi88@abc',
    database: 'ecourt_database',

})

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected to MySQL Server!');
});





