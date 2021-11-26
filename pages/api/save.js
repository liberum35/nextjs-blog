const fs = require('fs');
export default function handler(req, res) {
    const file= req.body.file;
    console.log(file);
    fs.writeFile('pages/files/123.json', JSON.stringify(file),(err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    res.status(200).json({ name: 'John Doe' });

}