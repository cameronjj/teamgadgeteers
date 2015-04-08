// Wrap everything in a function to keep your stuff private.
(function () {

    // JavaScript strict mode is a good thing.
    "use strict";

    // Define a unique global namespace for your stuff.
    // You should change this to a namespace that is appropriate for your project.
    fluid.registerNamespace("myStuff");

    var enviro = flock.init();

    // Expose any public functions or constructors as properties on your namesapce.
    myStuff.play = function () {
        // Triangle oscillator.
    // Triggers a note whenever the mouse is clicked.
    // Simple sine wave oscillator
var synth = flock.synth({
    synthDef: {
        ugen: "flock.ugen.impulse",
        freq: {
            ugen: "flock.ugen.xLine",
            start: 880,
            end: 2,
            duration: 3.0
        },
        mul: 0.25
    }
});
      

   
        // If you're on iOS, you will need to call in a listener for
        // some kind of user input action, such a button click or touch handler.
        // This is because iOS will only play sound if the user initiated it.
        enviro.play();
    };

}());
