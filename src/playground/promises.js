const myPromise = new Promise ( ( resolve, reject ) => {
    setTimeout ( () => {
        //resolve ( 'This is my promise data.' )
        reject ( 'Something went wrong.' )
    }, 3000 )
} )

console.log ( 'before' )

myPromise.then ( ( data ) => {
    console.log ( `Data: ${data}` )
} ).catch ( ( error ) => {
    console.log ( `Error: ${error}` )
} )

console.log ( 'after' )