import Conf from "conf"
import chalk from "chalk"
import { exec } from "child_process"

const config = new Conf({ projectName: 'traveler-cli' })

const IGNORE = [
    ':!*package-lock\.json',
]

function report() {
    exec(`git diff -- ${IGNORE.map(ignore => `'${ignore}' `)}`, (err, stdout, stderr) => {
        if (err) {
            console.error(`Error: ${err.message}`);
            return;
        }
        console.log(`Send: ${stdout}`);
    });
}

export { report }
