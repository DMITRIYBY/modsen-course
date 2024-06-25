async function getInsult() {
    const message = await fetch('https://evilinsult.com/generate_insult.php?lang=en&type=json')
        .then((response) => response.json())
        .then((data) => data.insult)
        .catch((error) => {
            console.log(error)
        })

    return message;
};

async function printInsult() {
    const insult = await getInsult();
    console.log(insult);
};

printInsult();