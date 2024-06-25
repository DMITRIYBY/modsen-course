function greeting(name) {
    console.log(`Здравствуй, ${name}!`);
}

function testCallback(callback) {
    const name = 'Александр';

    setTimeout(() => {
        callback(name)
    }, 2000)
}

testCallback(greeting);