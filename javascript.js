const spawner = require('child_process').spawn;

// string - do not need to stringify data
// const data_to_pass_in = 'Send this to python script.';

// array
// const data_to_pass_in = ['Send this to python script.'];

//object
const data_to_pass_in = {
    data_sent: 'Send this to python script.',
    data_returned: undefined
};

console.log('Data sent to python script:', data_to_pass_in);

const python_process = spawner('python', ['./python.py', JSON.stringify(data_to_pass_in)]);

python_process.stdout.on('data', (data) => {
    console.log('Data received from python script:', data.toString());
})