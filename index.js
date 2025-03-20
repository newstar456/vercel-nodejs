const express = require('express');
const app = express();
const PORT = 4000;

const { createClient } =require('@supabase/supabase-js')
const supabase = createClient('https://eyxccahssmwxluobjzyb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5eGNjYWhzc213eGx1b2JqenliIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI0MTE3NDYsImV4cCI6MjA1Nzk4Nzc0Nn0.EyAezK8taMRdmnGdvmQFSI2wtbEhFqlsBjE8n4NQIu4')






app.get('/', (req, res) => {
    async function fetchShops() {
  try {
    const {data, error} = await supabase.from('Shops').select();
    // console.log(data);
    res.status(200).json(JSON.stringify(data, null, 2));
    console.log('Connection to SUPABASE has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
fetchShops();
    
});


app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;