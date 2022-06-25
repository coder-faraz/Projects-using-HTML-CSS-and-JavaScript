
// JavaScript can be executed in time-intervals. This is called Timinig Events.  The setInterval() is a
// HTML DOM Window Object method, that repeates the execution of a given funtion at given Time-Interval.
// The clearInterval() method stops the execution of the function specified in setInterval()..

setInterval( () => {
    const date = new Date();      // Creating a new Date object with current date & time.
    hTime = date.getHours();         // These are Date Object Methods.
    mTime = date.getMinutes();
    sTime = date.getSeconds();

    hhRotation = 30 * hTime + mTime/2;       // from our calculation done below
    mhRotation = 6 * mTime;
    shRotation = 6 * sTime;

    hour.style.transform = `rotate(${hhRotation}deg)`
    minute.style.transform = `rotate(${mhRotation}deg)`
    second.style.transform = `rotate(${shRotation}deg)`

}, 1000);   // There are 1000 milliseconds in 1 second

    // rotate() -- CSS rotate() function, rotates an element around a point called Transform Origin.  By
    // default, transform-origin is center but you can set your own point.  The amount of rotation created 
    // by rotate() is specified by an <angle> of rotation. If positive, the movement will be clockwise; 
    // otherwise, it will be counter-clockwise. 


// Initially all our Hands will point at 12


                    // Hour Hand Rotation -- 
// for 12 hours, rotation = 360
// for 1 hour, rotation = 360/12 = 30
// for h hour, rotation == 30 * h.
                    // Extra Rotation due to Minutes --
// for 1 hour(60 minutes), rotation = 30
// for 1 minute, rotation = 30/60 = 1/2
// for m minutes, rotation == m/2.
    // Total Hour Hand Rotation == 30*h + m/2.

                    // Minute Hand Rotation --
// for 60 minutes, rotation = 360
// for 1 minute, rotation = 360/60 = 6
// for m minutes, rotation == 6 * m.
                    // Negligible Rotation will occur in Minutes Hand due to Seconds

                    // Seconds Hand Rotation --
// for 60 seconds, rotation = 360
// for 1 second, rotation = 360/60 = 6
// for s seconds, rotation == 6 * s.


            // NOTE:- JavaScript stores dates as number of milliseconds since January 01, 1970, 00:00:00
