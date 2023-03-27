
function getJob(data){
    let output = null;
    //https://www.youtube.com/watch?v=lSAFVMaaH-w&ab_channel=ApesinCapes
    const spawner = require('child_process').spawn

    //2 parameters, python command, and python script location + data in an array 
    const pyProcess = spawner('python', ['./Google_Scraper.py', data]);
    //const pyProcess = spawner('python', ['./pytest.py', JSON.stringify(data)]);
    
    //callback function to trigger when data is returned
    pyProcess.stdout.on('data', (data) => {
        out = data.toString()
        out.split("\n")
        out.slice(1,out.length-1)
        console.log(out);
    })
    return output
}
getJob("clerk", function(message){console.log(message);})

