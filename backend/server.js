const mysql = require('mysql2');
const app = require('./app');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;
const DATABASE_URL = process.env.DATABASE_URL;

const connection = mysql.createConnection(DATABASE_URL);

connection.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('MySQL connected successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});