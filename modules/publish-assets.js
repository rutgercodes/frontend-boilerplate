// promise based file parsing
const pfs = require( __dirname + '/parse-fs' )
// Recursive copy library
const ncp = require( 'ncp' )

const { mkdir } = require( './parse-fs' )

let copyfolder = ( source, destination ) => {
	return new Promise( ( resolve, reject ) => {
		// Recursively copy all assets from the source to the public folder
		mkdir( destination ).then( () =>  {
			ncp( source, destination, err => {
				if ( err ) return reject(  err )
				resolve( )
			} )
		} )
	} )
}

const copyassets = site => pfs.del( site.system.public + 'assets/*' )
.then( copyfolder( site.system.source + 'assets', site.system.public + 'assets' ) )

module.exports = copyassets