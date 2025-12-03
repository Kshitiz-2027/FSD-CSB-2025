const express = require('express');
const app = express();
const PORT = 7878;
const cors = require('cors');
const fs = require('fs').promises;

app.use(cors());

app.use(express.json());



app.get('/', (req, res) =>
{
    res.send("<h2>Hello from the Express server!</h2>");
});

app.get('/msg',(req,res)=>
{
      res.json({msg:"this is message end point"});
})     

app.post('/register', async (req,res)=>
{
    try {
        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;

        let data;
        try {
            data = await fs.readFile('./student.json', { encoding: 'utf-8' });
        } catch (err) {
            if (err.code === 'ENOENT') {
                data = '[]';
            } else {
                throw err;
            }
        }

        const arr = JSON.parse(data);
        const exists = arr.find(ele => ele.email === email);

        if (exists)
        {
            return res.json({msg:"This email is already registered"});
        }
        else
        {
            arr.push({ name, email, password });
            await fs.writeFile('./student.json', JSON.stringify(arr, null, 2));
            return res.json({msg:"Registration successful"});
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({ msg: "Server error" });
    }
})

app.listen(PORT, () =>
{
    console.log("Server is running on port " + PORT);
})