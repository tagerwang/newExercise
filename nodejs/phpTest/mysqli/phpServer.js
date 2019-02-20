var PHPFPM = require('node-phpfpm');
 
var phpfpm = new PHPFPM(
{
    host: '127.0.0.1',
    port: 9000,
    documentRoot: __dirname
});
 
phpfpm.run('./a.php', function(err, output, phpErrors)
{
    if (err == 99) console.error('PHPFPM server error');
    console.log(output);
    if (phpErrors) console.error(phpErrors);
});
