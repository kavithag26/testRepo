module.exports = function(robot) {
  return robot.router.get('/logs/hubotlogs', function(req, res) {
    var message, room;
	var a=new Array();
    room = req.params.room;

    message = req.body.message;

                // Set the probe to push changes every 10 seconds
                var options = {
                  hostName: 'localhost',
                  probeClass: 'Process',
                  initParams: {
                pollInterval: 10000
                                }                
                }
                var jsonout= "";
                robot.messageRoom(room, 'logfile accessed');
                // Attach the change listener
								//document.getElementById('logs.txt').onchange = function(){
								//const file = "/logs.txt";

									//var file = this.files[0];
									var config, foo, fs;

									fs = require('fs');

									config = '.\\logs.txt';

									foo = function() {
										return fs.readFileSync(config, 'utf8');
									};
									var array=foo();
									var array1=array.split('\r\n');
									//console.log(array1.length);
										for(var line = 0; line < array1.length; line++){
											//console.log(lines[line]);
											//jsonout=JSON.stringify({logdata:array1});
											//jsonout=array1[line];
											res.write(array1[line]);
											//res.end(jsonout);
										}
									//reader.readAsText(file);
							
                                //jsonout=JSON.stringify({logdata:a});
//                                console.log(jsonout);
                                //res.end(jsonout);
    return res.end();
  });
};

// ---
// generated by coffee-script 1.9.2

