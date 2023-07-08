// Basically we need to delete pipelines cache files in the rdr2 settings folder continuously

// Imports :
const { unlinkSync, existsSync, readdirSync } = require('fs')
const { extname } = require('path')
const { homedir } = require('os')
const cron = require('node-cron')

// Constants :

// Evaluates to C:\Users\xxxx\Documents\Rockstar Games\Red Dead Redemption 2\Settings
const RDR2SETTINGSFOLDER = homedir() + `\\Documents\\Rockstar Games\\Red Dead Redemption 2\\Settings`;

// List of pipeline cache file extensions i've found so far
const CACHE_EXTENSIONS = [ '.vkPipelineCacheWindows', '.d3d12PipelineCacheWindows', '.vkPipelineCacheHeaderWindows' ];

// Verification :

// If it doesn't exist, well "it works on my machine :)" 
if ( !existsSync(RDR2SETTINGSFOLDER) ) throw "Can't find settings folder!\n( Documents/Rockstar Games/RDR2/Settings/ )";

// Main function :

function delete_cache () {

    // Scan each file in the settings directory
    readdirSync(RDR2SETTINGSFOLDER).forEach( file => {

        if ( CACHE_EXTENSIONS.includes( extname(file) ) ) { // If the file is a pipeline cache file, delete it.

            unlinkSync( RDR2SETTINGSFOLDER + `\\${file}` ).catch(e => { console.log(e) })

        }

    });

}

// Cronjob scheduled for every 3 seconds :

var count = 1;

console.log("Running RDR2 Cache clearer! Leave this on while you play RDR2.")

cron.schedule('*/3 * * * * *', () => { // Delete cache every 3 seconds

    console.log(`${count}: Clearing cache`)
    delete_cache();
    count += 1;

});