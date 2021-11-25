
export default function handler(req, res) {
    console.log(req.body.file);
    res.status(200).json({ name: 'John Doe' })
}