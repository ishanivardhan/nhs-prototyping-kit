// start.js
// ==========================================================================
// In this file let's get the install checked and the app up and running.

// Check we have installed modules
// --------------------------------------------------------------------------
// Check we have a `node_modules` folder otherwise prompt an install
//

// Firstly the requires
var path = require('path')
var fs = require('fs')

// Check `node_modules` folder exists...
const nodeModulesExists = fs.existsSync(path.join(__dirname, '/node_modules'))

// ...and prompt an install if missing
if (!nodeModulesExists) {
  console.error('ERROR: Node module folder missing. Try running `npm install`')
  process.exit(0)
}


// Gulp
// ---------------------------------------------------------------------------
//

// Requires to sport node async scripts
var spawn = require('cross-spawn')
// Colour set for errors
process.env['FORCE_COLOR'] = 1

// Gulp
var gulp = spawn('gulp')

// Catch errors
gulp.stdout.pipe(process.stdout)
gulp.stderr.pipe(process.stderr)
process.stdin.pipe(gulp.stdin)

// Report errors
gulp.on('exit', function (code) {
  console.log('gulp exited with code ' + code.toString())
})
