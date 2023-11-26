// create two text file for append
 const readline = require('readline');
const fs = require('fs').promises;

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

async function appendFiles() {
    const sourceFileName = await getInput('Enter the name of the source file: ');
    const targetFileName = await getInput('Enter the name of the target file: ');

    try {
        const data = await fs.readFile(sourceFileName, 'utf8');
        await fs.appendFile(targetFileName, data);
        console.log('Contents appended successfully.');
    } catch (err) {
        console.error(`Error: ${err.message}`);
    } finally {
        rl.close();
    }
}

function getInput(question) {
    return new Promise(resolve => rl.question(question, resolve));
}

// Call the function to start the process
appendFiles();
