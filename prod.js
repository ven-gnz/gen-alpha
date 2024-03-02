/* -*- mode: javascript; tab-width: 4; indent-tabs-mode: nil; -*- */

/**
 * @fileOverview This file "prod.js" is the graphical content of the intro.
 *
 * This initial example belongs to the starter package of "Let's make a demo
 * 1.x" party coding workshop. During 3 x 4 tutored hours and your own effort
 * between them, this file eventually becomes your own artistic production.
 * Additionally, you will replace song.js with your own music exported from
 * SoundBox as JavaScript, write your own README.txt and set up a few names in
 * Settings.mk.
 *
 * How to start:
 *
 * 1. Make a complete copy of the whole "example0" directory and rename it
 *    according to your planned concept or just "PaulsFirstIntro" or whatever
 *
 * 2. If you happen to know what it means, do your favorite flavor of 'git init;
 *    git add *.js *.txt *.mk Makefile; git commit -m "Start from the example"' 
 *
 *    If you don't know what it means, skip that one.
 *
 * 3. Make sure that you can build and preview the example without problems.
 *
 * 4. Explore and try to learn how the example works.
 *
 * 5. Gradually, piece by piece, make it your own. Ask help from a workshop
 *    tutor. I recommend starting from very small changes to the example that
 *    help your understanding - how you change a color, how you change a
 *    location, how you change a rotation, how you sync something with the song
 *    time, ...
 *
 * 6. At some point, when comfortable, you can let go of these how-to comments
 *    and make this code file completely yours. One thing I recommend is storing
 *    your SoundBox song URL in a comment so it doesn't get lost.
 *
 **/

/*
The visuals of this production are synced to the following song
created using the great SoundBox minisynth:

http://sb.bitsnbites.eu/?data=U0JveAwC7dm9SsNQGMbx56RpBoeqizgGexWCuzeiWIoSxBIIRcwSQmiQlCKIeCdOjl6Nl6AnX5Dix5zo_5e-73vaLCfhTH1OD6SJfNc5izV6i2Ud7tp27BnnVc5040V2NXI9W3Z6jqNAS6Wdnm31lfouCL7f_6qat7rv-f6vFCnp9HSrZ71__7PZQrEWzYyrab9pHobzKEmivu__Qje66_RrndtT0_ZwwOd_qVyPX85_0cy1rY0AAAAAAAAAAPibulHZvtqoTH4ZlUmmuhrPT3oY8qPW-y__-C-qWKBYK1cZ8WVEAQAAAAAAAAAAAP_Sx8LYkpHrTetfnInkt7dNqV6m9vNb8S4BAAAAAAAAAAAwLHldJ-7OkV29jGXeU_mX4z23vGuarKxqZRr2Q6UkZQAAAAAAAAAAABiWTw

One older version, as an example of "keeping track of your song versions":

http://sb.bitsnbites.eu/?data=U0JveAwC7dk9SgNBGAbgd2MS0MKfSsvFnELwOJZCGhsRJN0SEiQhCCLexMrS03gE3c0aiKLWRp9n-L4ZdqaY2fa9Pky2U3Y7Z6NsPY9SO9qr20m_6DylM1j0L-tVO5JhrlKt9fGHPslvNxx-ff9J3ae5y82n87P3eV7XIgAAAAAAAPw16ynZQVYpWcomJUuK5Uge7nO7ya9s799kXrNlIjabZ5om3RtLwQAAAAAAAP6l14uirhTp9gftl85uUq62i0aqpPqp_EYAAAAAAAA2y7St0-7Ocb167KV4qVKe9_a7zW7RxmTLIOybqoRkAAAAAAAAbJY3

*/

// ----------------------------------------------------------------------------
// Global variables that you MUST define - they are used by the library code:

/** Song tempo; the library computes time in beats for easy sync. */
var songBeatsPerMinute = 240;

/** 
 * Frame producer function must be selected; this tutorial example depends on
 * the exact selection done here. In fact, everything after this selection could
 * be very different for different approaches of how to paint each graphics frame.
 *
 * TODO: In the future (maybe not yet in 2024) there could be a larger selection
 * of "demo type" choices here. So far there is the classic adaptation of course
 * exercise answers: You provide a scenegraph with objects, camera, and light.
 * The frame producer function traverses the graph and puts stuff to screen.
 */
var frameProducerFunction = frameProducerVanilla14;

/**
 * Shader selection; this tutorial example depends on the exact ones selected.
 * You better know what you do, if you change these. That said, why not ... The
 * library compiles the combination of shaders given here and uses that as the
 * shader program for everything that you draw.
 *
 * TODO: (Probably after 2024) This is related to the "demo type" choices which
 * I'd like to provide in the library. So far let's have one simple one: It has
 * a Phong shading model with exactly one light source. No white fog this year..
 */
var shaders = [vert_shader_vanilla14, frag_shader_vanilla14];

/** You must give an RGBA color; scene background is cleared by the library.*/
var clearColor = [0,0,0,1];

// ----------------------------------------------------------------------------
// Global variables that belong to your own production - the library does not
// use these, so you can change or add whatever you want here. They need to be
// global so they are available in your draw function below:

var objTile, objBackground, objBall;

var brown=
[ .5, .02, .05, 1,
  .02, .75, .05, 1,
  .0,  .0,  .1,  2,
   0,   0,   0,  0  ];

   var green=[
   .15, .02, .05, 1,
  .02, 1, .05, 1,
  .0,  .0,  .22,  2,
   0,   0,   0,  0 
   ]

function initAssets(){
  
    // Now there is a box shape available in the library:
    objTile = new Box(1);

    // Ball can be built from circle curves:
    objBall = new GenCyl(new funCircle(1,10,.5), 32,
                         new funCircle(0,32));

    // Can make the radius negative to make an interior of a ball:
    objBackground = new GenCyl(new funCircle(-10,10,.5), 32,
                               new funCircle(0,32));

}



 

    /**
     * Example of a scene graph node. If you have any experience with JSON,
     * you'll get it that a node is and object with 3 properties named "f", "o",
     * and "c", and they all are lists. If this is your first encounter, you
     * learn some basic JSON syntax here. Ask your tutor to clarify.
     *
     * The names are short and carefully selected to have minimal footprint in a
     * demoscene intro. Here is the semantics and some mnemonics to help you
     * remember what they mean:
     *
     *   "f" stands for Frame transformations or Functions: a list of 4x4
     *   matrices that are right-multiplied to current scene transformation
     *   matrix before entering the node further.
     *
     *   "o" stands for Objects: a list of actual objects / shapes that are
     *   drawn using the current transformation, after applying all "f".
     *
     *   "c" stands for Children: a list of nodes that will be processed after
     *   applying "f" and drawing "o". If you have been wondering what recursive
     *   processing means, then here is a good example about it.
  
     *
     * First row:  [ Ambient  R,G,B = base color in shadowed region,      (unused) ]
     * Second row: [ Diffuse  R,G,B = diffuse reflectance in lit region,  (unused) ]
     * Third row:  [ Specular R,G,B = specular 'shiny' reflectance,      shininess ]
     * Fourth row: [ (unused), (unused), (unused), mesh brightness ]
   

*/
  


function drawLeaf(rotation, leaf, depth, length, thickness){

    if(depth === 0){
        return
    }

    var color = depth === 1 ? green : brown

    var rightleaf = {
        f : [rotZ_wi(-rotation*3.14/180),translate_wi(0,length,0)],
        o : [],
        c : [{
            f : [ scaleXYZ_wi(thickness, length, thickness)],
            o : [new Material(color),objBall],
            c : []
        }]
    };

    var leftleaf = {
        f : [rotZ_wi(rotation*3.14/180),translate_wi(0,length,0)],
        o : [],
        c : [{
            f : [ scaleXYZ_wi(thickness, length, thickness)],
            o : [new Material(color),objBall],
            c : []
        }]
    }

   leaf.c.push(leftleaf,rightleaf)
    drawLeaf(rotation,leftleaf,depth-1,length,thickness)
    drawLeaf(rotation,rightleaf,depth-1,length,thickness)

}

function drawRootsRecur(rotation,root,depth,length,thickness){

    if (depth === 0) {
        return
    }


    var rightnode = {
        f : [rotZ_wi(-rotation*3.14/180),translate_wi(0,-length,0)],
        o : [],
        c : [{
            f : [ scaleXYZ_wi(thickness, length, thickness)],
            o : [new Material(brown),objBall],
            c : []
        }]
    };

        var leftnode = {
            f : [rotZ_wi(rotation*3.14/180),translate_wi(0,-length,0)],
            o : [],
            c : [{
                f : [ scaleXYZ_wi(thickness, length, thickness)],
                o : [new Material(brown),objBall],
                c : []
            }]
        };

        root.c.push(leftnode,rightnode)
        drawRootsRecur(rotation,leftnode,depth-1,length,thickness)
        drawRootsRecur(rotation,rightnode,depth-1,length,thickness)

}

function drawTree(t){

    var trunkHeight = .1*t > 5.5 ? 5.5 : .1*t;
    var trunkThickness = .05*t > 1.5 ? 1.5 : .05*t;

    var puu = {
        f : [],
        o : [],
        c: []
    };

    var siemen = {
        f : [translate_wi(0,0,0)],
        o : [new Material(brown),objBall],
        c : []
    }
    var runko = {
        f : [translate_wi(0,0.75,0),scaleXYZ_wi(trunkThickness,trunkHeight,trunkThickness)],
        o : [new Material(brown),objTile],
        c : []
    }

        var rootThickness = 0.01*t > 0.15 ? 0.15 : .01*t;
        var rootLength = 0.25*t > 1.75 ? 1.75 : 0.25*t;

        var growthFactor = t / 4;
        var maxDepth = Math.floor(growthFactor) > 7 ? 7 : Math.floor(growthFactor);

        var ro = {f : [], o : [], c : []};
        drawRootsRecur(17.5,ro,maxDepth,rootLength,rootThickness);

        var le = {f : [], o : [], c : []};
        var leafDepth = 1
            
        var leafGrowthFactor = t/3 - 20

        if(leafGrowthFactor > 0){
            leafDepth = Math.floor(leafGrowthFactor) > 8 ? 8 : Math.floor(leafGrowthFactor)
            drawLeaf(17.5,le,leafDepth,rootLength*0.75,0.2)
        }

        

        
        console.log(leafGrowthFactor)
        
        puu.c.push(siemen);
        puu.c.push(runko);
        puu.c.push(le);
        puu.c.push(ro);

    return puu;
}


/** 
 * Example of a function that returns a diffuse non-shiny basic coloring
 * compatible with the Vanilla 1.4 shader
 */
function basic_color(r,g,b){
    return [r/3, g/3, b/3, 0,
            r,   g,   b,   0,
            0,   0,   0,   1,
            0,   0,   0,   0]
}

/**
 * Your own creative "direction" happens here - this function will be called on every
 * screen update.
 *
 * You are expected to return a scene graph for any time step here.
 * Time is given as 'beats' according to song tempo that you have set above.
 *
 * This is an important function to re-write creatively to make your own entry.
 * 
 * You can start deleting and replacing parts of the example as soon as you start to
 * get an idea of how the structure is built. Exploring with small changes is a recommended
 * way of learning. You can also talk you a workshop tutor and explore the possibilities
 * available - they are limited, but can still be put together in a million ways or more.
 *
 */
function buildSceneAtTime(t){

    // Initialize empty scenegraph. Root node with nothing inside:
    var sceneroot = {f:[],o:[],c:[]};

    // Build animated contents step by step, in subgraphs
 
    var puu = drawTree(t);

    // Generating colors can be put into functions just like anything - for convenience and brevity
    var cpohja = basic_color(.9, .6, .4);

    // Colors can be animated, as can anything. Use "t" for sync and innovate...
    var cloota = basic_color(.2, .5 + Math.sin(t), .4);

    // Names can be given to any nuts or bolts, to help you animate and manage your scene:

    var ctausta=
        [.1, .1, .2, 1,
         .3, .3,  1, 1,
         .1, .1, .1, 2,
          0,  0,  0, 0 ];

    var tausta = {
        f:[],
        o:[new Material(ctausta), objBackground],
        c:[]
    };


    sceneroot.c.push({f:[],
                      o:[],
                      c:[

                                {   f: [],
                                    o : [],
                                    c : [puu]
                                    },

                              {f:[scaleXYZ_wi(3,3,3)],
                               o:[],
                               c:[tausta]
                              },
                                
                              // The scene must have exactly one Camera. It doesn't work without.
                              {f:[translate_wi(0,10,0), rotY_wi(0), translate_wi(0,0,45), rotX_wi(0.2)],
                               o:[],
                               c:[],
                               r:[new Camera()]
                              },

                              // With "Vanilla 1.4" intro, the scene must have exactly one Light.
                              // It doesn't work without.
                              {f:[translate_wi(9*Math.sin(t/9), 3+Math.sin(t), 0), scale_wi(.1)],
                                o:[new Material(basic_color(9,9,9)), objTile],
                                c:[],
                                r:[new Light()]
                              }
                        ]
                    }
                    );
    
    return sceneroot;
}


function initDocument(){
}

function updateDocument(t){
}
