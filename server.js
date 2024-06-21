const express = require('express');
const app = express();
const port = 4000;

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/prime.html');
});

app.get('/calculate', (req, res) => {
    const { num1, num2 } = req.query;
    const start = parseInt(num1);
    const end = parseInt(num2);
    const primes = [];

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }

    res.send(primes.join(', '));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
