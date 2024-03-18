import express from 'express';

const app = express();

app.listen(3000, ()=>{
    console.log(`SERVER RUNNING ON PORT 3000`);
})