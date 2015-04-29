// Wrap everything in a function to keep your stuff private.
(function () {

    // JavaScript strict mode is a good thing.
    "use strict";

    // Define a unique global namespace for your stuff.
    // You should change this to a namespace that is appropriate for your project.
    fluid.registerNamespace("myStuffC");

    var enviro3 = flock.init();

    // Expose any public functions or constructors as properties on your namesapce.
    myStuffC.play = function () {

        var synth = flock.synth({
            synthDef: {
                ugen: "flock.ugen.playBuffer", // example of a .wav file input
                buffer:{
                    id:"C",
                    url:"sounds/C.wav",

                }/* 
                } /*
                ugen: "flock.ugen.sinOsc",
                freq: 440,
                duration: 1.0*/
            }
        });

        enviro3.play();
    };

    myStuffC.end = function () {
        enviro3.stop();
    }

}());
