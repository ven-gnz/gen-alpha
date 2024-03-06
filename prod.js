/* -*- mode: javascript; tab-width: 4; indent-tabs-mode: nil; -*- */

/**
 * @fileOverview This file "prod.js" is the graphical content of the intro.
 *
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
 */
var frameProducerFunction = frameProducerVanilla14;


var shaders = [vert_shader_vanilla14, frag_shader_vanilla14];

/** You must give an RGBA color; scene background is cleared by the library.*/
var clearColor = [0,0,0,1];

var objTile, objBackground, objBall, apple;
var applescale;

// First row:  [ Ambient  R,G,B = base color in shadowed region,      (unused) ]
// Second row: [ Diffuse  R,G,B = diffuse reflectance in lit region,  (unused) ]
// Third row:  [ Specular R,G,B = specular 'shiny' reflectance,      shininess ]
// Fourth row: [ (unused), (unused), (unused), mesh brightness ]

var brown=
[ .29, .19, .18, 1,
  .29, .18, .25, 1,
  .29,  .19,  .18,  2,
   0,   0,   0,  0  ];

   var green=[
   .15, 81, .05, 1,
  .02, 75, .05, 1,
  .0,  .0,  .22,  2,
   0,   0,   0,  0 
   ];

   var red=[
    .78, .27, .11, 1,
    .78, .27, .16, 1,
    .81, .31, .09, 1,
    0, 0, 0, 0
   ];

   var Defaultcolor = brown;
   var maxlength = 1.0;
   var minlength = 0.1;
   var len = 0;
   var initdepth = 0;
   var snipper = 4;

function initAssets(){
  
    // Now there is a box shape available in the library:
    objTile = new Box(1);
    applescale = 0

    // Ball can be built from circle curves:
    objBall = new GenCyl(new funCircle(1,10,.5), 32,
                         new funCircle(0,32));

    // Can make the radius negative to make an interior of a ball:
    objBackground = new GenCyl(new funCircle(-10,10,.5), 32,
                               new funCircle(0,32));

                                apple = {
                                f : [scaleXYZ_wi(0.3,0.3,0.3)],
                                o : [new Material(red),objBall],
                                c : []
                            }

}

function drawLeaf(rotation, leaf, depth, length, maxlength, thickness,t){

    if(depth === 0){
        return
    }

    var color = depth === 1 ? Defaultcolor : brown
    var length = depth === 1 ? length : maxlength
    var offset = color === green ? 0.2 : 0
    var thick = color === green ? 14*thickness : thickness




    var rightleaf = {
        f : [rotZ_wi(-rotation*3.14/180),translate_wi(0,length,offset)],
        o : [],
        c : [{
            f : [ scaleXYZ_wi(thick*depth/4, length, thick*depth/4)],
            o : [new Material(color),objBall],
            c : []
        }]
    };

    if(depth === 1 && Defaultcolor === green && t >= 96){
        rightleaf.c.push(apple)
}

    var leftleaf = {
        f : [rotZ_wi(rotation*3.14/180),translate_wi(offset,length,0)],
        o : [],
        c : [{
            f : [ scaleXYZ_wi(thick*depth/4, length, thick*depth/4)],
            o : [new Material(color),objBall],
            c : []
        }]
    }

    
    drawLeaf(rotation,leftleaf,depth-1,length,maxlength,thickness,t)
    drawLeaf(rotation,rightleaf,depth-1,length,maxlength,thickness,t)
    leaf.c.push(leftleaf,rightleaf)

}

function drawTree(t){

    var trunkHeight = 0
    var trunkThickness = 0
    var growthFactor = t/4;

    if(t > 32){
    var trunkHeight = .066*(t-24) > 3.25 ? 3.25 : .066*(t-24);
    var trunkThickness = .05*(t-24) > 1.40 ? 1.40 : .05*(t-24);
    }

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
        
        var roots = {f : [rotZ_wi(PI)], o : [], c : []};
        var leaves = {f : [], o : [], c : []};

        var rootThickness = 0.01*t > 0.1 ? 0.1 : .01*t;
        var rootDepth = Math.floor(growthFactor) > 7 ? 7 : Math.floor(growthFactor)
        var leafDepth = Math.floor(growthFactor)-6 > 9 ? 9 : Math.floor(growthFactor)-6

        if(rootDepth > initdepth){
            initdepth = rootDepth
        }
        len += 0.01;
        len = len > maxlength ? maxlength : len
        
        Defaultcolor = brown;
        drawLeaf(17.5,roots,initdepth,len,maxlength,rootThickness,t);

        
        if(t > 28){
            Defaultcolor = green;
            drawLeaf(15,leaves,leafDepth,len,maxlength,rootThickness/2,t)
        }

        puu.c.push(siemen);
        puu.c.push(runko);
        puu.c.push(leaves);
        puu.c.push(roots);

    return puu;
}

function basic_color(r,g,b){
    return [r/3, g/3, b/3, 0,
            r,   g,   b,   0,
            0,   0,   0,   1,
            0,   0,   0,   0]
}
 
function buildSceneAtTime(t){

    
    var sceneroot = {f:[],o:[],c:[]};
    var endroot = {f:[],o:[],c:[]}
 
    var puu = drawTree(t);

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
                                
                              {f:[translate_wi(0,10,0), translate_wi(0,0,45), rotX_wi(0.2)],
                               o:[],
                               c:[],
                               r:[new Camera()]
                              },

                              {f:[translate_wi(9, 9, 0), scale_wi(.1)],
                                o:[new Material(basic_color(9,9,9)), objTile],
                                c:[],
                                r:[new Light()]
                              }
                        ]
                    }
                    );

                    if (t > 116){
                        return endroot
                    }
                    
    return sceneroot;
}


function initDocument(){
}

function updateDocument(t){
}
