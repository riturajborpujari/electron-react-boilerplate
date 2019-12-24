const net = require('net');
const port = process.env.PORT ? (process.env.PORT - 100) : 3000;

const find = require('find-process')

process.env.ELECTRON_START_URL = `http://localhost:${port}`;

const client = new net.Socket();

let startedElectron = false;
const tryConnection = () => client.connect({ port: port }, () => {
    client.end();
    if (!startedElectron) {
        console.log('starting electron');
        startedElectron = true;
        const exec = require('child_process').exec;
        const electron = exec('npm run electron');
        electron.stdout.on("data", function (data) {
            console.log("stdout: " + data.toString());
        });

        electron.on('exit', _ => {
            find('name', 'node', 0)
                .then((list) => {
                    list.forEach(item => {
                        if (item.cmd.indexOf('react-scripts') !== -1) {
                            console.log('Found react-script process', item)
                            console.log(process.kill(item.pid, 'SIGHUP') ?
                                `Killed process ${item.pid}` :
                                `Could not kill process ${item.pid}`)

                        }
                    })

                }).catch((e) => {
                    console.log(e);
                });
        })
    }
}
);

tryConnection();

client.on('error', (error) => {
    setTimeout(tryConnection, 1000);
});

