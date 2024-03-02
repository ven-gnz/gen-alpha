(function (){
/**
 * @fileOverview GL constants with "gl_" prepended.
 *
 * The rumors say that these have not changed much between WebGL
 * versions :). The rumors say that the following dirty trick is used
 * often in demoscene intro minification. Me too, me too!
 *
 * Usage, by an example: transform "gl.ALPHA_BITS" to "gl_ALPHA_BITS"
 * in the actual source (I have a sed script for that). Insert this
 * file before the actual GL code before feeding the resulting bulk to
 * the Closure compiler.
 *
 * Result: Closure automatically outputs "3413" instead of
 * gl.ALPHA_BITS, which is 9 bytes shorter even before
 * compression. Supposedly, and seemingly, the numeric constants work
 * accross current WebGL implementations...
 *
 */
var gl_ACTIVE_ATTRIBUTES = 35721;
var gl_ACTIVE_TEXTURE = 34016;
var gl_ACTIVE_UNIFORMS = 35718;
var gl_ALIASED_LINE_WIDTH_RANGE = 33902;
var gl_ALIASED_POINT_SIZE_RANGE = 33901;
var gl_ALPHA = 6406;
var gl_ALPHA_BITS = 3413;
var gl_ALWAYS = 519;
var gl_ARRAY_BUFFER = 34962;
var gl_ARRAY_BUFFER_BINDING = 34964;
var gl_ATTACHED_SHADERS = 35717;
var gl_BACK = 1029;
var gl_BLEND = 3042;
var gl_BLEND_COLOR = 32773;
var gl_BLEND_DST_ALPHA = 32970;
var gl_BLEND_DST_RGB = 32968;
var gl_BLEND_EQUATION = 32777;
var gl_BLEND_EQUATION_ALPHA = 34877;
var gl_BLEND_EQUATION_RGB = 32777;
var gl_BLEND_SRC_ALPHA = 32971;
var gl_BLEND_SRC_RGB = 32969;
var gl_BLUE_BITS = 3412;
var gl_BOOL = 35670;
var gl_BROWSER_DEFAULT_WEBGL = 37444;
var gl_BUFFER_SIZE = 34660;
var gl_BUFFER_USAGE = 34661;
var gl_BYTE = 5120;
var gl_CCW = 2305;
var gl_CLAMP_TO_EDGE = 33071;
var gl_COLOR_BUFFER_BIT = 16384;
var gl_COLOR_CLEAR_VALUE = 3106;
var gl_COLOR_WRITEMASK = 3107;
var gl_COMPILE_STATUS = 35713;
var gl_COMPRESSED_TEXTURE_FORMATS = 34467;
var gl_CONSTANT_ALPHA = 32771;
var gl_CONSTANT_COLOR = 32769;
var gl_CONTEXT_LOST_WEBGL = 37442;
var gl_CULL_FACE = 2884;
var gl_CULL_FACE_MODE = 2885;
var gl_CURRENT_PROGRAM = 35725;
var gl_CURRENT_VERTEX_ATTRIB = 34342;
var gl_CW = 2304;
var gl_DECR = 7683;
var gl_DECR_WRAP = 34056;
var gl_DELETE_STATUS = 35712;
var gl_DEPTH_ATTACHMENT = 36096;
var gl_DEPTH_BITS = 3414;
var gl_DEPTH_BUFFER_BIT = 256;
var gl_DEPTH_CLEAR_VALUE = 2931;
var gl_DEPTH_COMPONENT = 6402;
var gl_DEPTH_FUNC = 2932;
var gl_DEPTH_RANGE = 2928;
var gl_DEPTH_STENCIL = 34041;
var gl_DEPTH_STENCIL_ATTACHMENT = 33306;
var gl_DEPTH_TEST = 2929;
var gl_DEPTH_WRITEMASK = 2930;
var gl_DITHER = 3024;
var gl_DONT_CARE = 4352;
var gl_DST_ALPHA = 772;
var gl_DST_COLOR = 774;
var gl_DYNAMIC_DRAW = 35048;
var gl_ELEMENT_ARRAY_BUFFER = 34963;
var gl_ELEMENT_ARRAY_BUFFER_BINDING = 34965;
var gl_EQUAL = 514;
var gl_FASTEST = 4353;
var gl_FLOAT = 5126;
var gl_FRAGMENT_SHADER = 35632;
var gl_FRAMEBUFFER = 36160;
var gl_FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
var gl_FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
var gl_FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
var gl_FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
var gl_FRAMEBUFFER_BINDING = 36006;
var gl_FRAMEBUFFER_COMPLETE = 36053;
var gl_FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
var gl_FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
var gl_FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
var gl_FRAMEBUFFER_UNSUPPORTED = 36061;
var gl_FRONT = 1028;
var gl_FRONT_AND_BACK = 1032;
var gl_FRONT_FACE = 2886;
var gl_FUNC_ADD = 32774;
var gl_FUNC_REVERSE_SUBTRACT = 32779;
var gl_FUNC_SUBTRACT = 32778;
var gl_GENERATE_MIPMAP_HINT = 33170;
var gl_GEQUAL = 518;
var gl_GREATER = 516;
var gl_GREEN_BITS = 3411;
var gl_HIGH_FLOAT = 36338;
var gl_HIGH_INT = 36341;
var gl_IMPLEMENTATION_COLOR_READ_FORMAT = 35739;
var gl_IMPLEMENTATION_COLOR_READ_TYPE = 35738;
var gl_INCR = 7682;
var gl_INCR_WRAP = 34055;
var gl_INT = 5124;
var gl_INVALID_ENUM = 1280;
var gl_INVALID_FRAMEBUFFER_OPERATION = 1286;
var gl_INVALID_OPERATION = 1282;
var gl_INVALID_VALUE = 1281;
var gl_INVERT = 5386;
var gl_KEEP = 7680;
var gl_LEQUAL = 515;
var gl_LESS = 513;
var gl_LINEAR = 9729;
var gl_LINEAR_MIPMAP_LINEAR = 9987;
var gl_LINEAR_MIPMAP_NEAREST = 9985;
var gl_LINE_LOOP = 2;
var gl_LINES = 1;
var gl_LINE_STRIP = 3;
var gl_LINE_WIDTH = 2849;
var gl_LINK_STATUS = 35714;
var gl_LOW_FLOAT = 36336;
var gl_LOW_INT = 36339;
var gl_LUMINANCE = 6409;
var gl_LUMINANCE_ALPHA = 6410;
var gl_MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
var gl_MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
var gl_MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
var gl_MAX_RENDERBUFFER_SIZE = 34024;
var gl_MAX_TEXTURE_IMAGE_UNITS = 34930;
var gl_MAX_TEXTURE_SIZE = 3379;
var gl_MAX_VARYING_VECTORS = 36348;
var gl_MAX_VERTEX_ATTRIBS = 34921;
var gl_MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
var gl_MAX_VERTEX_UNIFORM_VECTORS = 36347;
var gl_MAX_VIEWPORT_DIMS = 3386;
var gl_MEDIUM_FLOAT = 36337;
var gl_MEDIUM_INT = 36340;
var gl_MIRRORED_REPEAT = 33648;
var gl_NEAREST = 9728;
var gl_NEAREST_MIPMAP_LINEAR = 9986;
var gl_NEAREST_MIPMAP_NEAREST = 9984;
var gl_NEVER = 512;
var gl_NICEST = 4354;
var gl_NO_ERROR = 0;
var gl_NONE = 0;
var gl_NOTEQUAL = 517;
var gl_ONE = 1;
var gl_ONE_MINUS_CONSTANT_ALPHA = 32772;
var gl_ONE_MINUS_CONSTANT_COLOR = 32770;
var gl_ONE_MINUS_DST_ALPHA = 773;
var gl_ONE_MINUS_DST_COLOR = 775;
var gl_ONE_MINUS_SRC_ALPHA = 771;
var gl_ONE_MINUS_SRC_COLOR = 769;
var gl_OUT_OF_MEMORY = 1285;
var gl_PACK_ALIGNMENT = 3333;
var gl_POINTS = 0;
var gl_POLYGON_OFFSET_FACTOR = 32824;
var gl_POLYGON_OFFSET_FILL = 32823;
var gl_POLYGON_OFFSET_UNITS = 10752;
var gl_RED_BITS = 3410;
var gl_RENDERBUFFER = 36161;
var gl_RENDERBUFFER_ALPHA_SIZE = 36179;
var gl_RENDERBUFFER_BINDING = 36007;
var gl_RENDERBUFFER_BLUE_SIZE = 36178;
var gl_RENDERBUFFER_DEPTH_SIZE = 36180;
var gl_RENDERBUFFER_GREEN_SIZE = 36177;
var gl_RENDERBUFFER_HEIGHT = 36163;
var gl_RENDERBUFFER_INTERNAL_FORMAT = 36164;
var gl_RENDERBUFFER_RED_SIZE = 36176;
var gl_RENDERBUFFER_STENCIL_SIZE = 36181;
var gl_RENDERBUFFER_WIDTH = 36162;
var gl_RENDERER = 7937;
var gl_REPEAT = 10497;
var gl_REPLACE = 7681;
var gl_RGB = 6407;
var gl_RGBA = 6408;
var gl_SAMPLE_ALPHA_TO_COVERAGE = 32926;
var gl_SAMPLE_BUFFERS = 32936;
var gl_SAMPLE_COVERAGE = 32928;
var gl_SAMPLE_COVERAGE_INVERT = 32939;
var gl_SAMPLE_COVERAGE_VALUE = 32938;
var gl_SAMPLER_CUBE = 35680;
var gl_SAMPLES = 32937;
var gl_SCISSOR_BOX = 3088;
var gl_SCISSOR_TEST = 3089;
var gl_SHADER_TYPE = 35663;
var gl_SHADING_LANGUAGE_VERSION = 35724;
var gl_SHORT = 5122;
var gl_SRC_ALPHA = 770;
var gl_SRC_ALPHA_SATURATE = 776;
var gl_SRC_COLOR = 768;
var gl_STATIC_DRAW = 35044;
var gl_STENCIL_ATTACHMENT = 36128;
var gl_STENCIL_BACK_FAIL = 34817;
var gl_STENCIL_BACK_FUNC = 34816;
var gl_STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
var gl_STENCIL_BACK_PASS_DEPTH_PASS = 34819;
var gl_STENCIL_BACK_REF = 36003;
var gl_STENCIL_BACK_VALUE_MASK = 36004;
var gl_STENCIL_BACK_WRITEMASK = 36005;
var gl_STENCIL_BITS = 3415;
var gl_STENCIL_BUFFER_BIT = 1024;
var gl_STENCIL_CLEAR_VALUE = 2961;
var gl_STENCIL_FAIL = 2964;
var gl_STENCIL_FUNC = 2962;
var gl_STENCIL_PASS_DEPTH_FAIL = 2965;
var gl_STENCIL_PASS_DEPTH_PASS = 2966;
var gl_STENCIL_REF = 2967;
var gl_STENCIL_TEST = 2960;
var gl_STENCIL_VALUE_MASK = 2963;
var gl_STENCIL_WRITEMASK = 2968;
var gl_STREAM_DRAW = 35040;
var gl_SUBPIXEL_BITS = 3408;
var gl_TEXTURE = 5890;
var gl_TEXTURE_BINDING_CUBE_MAP = 34068;
var gl_TEXTURE_CUBE_MAP = 34067;
var gl_TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
var gl_TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
var gl_TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
var gl_TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
var gl_TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
var gl_TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
var gl_TEXTURE_MAG_FILTER = 10240;
var gl_TEXTURE_MIN_FILTER = 10241;
var gl_TEXTURE_WRAP_S = 10242;
var gl_TEXTURE_WRAP_T = 10243;
var gl_TRIANGLE_FAN = 6;
var gl_TRIANGLES = 4;
var gl_TRIANGLE_STRIP = 5;
var gl_UNPACK_ALIGNMENT = 3317;
var gl_UNPACK_COLORSPACE_CONVERSION_WEBGL = 37443;
var gl_UNPACK_FLIP_Y_WEBGL = 37440;
var gl_UNPACK_PREMULTIPLY_ALPHA_WEBGL = 37441;
var gl_UNSIGNED_BYTE = 5121;
var gl_UNSIGNED_INT = 5125;
var gl_UNSIGNED_SHORT = 5123;
var gl_VALIDATE_STATUS = 35715;
var gl_VENDOR = 7936;
var gl_VERSION = 7938;
var gl_VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
var gl_VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
var gl_VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
var gl_VERTEX_ATTRIB_ARRAY_POINTER = 34373;
var gl_VERTEX_ATTRIB_ARRAY_SIZE = 34339;
var gl_VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
var gl_VERTEX_ATTRIB_ARRAY_TYPE = 34341;
var gl_VERTEX_SHADER = 35633;
var gl_VIEWPORT = 2978;
var gl_ZERO = 0;
/* -*- mode: javascript; tab-width: 4; indent-tabs-mode: nil; -*- */
/**
 *
 * @fileOverview Let's Make a Demo Workshop 1.x base library
 *
 * <h3>A Dirty Small Library for Graphics</h3>
 *
 * <p>This was, and basically still is, course material for our course
 * "TIEA311 Principles of Computer graphics" (based on "6.837 Computer
 * Graphics" as published in MIT OCW). Am I a rogue teacher leaking
 * example answers here? No. I'm quite certain that a student who
 * manages to translate this convoluted Javascript snippet to
 * grade-worthy C++ exercise answers has earned the credit, probably
 * the "hard way", too.
 * </p>
 *
 * <p>This code does dirty tricks to fit in very small storage space as
 * if it was part of an entry in a demoscene "4k intro"
 * competition. That means at most 4096 bytes for everything. Also,
 * this is written by a total Javascript newbie - proper practices of
 * any language can only be learned by lots and lots of programming
 * and reading codes by more experienced programmers. So far, I've
 * only gone through some tutorial examples, parts of specifications,
 * and demoscene intro codes that necessarily minimize code size with
 * the expense of *everything* else.
 * </p>
 *
 * <p>Do not try these programming practices at home (until you know what
 * you do and which parts of the specification are beautifully
 * misused).
 * </p>
 *
 * <p>If you're less experienced, try to keep on learning good
 * programming practices (in Javascript and other languages) from nice
 * tutorials. Listen to your teachers and coaches. They know what is
 * best for you. That said, some of this code may show you some
 * features that are less common in basic tutorials.
 * </p>
 *
 * <p>Browser support: Productions made using this code seem to load and
 * run in desktop Chrome, Edge, and Firefox, but not on IE. Mobile
 * browsers unknown.
 * </p>
 *
 * <p>Original goal: use at least spline curves, generalized cylinder,
 * surface of revolution, hierarchical model, perspective projection,
 * and simple fragment shading with directed light. (some 50% of
 * course content)
 * </p>
 *
 * <p>Outcome: yep, I got all that stuffed in an example production
 * (along with shaders, vector math, softsynth, soundtrack, and an
 * English message.. all in 4k "executable" after some serious
 * minification).
 * </p>
 *
 *
 **/

// Variables used all over the library. Must have as globals:
var gl, prg;

// TODO: Should these gl and prg be included as method parameters or
// object properties?

// --------------------------------------------------------------------------------
// "Globals needed in many routines", these are used by the main starter code:
var C, Cw, Ch;          // Canvas object and previous width and height
var audio;              // Audio object needed for song playback
var s;                  // Temporary variable for "style" but also other things
var _document=document; // automatically minified name for the "document" object

// Global for camera inside scenegraph.
var cameraTransformation;

// Global for current light implementation (TODO: nicer system for lights)
var lightMat;

// Constants
    var PI=Math.PI;
//    var PI=3.141593

// Utility functions
function clamp01(parameter){
    if (parameter < 0) return 0;
    if (parameter > 1) return 1;
    return parameter;
}

    // Observe: Everything looks transposed compared to the theory
    // slides and C++ codes of the course. This is because of column
    // major ordering used by Javascript arrays and the WebGL
    // interface. The mathematical meaning is the same as on the
    // course, but you should remember that what looks like a row here
    // is actually a column if written as actual math. Pen and paper
    // and your own brains are very powerful tools, as I keep
    // repeating on my lectures.

    // Bezier basis matrix
    var bezB = [  1,  0,  0, 0,
                 -3,  3,  0, 0,
                  3, -6,  3, 0,
                 -1,  3, -3, 1];

    // B-spline basis matrix
    var bspB = [ 1./6,  4./6,  1./6, 0./6,
                -3./6,  0./6,  3./6, 0./6,
                 3./6, -6./6,  3./6, 0./6,
                -1./6,  3./6, -3./6, 1./6 ];

    // "Re-implementing the wheel" ------------------------------

    /** Returns a 4x4 matrix of zeros */
    function zeros(){
        return [ 0, 0, 0, 0,
                 0, 0, 0, 0,
                 0, 0, 0, 0,
                 0, 0, 0, 0 ];
    };

    /** Returns a translation matrix of homogeneous coordinates. */
    function translate(tx,ty,tz){
        return [ 1, 0, 0, 0,
                 0, 1, 0, 0,
                 0, 0, 1, 0,
                 tx, ty, tz, 1 ];
    };

    /** Returns a scale matrix. */
    function scaleXYZ(sx,sy,sz){
        return [ sx, 0, 0, 0,
                 0, sy, 0, 0,
                 0, 0, sz, 0,
                 0, 0, 0, 1 ];
    };

    /** Returns an isotropic scale matrix. */
    function scale(s){
        return scaleXYZ(s,s,s);
    };

    /** Counter-clockwise rotation around the Z-axis */
    function rotZ(theta){
        var s = Math.sin(theta);
        var c = Math.cos(theta);
        return [ c, -s, 0, 0,
                 s,  c, 0, 0,
                 0,  0, 1, 0,
                 0,  0, 0, 1];
    };

    /** Counter-clockwise rotation around the Y-axis */
    function rotY(theta){
        var s = Math.sin(theta);
        var c = Math.cos(theta);
        return [ c,  0, -s, 0,
                 0,  1, 0, 0,
                 s,  0, c, 0,
                 0,  0, 0, 1];
    };

    /** Counter-clockwise rotation around the X-axis */
    function rotX(theta){
        var s = Math.sin(theta);
        var c = Math.cos(theta);
        return [ 1,  0, 0, 0,
                 0,  c, -s, 0,
                 0,  s, c, 0,
                 0,  0, 0, 1];
    };

    /** Perspective projection, imitates gluPerspective() */
    function perspective(fov, ar, near, far) {
        var f = 1/Math.tan(fov/2);
        var div = near - far;
        return [f/ar, 0,  0,               0,
                0,    f,  0,               0,
                0,    0,  (far+near)/div, -1,
                0,    0,  2*far*near/div,  0 ];
    };

    /**
     * Perspective projection as in gluPerspective() but assumes a
     * precomputed f==1/Math.tan(fov/2)
     */
    function perspectiveF(f, ar, near, far) {
        var div = near - far;
        return [f/ar, 0,   0,               0,
                0,    f,   0,               0,
                0,    0,   (far+near)/div, -1,
                0,    0,   2*far*near/div,  0 ];
    };

    /**
     * Perspective with hardcoded near plane "quite near". Far plane
     * is "far away". Might have issues with Z stability. Assumes
     * precomputed f==1/Math.tan(fov/2).
     */
    function perspectiveFhc(f, ar) {
        return [f/ar, 0,   0,  0,
                0,    f,   0,  0,
                0,    0,  -1, -1,
                0,    0,  -1,  0 ];
    };


    /**
     * Orthographic projection with fixed width
     */
    function orthographic(top, ar, near, far) {
        var bottom=-top,right=top*ar, left=-top*ar;
        return [2/(right-left), 0,                0,             0,
                0,              2/(top-bottom),   0,             0,
                0,              0,                -2/(far-near), 0,
                -(right+left)/(right-left),
                                -(top+bottom)/(top-bottom),
                                                  -(far+near)/(far-near),
                                                                 1 ];
    };

    // "Matrices with inverses" ------------------------------
    function translate_wi(tx,ty,tz){
        var res=translate(tx,ty,tz);
        res.n=translate(-tx,-ty,-tz);
        return res;
    };
    /** Returns a scale matrix. */
    function scaleXYZ_wi(sx,sy,sz){
        var res=scaleXYZ(sx,sy,sz);
        res.n=scaleXYZ(1/sx,1/sy,1/sz);
        return res;
    };
    /** Returns an isotropic scale matrix. */
    function scale_wi(s){
        return scaleXYZ_wi(s,s,s);
    };
    function rotZ_wi(theta){
        var res=rotZ(theta);
        res.n=rotZ(-theta);
        return res;
    }
    function rotY_wi(theta){
        var res=rotY(theta);
        res.n=rotY(-theta);
        return res;
    }
    function rotX_wi(theta){
        var res=rotX(theta);
        res.n=rotX(-theta);
        return res;
    }





    /** 4x4 Matrix multiplication */
    function matmul(a,b){
        var i,j,k,m = zeros();
        for (i=0;i<4;i++){
            for (j=0;j<4;j++){
                for(k=0;k<4;k++){
                    m[j*4+i] += a[k*4+i]*b[j*4+k];
                }
            }
        }
        return m;
    }

    /** 4x4 Matrix times 4x1 vector multiplication */
    function matvec(a,b){
        var i,j,res = [0,0,0,0];
        for (i=0;i<4;i++){
            for(j=0;j<4;j++){
                res[i] += a[j*4+i]*b[j];
            }
        }
        return res;
    }

    /**
     * 4x4 matrix times 4xN matrix multiplication. Does a bit of extra
     * work but allows the same routine to multiply both matrices and
     * vectors. The end result seems to be 15 bytes shorter when using
     * this instead of separate matmul and matvec routines.
     */
    function matmul4(a,b){
        var i,j,k,m=[];
        for (i=0;i<b.length;i++){
            m[i]=0;
        }
        for (i=0;i<4;i++){
            for (j=0;j<(b.length/4);j++){
                for(k=0;k<4;k++){
                    m[j*4+i] += a[k*4+i]*b[j*4+k];
                }
            }
        }
        return m;
    }

    /**
     * For 4x4 matrices, multiplies both a*b and b^{-1} * a^{-1}. 
     */
    function matmul_wi(a,b){
        var res = matmul4(a,b);
        res.n = matmul4(b.n,a.n);
        return res;
    }

    /**
     * Transpose the upper 3x3 part and zero the rest. For building
     * the normal matrix from the inverse of model matrix.
     */
    function transposed3x3(a){
        return [a[0],a[4],a[8], 0,
                a[1],a[5],a[9], 0,
                a[2],a[6],a[10],0,
                0,   0,   0,   1];
    }

    /** Cross product for homogeneous directions. "[(axb)^t,0]^t" */
    function cross(a,b){
        return [a[1]*b[2]-a[2]*b[1],
                a[2]*b[0]-a[0]*b[2],
                a[0]*b[1]-a[1]*b[0],
                0];
    }

    /** Normalize x,y,z disregarding and untouching w */
    function nmld(v){
        var length3d=Math.sqrt(v[0]*v[0]+v[1]*v[1]+v[2]*v[2]);
        return [v[0]/length3d,v[1]/length3d,v[2]/length3d,v[3]];
    }

    /** Homogenize by x/w,y/w,z/w  */
    function homogenized(v){
        if (v[3]==0) return v;
        return [v[0]/v[3],v[1]/v[3],v[2]/v[3],1];
    }


// "Prelude to re-inventions" ------------------------------

// Tentative material object..
// colors==[a,d,s,q] could be a 4x4 matrix?
// Yep, quite short code when colors are in a matrix.
// TODO: I think need to learn the object model of javascript, to know
// if this is proper.
function Material(colors){
    var myc=colors.slice();
    this.c = function(gl){
        gl.uniformMatrix4fv(
            gl.getUniformLocation(prg,"i"), false, myc);
    }
}

// Tentative camera object.. just put inverse of current transf in the
// global cameraTransformation var.
function Camera(){
    this.c = function(nodetrans){
        //alert("Positioning camera" + nodetrans);
        cameraTransformation = nodetrans.n;
        cameraTransformation.n = nodetrans;

    }
}

// Tentative light object.. just store the current transf in global light var;
// deal with it later to get location or direction.. As a future idea, Could
// push to a list of lights, why not...
function Light(){
    this.c = function(nodetrans){
        lightMat = nodetrans;
    }
}



// Traversal without inverse matrices and thus normal matrices. Use
// this if you know you don't need normals or camera as scenegraph node.
function traverse(node,ms){
    ms=node.f.reduce(matmul4,ms);
    gl.uniformMatrix4fv(
        gl.getUniformLocation(prg,"mv"), false, ms);
    node.o.map(function(o){o.c(gl);}); // map < forEach :)
    node.c.map(function(c){traverse(c,ms);});
}

/**
 * Traverse a scene graph, and output to the WebGL pipeline.
 *
 * Algorithm:
 *
 *  This is a very basic recursive tree traversal.
 *
 * Size optimizations:
 *
 *   - The 'functional' operations provided by Javascript allow a very
 *     compact way of writing this.
 *
 *   - Call map() without using its output. It is wasteful, but it is
 *     4 characters shorter to write than forEach().
 *
 *   - Always send two uniform matrices, regardless of whether
 *     anything is drawn using them. Wasted effort when not drawing.
 **/
function traverse_wi(node,ms){
    ms=node.f.reduce(matmul_wi,ms);
    gl.uniformMatrix4fv(
        gl.getUniformLocation(prg,"mv"), false, ms);
    gl.uniformMatrix4fv(
        gl.getUniformLocation(prg,"nm"), false, transposed3x3(ms.n));
    node.o.map(function(o){o.c(gl);}); // map < forEach :)
    node.c.map(function(c){traverse_wi(c,ms);});
}

/** Dry traversal to find camera (TODO: lights?) 
 *
 * This traverses the scene graph but doesn't draw anything. Look for
 * property 'r' (for cameRa or dRy or Rehearsal or whatever
 * mnemonic..) and apply the functions found in the property.
 */
function findcam_wi(node,ms){
    ms = node.f.reduce(matmul_wi,ms);
    if (node.r){
        node.r.map(function(o){o.c(ms);});
    }
    node.c.map(function(c){findcam_wi(c,ms);});
}






    // "Re-inventing the cylinder" ------------------------------

    /**
     * Create an evaluator that can return a local frame for circle in
     * the xy plane. As in the MIT course assignment, but transposed.
     */
    function funCircleBasic(radius,n){
        var r = radius;
        this.n = n; // Fidelity hint for the surface evaluator
        this.c = function(t){
            var s = Math.sin(t * 2 * PI);
            var c = Math.cos(t * 2 * PI);
            return [-c,  -s,   0,  0,  // normal
                     0,   0,   1,  0,  // binormal
                    -s,   c,   0,  0,  // tangent
                     c*r, s*r, 0,  1   // position
                   ];
        };
    }

    /**
     * Create an evaluator that can return a local frame for a part or
     * whole circle on the xy plane. The starting point of the arc is
     * at the highest y point "top", and direction is counterclockwise
     * in right-handed coordinates, z towards viewer. Assumes
     * 0<arclen<=1. Arclen is optional.
     */
    function funCircle(radius,swpfidel,arclen){
        var r = radius;
        var a = arclen?arclen:1;
        // Fidelity hint for the sweep surface evaluator
        this.n = swpfidel?swpfidel:10;
        this.c = function(t){
            var s = Math.sin(t * 2 * PI * a);
            var c = Math.cos(t * 2 * PI * a);
            return [    s,  -c,  0,  0,  // normal
                        0,   0,  1,  0,  // binormal
                       -c,  -s,  0,  0,  // tangent
                     -s*r, c*r,  0,  1   // position
                   ];
        };
    }


    // Line from zero to length, along y axis
    // Some bugs here? Haven't actually used this at all...
    function funLine(length,n){
        var l = length;
        this.n = n;
        this.c = function(t){
            return [ 1,   0,   0, 0,   // "normal"/orientation
                     0,   0,   1, 0,   // binormal
                     0,   1,   0, 0,   // tangent
                     0,   t*l, 0, 1    // position
                   ];
        };
    }


    /**
     * Simple uniform B-spline evaluator.
     *
     * Hmm.. position and tangent could be evaluated for any t... But
     * how to maintain correct normal and bi-normal for surface
     * creation? Initial idea: pre-compute at some intervals using the
     * cross product trick from our lecture notes, and then evaluate a
     * normalized interpolant upon call to eval(). NOTE: Only need to
     * store binormal (?), because normal can be computed via cross
     * product. The binormal rotations could be corrected while
     * precomputing. (not yet done).
     *
     * Note that analytic tangent doesn't exist for all possible
     * inputs - we don't handle curves with vanishing derivatives,
     * so keep this in mind when defining control points.
     *
     * TODO: Maybe could be sloppy and not even interpolate, if result
     * is OK visually? Hmm... we do have storage, so why not just
     * precompute like a *lot* of values when creating the spline
     * object, and then return the closest one in compute(t)? Nasty, but
     * without redundance...
     *
     * Back-of-the-envelope: 100 control pts * 100 intermediates * 16
     * * 8 byte float is 1280000 bytes... well.. that's a megabyte for
     * one spline..  admittedly, it sounds like a lot..
     *
     * TODO (cheating a bit, though): Use only xy-curves with no
     * change of curvature, and delete all the code about flipping
     * gradients.  Would be so much smaller and leaner! Well.. if we
     * don't cheat that much, then at least the production should USE
     * the feature and have some twisty curve(s) to show it
     * off.. Closure will omit unused functions, so we can have many
     * versions here in the library. This is the bloaty, most general
     * version. Depending on what you need, you can "cheat" more by
     * using the restricted versions below.
     */

    function funBSpline(pts) {
        // Let us declare all vars here to shorten the code.
        var i;
        var g,Tt,dTt,v,T,N;
        var t,ifirst,npts = this.n = pts.length/4;
        var nsteps = (npts-3)*300; // internal points (actually +1 because we go to t=1.0)
        var b = [];           // the internal storage
        var B = [0,0,1,0];    // "arbitrary binormal at beginning"
        //this.n=npts;

        for (i=0;i<nsteps+1;i++){
            t = i/nsteps; // scale t to [0,1] within curve
            if (i<nsteps) {
                ifirst = t*(npts-3) | 0; // 1st point is... (funny "|0" makes a floor())
                t = t*(npts-3) - ifirst; // reset t to [0,1] within segm.
            } else {
                ifirst = npts-4;
                t = 1;
            }

            g = pts.slice(ifirst*4,ifirst*4+16); // pick cps to G.
            Tt = [1, t, t*t, t*t*t];
            dTt = [0, 1, 2*t, 3*t*t];
            v = matmul4(matmul4(g, bspB),Tt);
            T = nmld(matmul4(matmul4(g, bspB),dTt));
            N = nmld(cross(B,T));
            B = nmld(cross(T,N));
            b.push([].concat(N, // "normal"/orientation
                             B, // binormal
                             T, // tangent
                             v)); // pos.
        }

        // as of now, we don't care to interpolate:
        this.c = function(t){
            return b[0 | t*(nsteps)];
        }
    }

    /**
     * Simple uniform B-spline with transformed control points.. This
     * was "new" in Instanssi 2018 - allows scaled and/or skewed
     * geometries but needs to be done during instantiation.
     */
    function funBSplineTransformed(pts,tfm) {
        // Let us declare all vars here to shorten the code.
        var i;
        var g,Tt,dTt,v,T,N;
        var t,ifirst,npts = this.n = pts.length/4;
        var nsteps = (npts-3)*300; // internal points (actually +1 because we go to t=1.0)
        var b = [];           // the internal storage
        var B = [0,0,1,0];    // "arbitrary binormal at beginning"
        //this.n=npts;
        pts = matmul4(tfm,pts); // transform!


        for (i=0;i<nsteps+1;i++){
            t = i/nsteps; // scale t to [0,1] within curve
            if (i<nsteps) {
                ifirst = t*(npts-3) | 0; // 1st point is... (funny "|0" makes a floor())
                t = t*(npts-3) - ifirst; // reset t to [0,1] within segm.
            } else {
                ifirst = npts-4;
                t = 1;
            }

            g = pts.slice(ifirst*4,ifirst*4+16); // pick cps to G.
            Tt = [1, t, t*t, t*t*t];
            dTt = [0, 1, 2*t, 3*t*t];
            v = matmul4(matmul4(g, bspB),Tt);
            T = nmld(matmul4(matmul4(g, bspB),dTt));
            N = nmld(cross(B,T));
            B = nmld(cross(T,N));
            b.push([].concat(N, // "normal"/orientation
                             B, // binormal
                             T, // tangent
                             v)); // pos.
        }

        // as of now, we don't care to interpolate:
        this.c = function(t){
            return b[0 | t*(nsteps)];
        }
    }



    /**
     * XY-plane curves with no inflection points (B==(0,0,1)).
     *
     * Some 58 bytes smaller than the more general version.
     *
     */
    function funBSplineXYnoInf(ipts) {
        // Let us declare all vars here to shorten the code.
        var npts = this.n = ipts.length/4;
        var pts=ipts;

        this.c = function(t){
            var ifirst;
            // t arrives as [0,1] within curve
            if (t<1) {
                ifirst = t*(npts-3) | 0;
                t = t*(npts-3) - ifirst;
            } else {
                ifirst = npts-4;
                //t = 1;
            }

            var g = pts.slice(ifirst*4,ifirst*4+16), // pick cps to G.
                B = [0,0,1,0],    // Constant binormal
                Tt = [1, t, t*t, t*t*t],
                dTt = [0, 1, 2*t, 3*t*t],
                T = nmld(matmul4(matmul4(g, bspB),dTt));
            return [].concat(nmld(cross(B,T)), // "normal"/orientation
                             B, // binormal
                             T, // tangent
                             matmul4(matmul4(g, bspB),Tt)); // pos.
        }
    }


    /**
     * Simple rational Bezier evaluator.
     *
     */

    function funBezierCurve(pts) {
        // Let us declare all vars here to shorten the code.
        var i;
        var g,Tt,dTt,v,T,N;
        var t,ifirst,npts = pts.length/4;
        this.n = pts.length*4; // Fidelity hint for surface eval
        var nsteps = ((npts-1)/3)*10; // internal points (actually +1 because we go to t=1.0)
        var b = [];           // the internal storage
        var B = [0,0,1,0];    // "arbitrary binormal at beginning"
        //this.n=npts;

        for (i=0;i<nsteps+1;i++){
            t = i/nsteps; // scale t to [0,1] within curve
            if (i<nsteps) {
                ifirst = (t*((npts-1)/3) | 0)*3; // 1st point is... (funny "|0" makes a floor())
                t = t*((npts-1)/3) - (ifirst/3); // reset t to [0,1] within segm.
            } else {
                ifirst = npts-4;
                t = 1;
            }

            g = pts.slice(ifirst*4,ifirst*4+16); // pick cps to G.
            Tt = [1, t, t*t, t*t*t];
            dTt = [0, 1, 2*t, 3*t*t];
            //v = matmul4(matmul4(g, bezB),Tt);
            v = homogenized(matmul4(matmul4(g, bezB),Tt));
            T = nmld(matmul4(matmul4(g, bezB),dTt));
            N = nmld(cross(B,T));
            B = nmld(cross(T,N));
            b.push([].concat(N, // "normal"/orientation
                             B, // binormal
                             T, // tangent
                             v)); // pos.
            //console.log("ja tuota " + npts + " " + ifirst + " " + t);
        }

        // as of now, we don't care to interpolate:
        this.c = function(t){
            return b[0 | t*(nsteps)];
        }
    }



    /**
     * Convert packed 2d-vectors to (x,y,0,1) homogenous 3d
     * coordinates. (Abandoned idea - didn't gain anything)
     */
    function xyToHomog(ptsxy){
        var res=[];
        for(var i=0;i<ptsxy.length;){
            res.push(ptsxy[i++],ptsxy[i++],0,1);
        }
        return res;
    }

    /**
     * Push values of the matrix column icol to array, optionally
     * multiply by mul!=0
     */
    function pushCol4(array,mat,icol,mul){
        mul=mul?mul:1;
        for(var i=0;i<4;i++){
            array.push(mul*mat[4*icol+i]);
        }
    }

    /** Helper function. More bloaty than the few inlined calls: */
    function createAndFillArrayBuffer32(data){
        var buf=gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER,
                      new Float32Array(data),
                      gl.STATIC_DRAW);
        return buf;
    }

    /**
     * Prepare a drawable WebGL buffer that represents a box. Under
     * construction; size parameter is not yet hooked up.
     *
     * It's a bit funny that even though the box is a very simple shape, the
     * data and code required for making one is actually quite bloaty when
     * compared to generalized cylinders. Hmm, technically it could be possible
     * to make a box with a 4-point circle, but then there should be some clever
     * way to make non-smooth normals. Think about this..
     *
     */
    function Box(size){
        // GL buffer objects
        var vertexColorBuf = gl.createBuffer(),
            vertexBuf = gl.createBuffer(),
            vertexNormalBuf = gl.createBuffer(),
            faceBuf = gl.createBuffer();

        var vertices=[];
        var normals=[];
        var vind=[];

        vertices = [
            // Front
            -1, -1,  1, 1,
             1, -1,  1, 1,
             1,  1,  1, 1,
            -1,  1,  1, 1,
            // Back
            -1, -1, -1, 1,
            -1,  1, -1, 1,
             1,  1, -1, 1,
             1, -1, -1, 1,
            // Top
            -1,  1, -1, 1,
            -1,  1,  1, 1,
             1,  1,  1, 1,
             1,  1, -1, 1,
            // Bottom
            -1, -1, -1, 1,
             1, -1, -1, 1,
             1, -1,  1, 1,
            -1, -1,  1, 1,
            // Right
             1, -1, -1, 1,
             1,  1, -1, 1,
             1,  1,  1, 1,
             1, -1,  1, 1,
            // Left
            -1, -1, -1, 1,
            -1, -1,  1, 1,
            -1,  1,  1, 1,
            -1,  1, -1, 1,
        ];

        normals = [
            // Front
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            // Back
            0, 0,-1, 0,
            0, 0,-1, 0,
            0, 0,-1, 0,
            0, 0,-1, 0,
            // Top
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, 1, 0, 0,
            0, 1, 0, 0,
            // Bottom
            0,-1, 0, 0,
            0,-1, 0, 0,
            0,-1, 0, 0,
            0,-1, 0, 0,
            // Right face
            1, 0, 0, 0,
            1, 0, 0, 0,
            1, 0, 0, 0,
            1, 0, 0, 0,
            // Left face
            -1, 0, 0, 0,
            -1, 0, 0, 0,
            -1, 0, 0, 0,
            -1, 0, 0, 0,
        ]

        /*
        // Colors.. nah..
        gcolors = [
            // Front
             1,  0,  0, 1,
             0,  1,  0, 1,
             0,  0,  1, 1,
             0,  1,  0, 1,
            // Back
            -1, -1, -1, 1,
            -1,  1, -1, 1,
             1,  1, -1, 1,
             1, -1, -1, 1,
            // Top
            -1,  1, -1, 1,
            -1,  1,  1, 1,
             1,  1,  1, 1,
             1,  1, -1, 1,
            // Bottom
            -1, -1, -1, 1,
             1, -1, -1, 1,
             1, -1,  1, 1,
            -1, -1,  1, 1,
            // Right
             1, -1, -1, 1,
             1,  1, -1, 1,
             1,  1,  1, 1,
             1, -1,  1, 1,
            // Left
            -1, -1, -1, 1,
            -1, -1,  1, 1,
            -1,  1,  1, 1,
            -1,  1, -1, 1,
        ];
        */

        vind = [
            0,  1,  2,      0,  2,  3,    // front
            4,  5,  6,      4,  6,  7,    // back
            8,  9,  10,     8,  10, 11,   // top
            12, 13, 14,     12, 14, 15,   // bottom
            16, 17, 18,     16, 18, 19,   // right
            20, 21, 22,     20, 22, 23,   // left
        ];

        // Fill in buffers (non-animated shapes)

        //hmm?
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexNormalBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, faceBuf);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vind), gl.STATIC_DRAW);

        // "Compute", i.e., Bind and draw to pipeline
        this.c = function(gl){
            var i;
            // This quite unnecessary, actually (TODO:)
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuf);
            gl.enableVertexAttribArray(i=gl.getAttribLocation(prg,"g"));
            gl.vertexAttribPointer(i, 4, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);
            gl.enableVertexAttribArray(i=gl.getAttribLocation(prg,"v"));
            gl.vertexAttribPointer(i, 4, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, vertexNormalBuf);
            gl.enableVertexAttribArray(i=gl.getAttribLocation(prg,"N"));
            gl.vertexAttribPointer(i, 4, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, faceBuf);
            gl.drawElements(gl.TRIANGLES, 6*2*3, gl.UNSIGNED_SHORT,0);
        };


    }


    /**
     * A square [-1,1]^2 on xy-plane, z==0. This may not be very useful..
     */
    function Square(size){
        // GL buffer objects
        var vertexColorBuf = gl.createBuffer(),
            vertexBuf = gl.createBuffer(),
            vertexNormalBuf = gl.createBuffer(),
            faceBuf = gl.createBuffer();

        var vertices=[];
        var normals=[];
        var vind=[];

        vertices = [
            // Front
            -1, -1,  0, 1,
             1, -1,  0, 1,
             1,  1,  0, 1,
            -1,  1,  0, 1,
        ];

        normals = [
            // Front
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
            0, 0, 1, 0,
        ]

        vind = [
            0,  1,  2,      0,  2,  3,
        ];

        // Fill in buffers (non-animated shapes)

        //hmm?
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexNormalBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, faceBuf);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vind), gl.STATIC_DRAW);

        // "Compute", i.e., Bind and draw to pipeline
        this.c = function(gl){
            var i;
            // This quite unnecessary, actually (TODO:)
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuf);
            gl.enableVertexAttribArray(i=gl.getAttribLocation(prg,"g"));
            gl.vertexAttribPointer(i, 4, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);
            gl.enableVertexAttribArray(i=gl.getAttribLocation(prg,"v"));
            gl.vertexAttribPointer(i, 4, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, vertexNormalBuf);
            gl.enableVertexAttribArray(i=gl.getAttribLocation(prg,"N"));
            gl.vertexAttribPointer(i, 4, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, faceBuf);
            gl.drawElements(gl.TRIANGLES, 1*2*3, gl.UNSIGNED_SHORT,0);
        };
    }





    /**
     * Prepare a drawable WebGL buffer of a generalized cylinder
     * (swept profile + caps)
     */
    function GenCyl(prof, profilesz, swp) {
        var j,i,t,fp,lf,fs,ts;
        var vertices = [];
        var normals = [];
        var vind = [];
        var colors = [];
        //var numfaces = (profilesz-1)*(sweepsz-1)*2+2*profilesz;
        var sweepsz = (swp.n*1.5)|0; // heuristic for sweep size.

        //var numfaces = 2*(sweepsz)*(profilesz-1)+2;
        var numfaces = 2*(sweepsz-1)*(profilesz-1);


        // GL buffer objects, to be filled as the last stage of init
        var vertexColorBuf = gl.createBuffer(),
            vertexNormalBuf = gl.createBuffer(),
            vertexBuf = gl.createBuffer(),
            faceBuf = gl.createBuffer();


        // location, normal, and color of each vertex
        for (j=0; j<sweepsz; j++){
            ts = j/(sweepsz-1);
            fs = swp.c(ts);
            for (i=0;i<profilesz;i++){
                t = i/(profilesz-1);
                fp = prof.c(t);
                lf = matmul4(fs,fp);
                //vertices.push(lf[12],lf[13],lf[14],1);
                //normals.push(lf[0],lf[1],lf[2],0);
                pushCol4(vertices,lf,3);
                pushCol4(normals,lf,0,-1); // invert!
                colors.push((2*j+i+0)%3?0:1,
                            (2*j+i+1)%3?0:1,
                            (2*j+i+2)%3?0:1,
                            1);
            }
        }

        // triangles as indices
        for (j=0; j<sweepsz-1; j++){
            for (i=0; i<profilesz-1; i++){
                vind.push(j*profilesz+i,   j*profilesz+i+1,     (j+1)*profilesz+i);
                vind.push(j*profilesz+i+1, (j+1)*profilesz+i+1, (j+1)*profilesz+i);
            }
        }


        // Add end caps (quite naive, assume convex profile curve
        // containing origin and curving to the left on xy-plane)
        // TODO: Separate, optional, function for making caps if needed.

/*
        // start cap (normal opposite of sweep tangent)
        fs = swp.c(0); // center point
        pushCol4(vertices,fs,3);
        pushCol4(normals,fs,2,-1);
        colors.push(1,0,0,1);
        for (i=0;i<profilesz;i++){
            t = i/(profilesz-1);
            fp = prof.c(t);
            lf = matmul4(fs,fp);
            colors.push(0,i%2,(i+1)%2,1);
            pushCol4(vertices,lf,3);
            pushCol4(normals,fs,2,-1);
        }

        // end cap (normal same as sweep tangent)
        fs = swp.c(1); // center point
        pushCol4(vertices,fs,3);
        pushCol4(normals,fs,2);
        colors.push(1,0,0,1);
        for (i=0;i<profilesz;i++){
            t = i/(profilesz-1);
            fp = prof.c(t);
            lf = matmul4(fs,fp);
            colors.push(0,i%2,(i+1)%2,1);
            pushCol4(vertices,lf,3);
            pushCol4(normals,fs,2);

            // Add faces here to avoid having another loop
            vind.push(sweepsz*profilesz,
                      1+sweepsz*profilesz+((i+1)%profilesz),
                      1+sweepsz*profilesz+i,
                      1+sweepsz*profilesz+profilesz,
                      1+sweepsz*profilesz+i+profilesz+1,
                      1+sweepsz*profilesz+((i+1)%profilesz)+profilesz+1
                     );

        }
*/

        // Fill in buffers (non-animated shapes)

        gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ARRAY_BUFFER, vertexNormalBuf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(normals), gl.STATIC_DRAW);
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, faceBuf);
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(vind), gl.STATIC_DRAW);

        // "Compute", i.e., Bind and draw to pipeline
        this.c = function(gl){
            gl.bindBuffer(gl.ARRAY_BUFFER, vertexColorBuf);
            gl.enableVertexAttribArray(i=gl.getAttribLocation(prg,"g"));
            gl.vertexAttribPointer(i, 4, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuf);
            gl.enableVertexAttribArray(i=gl.getAttribLocation(prg,"v"));
            gl.vertexAttribPointer(i, 4, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ARRAY_BUFFER, vertexNormalBuf);
            gl.enableVertexAttribArray(i=gl.getAttribLocation(prg,"N"));
            gl.vertexAttribPointer(i, 4, gl.FLOAT, false, 0, 0);

            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, faceBuf);
            gl.drawElements(gl.TRIANGLES, numfaces*3, gl.UNSIGNED_SHORT,0);
        };
    };




/* Different types of intro for the user to select*/

/**
 * The default frame producer function for workshop version 1.4 at Instanssi
 * 2024.
 *
 * Clears color and depth (requires "clearColor" defined). Uses one, global
 * shader program for all geometries. Forces depth test, face culling and no
 * transparency. Builds a scene graph (requires "buildSceneAtTime(t)" defined).
 * Expects to find one camera and one point light in the scene graph (requires
 * such nodes in user-returned graph; TODO: ehm.. debug-mode assertion and kind
 * error message is lacking, so check if a mysterious crash results from missing
 * cam or light.. will do that at some point, certainly, but not yet there...)
 *
*/
var frameProducerVanilla14 = function(t,w,h){
    // Update the HTML and CSS parts, if you wanna have something like text..
    updateDocument(t);

    // Gl state
    gl.enable(gl.DEPTH_TEST);
    gl.enable(gl.CULL_FACE); // Performance opt., costs 6 bytes.

    // Re-build the scenegraph for every frame (can animate):
    var sceneroot = buildSceneAtTime(t);

    // Scene is built. Then we actually draw it.
    // Clear buffer
    gl.clearColor(clearColor[0], clearColor[1], clearColor[2], clearColor[3]);
    gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);

    // Transfer perspective matrix to shader:
    var persmat = perspectiveFhc(5,w/h);
    gl.uniformMatrix4fv(gl.getUniformLocation(prg,"p"), false, persmat);

    // TODO: Could switch the shader based on time / object properties:
    gl.useProgram(prg);

    // Then we display the scenegraph
    findcam_wi(sceneroot,rotX_wi(0));

    // Set light position (very naive as of yet):
    // TODO: Multiple lights, different colors for lights.
//        var lightPos = matmul4(lightMat,[0,0,0,1]);
    gl.uniform4fv(gl.getUniformLocation(prg, "l"),
                matmul4(cameraTransformation,matmul4(lightMat,[0,0,0,1])));

    traverse_wi(sceneroot,cameraTransformation);
}

/** 
 * One shader type of intro - the stuff you see live coded in Shader Showdown
 * competitions. Experimental at Instanssi 2024: undocumented but doable - ask
 * help at the workshop if you want to go this route!
 */
var frameProducerExperimentalShaderOnly = function(t,w,h){
    // If it's a one-program show, then most of this could be just in init:
    gl.useProgram(prg);
    gl.enableVertexAttribArray(positionAttributeLocation); // can be in init only?
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer); // can be in init only?
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);
    gl.uniform4fv(gl.getUniformLocation(prg, 'u'), [w,h,t,0]);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 3);
}
/**
 * @fileOverview Handcrafted minimal shaders.
 * 
 * Very simple shaders as strings. Catenate these in front of your
 * WebGL code, use what you need, and minimize the result using
 * Closure. Non-used shader versions will vanish from final output.
 *
 * The strategy is, of course, to select the smallest shader that
 * suffices for what you want to do. If you have time to tinker, you
 * can always remove or simplify features from these, as well, if you
 * run out of space for artwork :). Shaders are now selected from the
 * production, so you could just copy-paste-modify one of these into
 * your own one.
 * 
 */

/** A very basic vertex shader: Just interpolate color (g) and
 * position (v) projected by perspective (p) and modelview (mv)
 * transforms. We transform normals (N) by the modelview (not its
 * inverse transpose) so free scale / skew cannot be done with
 * correct normals. Orthonormal transformations should be OK.
 */

var vertex_shader_basic =
        //"precision mediump float;"+ //Vertex shader has default prec.
        "uniform mat4 mv,p;" +
        "attribute vec4 g,v,N;" +
        "varying vec4 c,n,r;" +
        "void main(){" +
            "gl_Position=p*mv*v;" +
            "n=mv*N;" +     // Normal (assuming mv is orthonormal)
            "c=g;" +        // "Color" (whatever in the fragment shader)
            "r=-mv*v;" +    // View diRection
        "}";

/** A vertex shader that uses normal matrix. It should be a 4x4 matrix
 * whose upper left 3x3 part contains the inverse transpose of
 * modelview. Otherwise as simple as the previous one. This allows
 * free scale/skew of geometries with the expense of requiring you to
 * compute and transfer the normal matrix. It is some heavy code, so
 * you should really go and scale your sH* to make it look awesome, if
 * you decide to compute inverses.
 */
var vertex_shader_minimal_with_normalmatrix =
        //"precision mediump float;"+ //Vertex shader has default prec.
        "uniform mat4 mv,nm,p;" +
        "attribute vec4 g,v,N;" +
        "varying vec4 c,n,r;" +
        "void main(){" +
            "gl_Position=p*mv*v;" +
            "n=nm*N;" +     // Normal
            "c=g;" +        // "Color" (whatever in the fragment shader)
            "r=-mv*v;" +    // View diRection
        "}";


// Fragment shader: Only one unidirectional light is used.

var fragment_shader_camspace_directed =
        //"precision mediump float;"+ // one-by-one definitions are shorter
        // Inputs:
        // a: ambient color  - now coming in as i[0]
        // d: diffuse color  - now coming in as i[1]
        // s: specular color - now coming in as i[2]
        // q: additional params [shininess, "par2", mesh_brightn]
        //     - now coming in as i[3]
        // l: light direction in camera space, pre-normalized
        // r: view direction, assume already normalized
        //
        // u: [time, window w, window h] - not used in this production
        'uniform highp mat4 i;' +
        'uniform highp vec4 l;' +
        'varying highp vec4 c,n,r;' +
        'void main(){' +
            // win 10 bytes in packed space by re-normalizing n twice.
            // As always, time we can spend, but space not so much.
    	    'gl_FragColor=' +
                 // Locate triangle boundaries from "vertex coloring":
                'i[3].bbbb*max(0.,1.-4.*min(c.b,min(c.g,c.r)))' +
                 // Clamp output at ambient color (incl. alpha):
                '+max(i[0],'+
                     // Diffuse reflection
                     'i[1]*max(0.,dot(normalize(l),normalize(n)))' +
                     // Specular reflection
                     '+i[2]*pow(max(0.,dot(normalize(r),'+
                                          'reflect(-normalize(l),normalize(n))' +
                                  ')),' +
                               'i[3].r' +
                               ')' +
                     ')' +
	            ';' +
        '}';

var fragment_shader_camspace_directed_with_white_fog =
        //"precision mediump float;"+ // one-by-one definitions are shorter
        // Inputs:
        // a: ambient color  - now coming in as i[0]
        // d: diffuse color  - now coming in as i[1]
        // s: specular color - now coming in as i[2]
        // q: additional params [shininess, "par2", mesh_brightn]
        //     - now coming in as i[3]
        // l: light direction in camera space, pre-normalized
        // r: view direction, assume already normalized
        //
        // u: [time, window w, window h] - not used in this production
        'uniform highp mat4 i;' +
        'uniform highp vec4 l;' +
        'varying highp vec4 c,n,r;' +
        'void main(){' +
            // win 10 bytes in packed space by re-normalizing n twice.
            // As always, time we can spend, but space not so much.
    	    'gl_FragColor= vec4(1.-clamp(exp(-.02*r.z), 0., 1.))+' +
                 // Locate triangle boundaries from "vertex coloring":
                'i[3].bbbb*max(0.,1.-4.*min(c.b,min(c.g,c.r)))' +
                 // Clamp output at ambient color (incl. alpha):
                '+max(i[0],'+
                     // Diffuse reflection
                     'i[1]*max(0.,dot(normalize(l),normalize(n)))' +
                     // Specular reflection
                     '+i[2]*pow(max(0.,dot(normalize(r),'+
                                          'reflect(-normalize(l),normalize(n))' +
                                  ')),' +
                               'i[3].r' +
                               ')' +
                     ')' +
	            ';' +
        '}';


/** Phong model with one point light given in camera space. */
var fragment_shader_pointlight_cameraspace =
        //"precision mediump float;"+ // one-by-one definitions are shorter
        // Inputs:
        // a: ambient color  - now coming in as i[0]
        // d: diffuse color  - now coming in as i[1]
        // s: specular color - now coming in as i[2]
        // q: additional params [shininess, "par2", mesh_brightn]
        //     - now coming in as i[3]
        // l: point light position in camera space
        // r: view direction, assume already normalized
        //
        // u: [time, window w, window h] - not used in this production
        'uniform highp mat4 i;' +
        'uniform highp vec4 l;' +
	    'varying highp vec4 c,n,r;' +
        'void main(){' +
            // win 10 bytes in packed space by re-normalizing n twice.
            // As always, time we can spend, but space not so much.
    	    'gl_FragColor=' +
                 // Locate triangle boundaries from "vertex coloring":
                'i[3].bbbb*max(0.,1.-4.*min(c.b,min(c.g,c.r)))' +
                 // Clamp output at ambient color (incl. alpha):
                '+max(i[0],'+
                     // Diffuse reflection
                     'i[1]*max(0.,dot(normalize(l),normalize(n)))' +
                     // Specular reflection
                     '+i[2]*pow(max(0.,dot(normalize(r),'+
                                          'reflect(-l,normalize(n))' +
                                  ')),' +
                               'i[3].r' +
                               ')' +
                     ')' +
	            ';' +
        '}';


/**
 * Default for lmad1 version 1.4 starter example: A vertex shader
 * that uses normal matrix.
 * 
 * Inputs:
 *   p - projection
 *  mv - modelview
 *  nm - normal matrix
 */
var vert_shader_vanilla14 =
        //"precision mediump float;"+ //Vertex shader has default prec.
        "uniform mat4 mv,nm,p;" +
        "attribute vec4 g,v,N;" +
        "varying vec4 c,n,f;" +
        "void main(){" +
            "gl_Position=p*mv*v;" +
            "n=nm*N;" +     // Normal
            "c=g;" +        // "Color" (whatever in the fragment shader)
            "f=mv*v;" +     // Fragment position in view space
        "}";

/**
 * Default for lmad1 version 1.4 starter example: A fragment shader
 * that can simulate earlier workshop examples and productions but with
 * more control and documentation. White fog has gone away, too.
 * 
 * Uniforms to be input:
 * 
 * mat4 i - "Illumination/irradiance":
 *           i[0].rgb   ambient color
 *           i[1].rgb   diffuse color
 *           i[2].rgb   specular color    i[2].a  shininess
 *           i[3].rgb   (unused)          i[3].a  mesh brightness
 * 
 * vec4 f - fragment position in camera space
 * vec4 l - "Light position" in camera space(!) compute before sending it.
 * 
 */
var frag_shader_vanilla14 =
        'uniform highp mat4 i;' +
        'uniform highp vec4 l;' +
        'varying highp vec4 c,n,f;' +
        'void main(){' +
            // win 10 bytes in packed space by re-normalizing n twice.
            // As always, time we can spend, but space not so much.
            // "Fog is still there, if needed: means a mix of "
    	    'gl_FragColor=vec4(' +
                 // Locate triangle boundaries from "vertex coloring":
                'i[3].aaa*max(0.,1.-4.*min(c.b,min(c.g,c.r)))' +
                 // Clamp output at ambient color (incl. alpha):
                '+max(i[0].rgb,' +
                     // Diffuse reflection
                     'i[1].rgb*max(0.,dot(normalize(l-f),normalize(n)))' +
                        // Specular reflection
                        '+i[2].rgb*pow(max(0.,dot(normalize(-f),' +
                                                 'reflect(-normalize(l-f),normalize(n))' +
                                                 ')' +
                                          '),' +
                                       'i[2].a' +
                               ')' +
                     ')' +
	        ',1.);' +
        '}';

/** Pass through vertex shader for "one-quad shader" type of intro*/
var vert_shader_passthru =
    "attribute vec4 u;void main(){gl_Position=u;}";

/** A debug / development test shader to try "one-quad" / shadertoy type of intro 
 * Uniform input: vec4 u - []
*/
var frag_shader_test =
    "uniform mediump vec4 u;" +
    "void main(){" +
    "mediump vec2 s = (2.*gl_FragCoord.xy-u.xy)/u.y;\n" +
    "gl_FragColor=vec4(s.xy,abs(length(s.xy)-1.)<mod(floor(1.-u.z)+.5,2.)*.01,1);\n" +
    "}";
/* File generated with Shader Minifier 1.1.5
 * http://www.ctrl-alt-test.fr
 */

var test_frag =
 "uniform mediump mat4 i;" +
 "uniform mediump vec4 l;" +
 "varying mediump vec4 c,n,r,a;" +
 "void main()" +
 "{" +
   "mediump vec4 m=l-a,d=normalize(m),g=normalize(r),e=normalize(n);" +
   "mediump float v=length(m),o=1.+.1*v+.01*v*v;" +
   "gl_FragColor=i[3].bbbb*max(0.,1.-4.*min(c.b,min(c.g,c.r)))+max(i[0],(i[1]*max(0.,dot(d,e))+i[2]*pow(max(0.,dot(g,reflect(-d,e))),i[3].r))/o);" +
 "}"

/* File generated with Shader Minifier 1.1.5
 * http://www.ctrl-alt-test.fr
 */

var test_vert =
 "uniform mat4 mv,nm,p;" +
 "attribute vec4 g,v,N;" +
 "varying vec4 c,n,r,a,m;" +
 "void main()" +
 "{" +
   "m=v,a=mv*v,gl_Position=p*a,n=nm*N,c=g,r=-mv*v,r.a=0.;" +
 "}"

/* File generated with Shader Minifier 1.1.5
 * http://www.ctrl-alt-test.fr
 */

var noisy_frag =
 "uniform mediump mat4 i;" +
 "uniform mediump vec4 l;" +
 "varying mediump vec4 c,n,r,a,m;" +
 "mediump vec3 v(mediump vec3 v)" +
 "{" +
   "mediump mat3 f=mat3(3,17,13,19,5,23,11,29,7);" +
   "mediump vec3 g=vec3(.25)+.25*sin(v*f);" +
   "g-=vec3(.000976563);" +
   "mediump vec3 t=fract(16.*g);" +
   "return vec3(-1.)+2.*t;" +
 "}" +
 "mediump float t(mediump vec3 f)" +
 "{" +
   "mediump float g=64.;" +
   "mediump vec3 d=mod(f,g),b=floor(d),t=b+vec3(0,0,1),e=b+vec3(0,1,0),o=b+vec3(0,1,1),p=b+vec3(1,0,0),u=b+vec3(1,0,1),s=b+vec3(1,1,0),z=b+vec3(1,1,1),h=d-b,x=d-t,F=d-e,C=d-o,y=d-p,w=d-u,Z=d-s,Y=d-z;" +
   "mediump float X=dot(h,normalize(v(mod(b,g)))),W=dot(x,normalize(v(mod(t,g)))),V=dot(F,normalize(v(mod(e,g)))),U=dot(C,normalize(v(mod(o,g)))),T=dot(y,normalize(v(mod(p,g)))),S=dot(w,normalize(v(mod(u,g)))),R=dot(Z,normalize(v(mod(s,g)))),Q=dot(Y,normalize(v(mod(z,g))));" +
   "mediump vec3 P=h;" +
   "mediump float O=X+smoothstep(0.,1.,P.r)*(T-X),N=V+smoothstep(0.,1.,P.r)*(R-V),M=W+smoothstep(0.,1.,P.r)*(S-W),L=U+smoothstep(0.,1.,P.r)*(Q-U),K=O+smoothstep(0.,1.,P.g)*(N-O),J=M+smoothstep(0.,1.,P.g)*(L-M),I=K+smoothstep(0.,1.,P.b)*(J-K);" +
   "return I;" +
 "}" +
 "mediump vec3 t(mediump vec3 v,mediump vec3 d,mediump vec3 f,mediump vec3 g,mediump vec3 b,mediump vec3 t,mediump vec3 e,mediump float P)" +
 "{" +
   "mediump vec3 X=d-v,o=normalize(X);" +
   "mediump float O=length(X),p=1.+.1*O+.01*O*O;" +
   "mediump vec3 u=t*max(0.,dot(o,g)),s=e*pow(max(0.,dot(f,reflect(-o,g))),P);" +
   "return b/p*(u+s);" +
 "}" +
 "void main()" +
 "{" +
   "mediump vec3 v=normalize(r.rgb),g=normalize(n.rgb),b=m.rgb;" +
   "mediump float f=.5+t(2.*b+vec3(10))+t(4.*b+vec3(.1))/2.+t(8.*b+vec3(.3))/4.+t(16.*b+vec3(.4))/6.;" +
   "gl_FragColor=vec4(max(i[0].rgb*f,t(a.rgb,l.rgb,v,g,vec3(1),f*i[1].rgb,i[2].rgb,16.*(1.+f))),1);" +
 "}"

/* File generated with Shader Minifier 1.1.5
 * http://www.ctrl-alt-test.fr
 */

var noisz_frag =
 "uniform mediump mat4 i;" +
 "uniform mediump vec4 l;" +
 "varying mediump vec4 c,n,r,a,m;" +
 "mediump vec3 v(mediump vec3 v)" +
 "{" +
   "mediump mat3 f=mat3(3,17,11,7,5,13,0,0,0);" +
   "mediump vec2 b=64.*sin(vec2(v*f)),d=sin(b),p=cos(b);" +
   "return vec3(d.r*p.g,d.r*d.g,p.r);" +
 "}" +
 "mediump float f(mediump vec3 b)" +
 "{" +
   "mediump float f=64.,d[8];" +
   "mediump vec3 p=mod(b,f),u[8],g[8],s=vec3(1,0,0);" +
   "u[0]=floor(p);" +
   "u[1]=u[0]+s.ggr;" +
   "u[2]=u[0]+s.grg;" +
   "u[3]=u[0]+s.grr;" +
   "for(int e=0;e<4;e++)" +
     "u[4+e]=u[e]+s.rgg;" +
   "for(int e=0;e<8;e++)" +
     "g[e]=p-u[e];" +
   "for(int e=0;e<8;e++)" +
     "u[e]=mod(u[e],f);" +
   "u[0]=v(u[0]);" +
   "u[1]=v(u[1]);" +
   "u[2]=v(u[2]);" +
   "u[3]=v(u[3]);" +
   "u[4]=v(u[4]);" +
   "u[5]=v(u[5]);" +
   "u[6]=v(u[6]);" +
   "u[7]=v(u[7]);" +
   "for(int e=0;e<8;e++)" +
     "d[e]=dot(g[e],u[e]);" +
   "for(int e=0;e<4;e++)" +
     "d[e]=d[e]+smoothstep(0.,1.,g[0].r)*(d[4+e]-d[e]);" +
   "g[0]=g[0].gbr;" +
   "for(int e=0;e<2;e++)" +
     "d[e]=d[e]+smoothstep(0.,1.,g[0].r)*(d[2+e]-d[e]);" +
   "g[0]=g[0].gbr;" +
   "for(int e=0;e<2;e++)" +
     "return d[e]=d[e]+smoothstep(0.,1.,g[0].r)*(d[1+e]-d[e]);" +
 "}" +
 "mediump vec3 f(mediump vec3 v,mediump vec3 f,mediump vec3 b,mediump vec3 e,mediump vec3 g,mediump vec3 d,mediump vec3 u,mediump float p)" +
 "{" +
   "mediump vec3 s=f-v,o=normalize(s);" +
   "mediump float t=length(s),h=1.+.1*t+.01*t*t;" +
   "mediump vec3 z=d*max(0.,dot(o,e)),x=u*pow(max(0.,dot(b,reflect(-o,e))),p);" +
   "return g/h*(z+x);" +
 "}" +
 "void main()" +
 "{" +
   "mediump vec3 v=normalize(r.rgb),e=normalize(n.rgb),d=m.rgb;" +
   "mediump float b=.5+f(2.*d+vec3(10))+f(4.*d+vec3(.1))/2.+f(8.*d+vec3(.3))/4.+f(16.*d+vec3(.4))/6.;" +
   "gl_FragColor=vec4(max(i[0].rgb*b,f(a.rgb,l.rgb,v,e,vec3(1),b*i[1].rgb,i[2].rgb,16.*(1.+b))),1);" +
 "}"

/* -*- mode: javascript; tab-width: 4; indent-tabs-mode: nil; -*-
*
* Copyright (c) 2011-2013 Marcus Geelnard
*
* This software is provided 'as-is', without any express or implied
* warranty. In no event will the authors be held liable for any damages
* arising from the use of this software.
*
* Permission is granted to anyone to use this software for any purpose,
* including commercial applications, and to alter it and redistribute it
* freely, subject to the following restrictions:
*
* 1. The origin of this software must not be misrepresented; you must not
*    claim that you wrote the original software. If you use this software
*    in a product, an acknowledgment in the product documentation would be
*    appreciated but is not required.
*
* 2. Altered source versions must be plainly marked as such, and must not be
*    misrepresented as being the original software.
*
* 3. This notice may not be removed or altered from any source
*    distribution.
*
*/

"use strict";

// Some general notes and recommendations:
//  * This code uses modern ECMAScript features, such as ** instead of
//    Math.pow(). You may have to modify the code to make it work on older
//    browsers.
//  * If you're not using all the functionality (e.g. not all oscillator types,
//    or certain effects), you can reduce the size of the player routine even
//    further by deleting the code.


var CPlayer = function() {

    //--------------------------------------------------------------------------
    // Private methods
    //--------------------------------------------------------------------------

    // Oscillators
    var osc_sin = function (value) {
        return Math.sin(value * 6.283184);
    };

    var osc_saw = function (value) {
        return 2 * (value % 1) - 1;
    };

    var osc_square = function (value) {
        return (value % 1) < 0.5 ? 1 : -1;
    };

    var osc_tri = function (value) {
        var v2 = (value % 1) * 4;
        if(v2 < 2) return v2 - 1;
        return 3 - v2;
    };

    var getnotefreq = function (n) {
        // 174.61.. / 44100 = 0.003959503758 (F3)
        return 0.003959503758 * (2 ** ((n - 128) / 12));
    };

    var createNote = function (instr, n, rowLen) {
        var osc1 = mOscillators[instr.i[0]],
            o1vol = instr.i[1],
            o1xenv = instr.i[3]/32,
            osc2 = mOscillators[instr.i[4]],
            o2vol = instr.i[5],
            o2xenv = instr.i[8]/32,
            noiseVol = instr.i[9],
            attack = instr.i[10] * instr.i[10] * 4,
            sustain = instr.i[11] * instr.i[11] * 4,
            release = instr.i[12] * instr.i[12] * 4,
            releaseInv = 1 / release,
            expDecay = -instr.i[13]/16,
            arp = instr.i[14],
            arpInterval = rowLen * (2 **(2 - instr.i[15]));

        var noteBuf = new Int32Array(attack + sustain + release);

        // Re-trig oscillators
        var c1 = 0, c2 = 0;

        // Local variables.
        var j, j2, e, t, rsample, o1t, o2t;

        // Generate one note (attack + sustain + release)
        for (j = 0, j2 = 0; j < attack + sustain + release; j++, j2++) {
            if (j2 >= 0) {
                // Switch arpeggio note.
                arp = (arp >> 8) | ((arp & 255) << 4);
                j2 -= arpInterval;

                // Calculate note frequencies for the oscillators
                o1t = getnotefreq(n + (arp & 15) + instr.i[2] - 128);
                o2t = getnotefreq(n + (arp & 15) + instr.i[6] - 128) * (1 + 0.0008 * instr.i[7]);
            }

            // Envelope
            e = 1;
            if (j < attack) {
                e = j / attack;
            } else if (j >= attack + sustain) {
                e = (j - attack - sustain) * releaseInv;
                e = (1 - e) * (3 ** (expDecay * e));
            }

            // Oscillator 1
            c1 += o1t * e ** o1xenv;
            rsample = osc1(c1) * o1vol;

            // Oscillator 2
            c2 += o2t * e ** o2xenv;
            rsample += osc2(c2) * o2vol;

            // Noise oscillator
            if (noiseVol) {
                rsample += (2 * Math.random() - 1) * noiseVol;
            }

            // Add to (mono) channel buffer
            noteBuf[j] = (80 * rsample * e) | 0;
        }

        return noteBuf;
    };


    //--------------------------------------------------------------------------
    // Private members
    //--------------------------------------------------------------------------

    // Array of oscillator functions
    var mOscillators = [
        osc_sin,
        osc_square,
        osc_saw,
        osc_tri
    ];

    // Private variables set up by init()
    var mSong, mLastRow, mCurrentCol, mNumWords, mMixBuf;


    //--------------------------------------------------------------------------
    // Initialization
    //--------------------------------------------------------------------------

    this.init = function (song) {
        // Define the song
        mSong = song;

        // Init iteration state variables
        mLastRow = song.endPattern;
        mCurrentCol = 0;

        // Prepare song info
        mNumWords =  song.rowLen * song.patternLen * (mLastRow + 1) * 2;

        // Create work buffer (initially cleared)
        mMixBuf = new Int32Array(mNumWords);
    };


    //--------------------------------------------------------------------------
    // Public methods
    //--------------------------------------------------------------------------

    // Generate audio data for a single track
    this.generate = function () {
        // Local variables
        var i, j, b, p, row, col, n, cp,
            k, t, lfor, e, x, rsample, rowStartSample, f, da;

        // Put performance critical items in local variables
        var chnBuf = new Int32Array(mNumWords),
            instr = mSong.songData[mCurrentCol],
            rowLen = mSong.rowLen,
            patternLen = mSong.patternLen;

        // Clear effect state
        var low = 0, band = 0, high;
        var lsample, filterActive = false;

        // Clear note cache.
        var noteCache = [];

         // Patterns
         for (p = 0; p <= mLastRow; ++p) {
            cp = instr.p[p];

            // Pattern rows
            for (row = 0; row < patternLen; ++row) {
                // Execute effect command.
                var cmdNo = cp ? instr.c[cp - 1].f[row] : 0;
                if (cmdNo) {
                    instr.i[cmdNo - 1] = instr.c[cp - 1].f[row + patternLen] || 0;

                    // Clear the note cache since the instrument has changed.
                    if (cmdNo < 17) {
                        noteCache = [];
                    }
                }

                // Put performance critical instrument properties in local variables
                var oscLFO = mOscillators[instr.i[16]],
                    lfoAmt = instr.i[17] / 512,
                    lfoFreq = (2 ** (instr.i[18] - 9)) / rowLen,
                    fxLFO = instr.i[19],
                    fxFilter = instr.i[20],
                    fxFreq = instr.i[21] * 43.23529 * 3.141592 / 44100,
                    q = 1 - instr.i[22] / 255,
                    dist = instr.i[23] * 1e-5,
                    drive = instr.i[24] / 32,
                    panAmt = instr.i[25] / 512,
                    panFreq = 6.283184 * (2 ** (instr.i[26] - 9)) / rowLen,
                    dlyAmt = instr.i[27] / 255,
                    dly = instr.i[28] * rowLen & ~1;  // Must be an even number

                // Calculate start sample number for this row in the pattern
                rowStartSample = (p * patternLen + row) * rowLen;

                // Generate notes for this pattern row
                for (col = 0; col < 4; ++col) {
                    n = cp ? instr.c[cp - 1].n[row + col * patternLen] : 0;
                    if (n) {
                        if (!noteCache[n]) {
                            noteCache[n] = createNote(instr, n, rowLen);
                        }

                        // Copy note from the note cache
                        var noteBuf = noteCache[n];
                        for (j = 0, i = rowStartSample * 2; j < noteBuf.length; j++, i += 2) {
                          chnBuf[i] += noteBuf[j];
                        }
                    }
                }

                // Perform effects for this pattern row
                for (j = 0; j < rowLen; j++) {
                    // Dry mono-sample
                    k = (rowStartSample + j) * 2;
                    rsample = chnBuf[k];

                    // We only do effects if we have some sound input
                    if (rsample || filterActive) {
                        // State variable filter
                        f = fxFreq;
                        if (fxLFO) {
                            f *= oscLFO(lfoFreq * k) * lfoAmt + 0.5;
                        }
                        f = 1.5 * Math.sin(f);
                        low += f * band;
                        high = q * (rsample - band) - low;
                        band += f * high;
                        rsample = fxFilter == 3 ? band : fxFilter == 1 ? high : low;

                        // Distortion
                        if (dist) {
                            rsample *= dist;
                            rsample = rsample < 1 ? rsample > -1 ? osc_sin(rsample*.25) : -1 : 1;
                            rsample /= dist;
                        }

                        // Drive
                        rsample *= drive;

                        // Is the filter active (i.e. still audiable)?
                        filterActive = rsample * rsample > 1e-5;

                        // Panning
                        t = Math.sin(panFreq * k) * panAmt + 0.5;
                        lsample = rsample * (1 - t);
                        rsample *= t;
                    } else {
                        lsample = 0;
                    }

                    // Delay is always done, since it does not need sound input
                    if (k >= dly) {
                        // Left channel = left + right[-p] * t
                        lsample += chnBuf[k-dly+1] * dlyAmt;

                        // Right channel = right + left[-p] * t
                        rsample += chnBuf[k-dly] * dlyAmt;
                    }

                    // Store in stereo channel buffer (needed for the delay effect)
                    chnBuf[k] = lsample | 0;
                    chnBuf[k+1] = rsample | 0;

                    // ...and add to stereo mix buffer
                    mMixBuf[k] += lsample | 0;
                    mMixBuf[k+1] += rsample | 0;
                }
            }
        }

        // Next iteration. Return progress (1.0 == done!).
        mCurrentCol++;
        return mCurrentCol / mSong.numChannels;
    };
/*
    // Create a AudioBuffer from the generated audio data
    this.createAudioBuffer = function(context) {
        var buffer = context.createBuffer(2, mNumWords / 2, 44100);
        for (var i = 0; i < 2; i ++) {
            var data = buffer.getChannelData(i);
            for (var j = i; j < mNumWords; j += 2) {
                data[j >> 1] = mMixBuf[j] / 65536;
            }
        }
        return buffer;
    };
    
    // Create a WAVE formatted Uint8Array from the generated audio data
    this.createWave = function() {
        // Create WAVE header
        var headerLen = 44;
        var l1 = headerLen + mNumWords * 2 - 8;
        var l2 = l1 - 36;
        var wave = new Uint8Array(headerLen + mNumWords * 2);
        wave.set(
            [82,73,70,70,
             l1 & 255,(l1 >> 8) & 255,(l1 >> 16) & 255,(l1 >> 24) & 255,
             87,65,86,69,102,109,116,32,16,0,0,0,1,0,2,0,
             68,172,0,0,16,177,2,0,4,0,16,0,100,97,116,97,
             l2 & 255,(l2 >> 8) & 255,(l2 >> 16) & 255,(l2 >> 24) & 255]
        );

        // Append actual wave data
        for (var i = 0, idx = headerLen; i < mNumWords; ++i) {
            // Note: We clamp here
            var y = mMixBuf[i];
            y = y < -32767 ? -32767 : (y > 32767 ? 32767 : y);
            wave[idx++] = y & 255;
            wave[idx++] = (y >> 8) & 255;
        }

        // Return the WAVE formatted typed array
        return wave;
    };
*/
    // Get n samples of wave data at time t [s]. Wave data in range [-2,2].
    this.getData = function(t, n) {
        var i = 2 * Math.floor(t * 44100);
        var d = new Array(n);
        for (var j = 0; j < 2*n; j += 1) {
            var k = i + j;
            d[j] = t > 0 && k < mMixBuf.length ? mMixBuf[k] / 32768 : 0;
        }
        return d;
    };

    // -----------------------------
    // ADDITIONS needed for the lmad1 workshop. I hope this is a clear indication
    // of what has been changed in this derivative version..
    
    // Copy data to output buffer (added by nieminen 2019-11-30)
    // Hmm... I'm making it mono, sorry.. will make a stereo option at some
    // later workshop instance, I promise...
    this.cpy = function(iframe, nframe, outbuf){
	    for (var i = 0; i<nframe; i++){
 	        outbuf[i] = mMixBuf[2*iframe+2*i] / 32768.0;
 	    }
    };
    // Return song length in samples (only used for debug mode seek..)
    this.ns = function(){return mMixBuf.length/2;} //DEBUG
    // -----------------------------

};
    // This music has been exported by SoundBox. You can use it with
    // http://sb.bitsnbites.eu/player-small.js in your own product.

    // See http://sb.bitsnbites.eu/demo.html for an example of how to
    // use it in a demo.

    // Song data
    var song = {
      songData: [
        { // Instrument 0
          i: [
          0, // OSC1_WAVEFORM
          0, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          0, // OSC2_WAVEFORM
          0, // OSC2_VOL
          128, // OSC2_SEMI
          0, // OSC2_DETUNE
          0, // OSC2_XENV
          125, // NOISE_VOL
          0, // ENV_ATTACK
          1, // ENV_SUSTAIN
          59, // ENV_RELEASE
          0, // ENV_EXP_DECAY
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          1, // FX_FILTER
          193, // FX_FREQ
          171, // FX_RESONANCE
          0, // FX_DIST
          29, // FX_DRIVE
          39, // FX_PAN_AMT
          3, // FX_PAN_FREQ
          88, // FX_DELAY_AMT
          3 // FX_DELAY_TIME
          ],
          // Patterns
          p: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1],
          // Columns
          c: [
            {n: [],
             f: []},
            {n: [124,,,,124,,,124,124,,,136,124,,,136,124,,,124,124,,136,124,124,,,,136,,,136],
             f: []}
          ]
        },
        { // Instrument 1
          i: [
          3, // OSC1_WAVEFORM
          100, // OSC1_VOL
          128, // OSC1_SEMI
          0, // OSC1_XENV
          3, // OSC2_WAVEFORM
          162, // OSC2_VOL
          128, // OSC2_SEMI
          2, // OSC2_DETUNE
          0, // OSC2_XENV
          0, // NOISE_VOL
          0, // ENV_ATTACK
          6, // ENV_SUSTAIN
          55, // ENV_RELEASE
          0, // ENV_EXP_DECAY
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          139, // LFO_AMT
          4, // LFO_FREQ
          1, // LFO_FX_FREQ
          3, // FX_FILTER
          30, // FX_FREQ
          184, // FX_RESONANCE
          119, // FX_DIST
          244, // FX_DRIVE
          147, // FX_PAN_AMT
          6, // FX_PAN_FREQ
          0, // FX_DELAY_AMT
          12 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,,,2,3,4,5,2,2,4,5,6],
          // Columns
          c: [
            {n: [],
             f: []},
            {n: [139,,,,138,,,,137,,,,136,,,,135,,,,134,,,,133,,,,132],
             f: []},
            {n: [134,,,,130,,,,131,,,,127,,,,123,,,,124,,,,125,,,,122],
             f: [29,,,,,,,,,,,,,,,,,,29,,,,,,,,,,,,,,10,,,,,,,,,,,,,,,,,,12]},
            {n: [123,,,,124,,,,125,,,,137,,,,136,,,,135,,,,136,,,,133],
             f: []},
            {n: [134,,,,122,,,,123,,,,128,,,,133,,,,137,,,,140,,,,138],
             f: []},
            {n: [139],
             f: []}
          ]
        },
        { // Instrument 2
          i: [
          0, // OSC1_WAVEFORM
          255, // OSC1_VOL
          116, // OSC1_SEMI
          79, // OSC1_XENV
          0, // OSC2_WAVEFORM
          255, // OSC2_VOL
          116, // OSC2_SEMI
          0, // OSC2_DETUNE
          83, // OSC2_XENV
          0, // NOISE_VOL
          4, // ENV_ATTACK
          6, // ENV_SUSTAIN
          69, // ENV_RELEASE
          52, // ENV_EXP_DECAY
          0, // ARP_CHORD
          0, // ARP_SPEED
          0, // LFO_WAVEFORM
          0, // LFO_AMT
          0, // LFO_FREQ
          0, // LFO_FX_FREQ
          2, // FX_FILTER
          14, // FX_FREQ
          0, // FX_RESONANCE
          0, // FX_DIST
          25, // FX_DRIVE
          0, // FX_PAN_AMT
          0, // FX_PAN_FREQ
          0, // FX_DELAY_AMT
          0 // FX_DELAY_TIME
          ],
          // Patterns
          p: [,,1,1,1,1,1,1,1,1,1,1,1,1],
          // Columns
          c: [
            {n: [136,,,,136,,,,136,,,,136,,,,136,,,,136,,,,136,,,,136],
             f: []}
          ]
        },
      ],
      rowLen: 2756,   // In sample lengths
      patternLen: 32,  // Rows per pattern
      endPattern: 24,  // End pattern
      numChannels: 3  // Number of channels
    };
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

function drawLeaf(rotation, leaf, depth, length, thickness,t){

    if(depth === 0){
        return
    }

    var color = depth === 1 ? Defaultcolor : brown
    var thickness = color === green ? thickness+0.8 : thickness
    var length = color === green ? length-0.2 : length
    var offset = color === green ? 0.2 : 0


    var rightleaf = {
        f : [rotZ_wi(-rotation*3.14/180),translate_wi(0,length,offset)],
        o : [],
        c : [{
            f : [ scaleXYZ_wi(thickness*depth/4, length, thickness*depth/4)],
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
            f : [ scaleXYZ_wi(thickness*depth/4, length, thickness*thickness/4)],
            o : [new Material(color),objBall],
            c : []
        }]
    }

    leaf.c.push(leftleaf,rightleaf)
    drawLeaf(rotation,leftleaf,depth-1,length,thickness,t)
    drawLeaf(rotation,rightleaf,depth-1,length,thickness,t)

}

function drawTree(t){

    var trunkHeight = 0
    var trunkThickness = 0
    if(t > 32){
    var trunkHeight = .066*(t-24) > 3 ? 3 : .066*(t-24);
    var trunkThickness = .05*(t-24) > 1.75 ? 1.75 : .05*(t-24);
    }

    var growthFactor = t / 4;

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
    
        var rootThickness = 0.01*t > 0.1 ? 0.1 : .01*t;
        var rootLength = 0.25*t > 1.75 ? 1.75 : 0.25*t;

        var maxrootDepth = Math.floor(growthFactor) > 7 ? 7 : Math.floor(growthFactor);
      

        var roots = {f : [rotZ_wi(PI)], o : [], c : []};
        Defaultcolor = brown;
        drawLeaf(17.5,roots,maxrootDepth,rootLength,rootThickness,maxrootDepth);
        
        
        var leaves = {f : [], o : [], c : []};
        var leafDepth = 1
            
        var leafgrowthfactor = t/5 - 7
        var maxleafLength = leafgrowthfactor > 1.1 ? 1.1 : leafgrowthfactor

        if(leafgrowthfactor > 0){
            Defaultcolor = green;
            leafDepth = Math.floor(leafgrowthfactor) > 9 ? 9 : Math.floor(leafgrowthfactor)
            
            drawLeaf(15,leaves,leafDepth,maxleafLength,0.07,t)
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
                                
                              // The scene must have exactly one Camera. It doesn't work without.
                              {f:[translate_wi(0,10,0), rotY_wi(0.2), translate_wi(0,0,45), rotX_wi(0.2)],
                               o:[],
                               c:[],
                               r:[new Camera()]
                              },

                              // With "Vanilla 1.4" intro, the scene must have exactly one Light.
                              // It doesn't work without.
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
                    // t 120 finishes song, so 116 could be good cutoff time
                    
    return sceneroot;
}


function initDocument(){
}

function updateDocument(t){
}
/* -*- mode: javascript; tab-width: 4; indent-tabs-mode: nil; -*- */
/**
 * @fileOverview Main executable script; this should be appended to the very
 * end of the executable code (preferrably using automatic tools).
 *
 * This uses variables defined in {@link library.js} which should be
 * automatically added <strong>before</strong> the place where your
 * own creative code goes.
 */

var SAMPLE_RATE = 44100;
var startTimeInMillis = null;

var dbg_ms_at_last_seek = null; //DEBUG
var dbg_ms_offset = 0;          //DEBUG
var dbg_paused = false;         //DEBUG

/**
 * This is the event loop that happens on every frame.
 *
 * Assumes prior initialization of C (canvas).
 *
 * Assumes prior initialization of gl and prg.
 *
 * Debug mode needs initialization of dbg_xxx
 * 
 * Delegates actual update to user-selected draw function. Could change the intro type easily.
 *
 */
var loopfunc = function(curTimeInMillis)
{
    try                                                          //DEBUG
    {                                                            //DEBUG
        // Time of this frame; fix beginning upon first entry.
 	    if (!startTimeInMillis) startTimeInMillis = curTimeInMillis;
        // In compo mode, compute t as the music beat since start of show:
        var t = (curTimeInMillis - startTimeInMillis) * songBeatsPerMinute / 60000;

        // In debug mode, time is a bit more elaborate, because we want to
        // be able to seek back and forth.
        if (!dbg_ms_at_last_seek) dbg_ms_at_last_seek = startTimeInMillis; //DEBUG
        var dbg_ms_since_last_seek = curTimeInMillis - dbg_ms_at_last_seek; //DEBUG
        if (dbg_paused) dbg_ms_since_last_seek = 0; //DEBUG
        t = (dbg_ms_offset + dbg_ms_since_last_seek) * songBeatsPerMinute / 60000; //DEBUG

        // Update canvas size (window object is implicit; need no "window.X")
        var w = innerWidth, h = innerHeight;
        if (w != Cw || h != Ch) {
            gl.viewport(0, 0, Cw=C.width=w, Ch=C.height=h);
        }

        /* In debug mode, show window size, aspect ratio, and time.       */
        /* Omit info if the URL ends in '#'. Use for tidy screenshots...  */
        dbg_url=window.location.href;                                //DEBUG
        if (dbg_url.substring(dbg_url.length -1)!='#'){              //DEBUG
            dbg_show_aspect.nodeValue="Size: "+w+"x"+h+" "+w/h;      //DEBUG
            dbg_show_time.nodeValue=" time=" + Math.floor(audio_time / SAMPLE_RATE) +"s" /*(audio.currentTime|0)*/ //DEBUG
                                         + "(beat " +(t|0)+ ")";     //DEBUG
        }                                                            //DEBUG

        frameProducerFunction(t, w, h);
	    requestAnimationFrame(loopfunc);

    }                                                    //DEBUG
    catch (err)                                          //DEBUG
    {                                                    //DEBUG
        alert("Error: " + err.message);                  //DEBUG
    }                                                    //DEBUG
};





/*-----------------------------------------------------------------
  This is what actually gets executed on loading the page!
-------------------------------------------------------------------*/

try                                                  //DEBUG
{                                                    //DEBUG
    // NOTE: In debug mode, should probably adhere to
    // https://www.khronos.org/webgl/wiki/FAQ ...

    // This is the tiniest way I can do to hint at clicking to play...
    _document.body.innerHTML="Click!";
    _document.body.appendChild(C = _document.createElement("canvas"));
    s = C.style; s.position = "fixed"; s.left = s.top = 0;
    // TODO: Actually use the features of WebGL2.
    // Like.. https://webgl2fundamentals.org/webgl/lessons/webgl1-to-webgl2.html
    // Today, my library still uses only webgl1. But now I'm rid
    // of the long string 'experimental-webgl' that hung around for Edge.
    gl = C.getContext('webgl2');
    if (!gl){                                        //DEBUG
        alert("This demo requires WebGL2");          //DEBUG
        return;                                      //DEBUG
    }                                                //DEBUG
                                                     //DEBUG
    // Debug print of location and aspect            //DEBUG
    var dbg_show_aspect=document.createTextNode(""); //DEBUG
    var dbgInfoDiv=document.createElement("div");    //DEBUG
    document.body.appendChild(dbgInfoDiv);           //DEBUG
    dbgInfoDiv.style.position = "fixed";             //DEBUG
    dbgInfoDiv.style.right = 10;                     //DEBUG
    dbgInfoDiv.style.bottom = 10;                    //DEBUG
    dbgInfoDiv.style.color = "#cde";                 //DEBUG
    dbgInfoDiv.appendChild(dbg_show_aspect);         //DEBUG
    var dbg_show_time=document.createTextNode("");   //DEBUG
    dbgInfoDiv.appendChild(dbg_show_time);           //DEBUG
                                                     //DEBUG

    // Apply p01's trick for grabbing short names from GL obj
    // (http://slides.com/pdesch/js-demoscene-techniques#/5/6)
    // This didn't help me earlier when trying to make a 1k..
    // is OK now for 4k. saves something like 30 bytes / 4kb.
    // Not much.. The trick itself costs some 45 bytes compressed.
    // In 2023 I'm safeguarding against name clashes, so the regex
    // changes a bit from earlier versions.
    var dbgNameLists = {}; //DEBUG
    for(s in gl){
        // Instanssi 2023 still had: gl[s.match(/^..|[A-Z]|\d\D+$/g).join('')]=gl[s];
        // Contemplation at some point.. some alternatives with few clashes:
        // gl[s.match(/^.|[A-Zhol]|\d|[ruiv]+$/g).join('')]=gl[s];
        //gl[s.match(/^.|[A-Zlp]|\d.|[fv]+$/g).join('')]=gl[s];
        //gl[s.match(/^.|[A-Zlp]|\d.*$/g).join('')]=gl[s];
        //gl[s.match(/^.|[A-Zlp\d]|[fuiv]+$/g).join('')]=gl[s];

        // The trick itself:
        const trick_regex = /^.|[A-Zlp1-4]|[fuiv]*$/g;
        gl[s.match(trick_regex).join('')] = gl[s];
        // Gather names for clash inspection and creating a minifier:    //DEBUG
        var shortname = s.match(trick_regex).join('');                   //DEBUG
        if (shortname in dbgNameLists) {dbgNameLists[shortname].push(s); //DEBUG
        } else { dbgNameLists[shortname]=[s]; }                          //DEBUG
    }
    // Inspect all names and clashing ones //DEBUG
    var dbgClashing = {};               //DEBUG
    for(s in dbgNameLists)              //DEBUG
        if ((dbgNameLists[s].length>1)  //DEBUG 
            && (!dbgNameLists[s][0].match(/^[A-Z]/g))) //DEBUG
                dbgClashing[s]=dbgNameLists[s]; //DEBUG
    console.log(dbgNameLists);          //DEBUG
    console.log(dbgClashing);           //DEBUG
    // Output a sed script to change original names that don't clash:   //DEBUG
    // Then we should be safe... Can use any name; minified if possible //DEBUG
    var dbgSedStrings=[];               //DEBUG
    for (s in dbgNameLists) {           //DEBUG
        if ((dbgNameLists[s].length==1) //DEBUG
            && (!dbgNameLists[s][0].match(/^[A-Z]/g)) //DEBUG
            ) {dbgSedStrings.push("s/gl\\."+dbgNameLists[s][0]+"(/gl."+s+"(/g"); //DEBUG
        }                               //DEBUG
    }                                   //DEBUG
    // console.log(dbgSedStrings.join('\n')); //DEBUG

    // Initializations seem to pack a bit better inlined.
    // prg = gl.createProgram();
    // TODO: Multiple, switchable shaders!

    // Reuse the variable name "s"
    s = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(s, shaders[0]);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))                 //DEBUG
        alert("Vertex shader: "+ gl.getShaderInfoLog(s));             //DEBUG
    gl.attachShader(prg = gl.createProgram(), s);

    s = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(s, shaders[1]);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS))                 //DEBUG
        alert("Fragment shader: "+ gl.getShaderInfoLog(s));           //DEBUG
    gl.attachShader(prg, s);

    gl.linkProgram(prg);
    if (!gl.getProgramParameter(prg, gl.LINK_STATUS))                 //DEBUG
        alert("Link program: "+ gl.getProgramInfoLog(prg));           //DEBUG

    // Initialization code is now separated production-wise. Easier to find for editing.
    initAssets();
    // Things like scolltext could initialized in this call, also on product side:
    initDocument();


    /* Initialize song. */
    var player = new CPlayer();
    player.init(song);
    while (player.generate() < 1){};

    var audio_time = 0;

    /**
     * The onaudioprocess handler that gets called for audio output. 
     * This will add to audio_time which is much coarser than animation frame
     * rate.
     * 
     * Debug mode enables seeking and pausing with clicks by means of updating
     * audio_time and aligning actual animation time to it.
     * Debug mode outputs silence here when paused.
     */
    function audioHandler(event){
        if (dbg_paused) event.outputBuffer.getChannelData(0).fill(0); else { //DEBUG
         
        player.cpy(audio_time, 4096, event.outputBuffer.getChannelData(0));
        audio_time += 4096;

        } //DEBUG
    };


    /* Nowadays, browsers allow media only upon user event, so click pls: */
    // I used to have _document.onclick here, but Timo taught me that the
    // window itself has an onclick property, so let's use that one...
    onclick=()=>
        {
            // Accidental double clicks make it a mess; prevent that:
            onclick = null;
        /* In debug mode I want to control the fullscreen myself, so iffalse..*/
        if (false)                                     //DEBUG
            C.style.cursor='none';
        if (false)                                     //DEBUG
            C.requestFullscreen();

 	    var audioctx = new AudioContext({sampleRate:SAMPLE_RATE});
 	    var sp = audioctx.createScriptProcessor(4096, 0, 1);
 	    sp.connect(audioctx.destination);
 	    sp.onaudioprocess = audioHandler;
 	    requestAnimationFrame(loopfunc);

        /* In debug mode I want to be able to seek, so wire a callback : */
        C.addEventListener("click", function(e){             //DEBUG
            // Audio seek by just setting sample index:      //DEBUG
            audio_time =                                     //DEBUG
                e.pageX/C.width*player.ns() | 0;             //DEBUG
            // Handle seek and pausing in debug mode:        //DEBUG
            dbg_ms_offset = audio_time / SAMPLE_RATE * 1000; //DEBUG
            dbg_ms_at_last_seek = performance.now();         //DEBUG
            if (e.pageY<(C.height/2)) dbg_paused = true;     //DEBUG
            else dbg_paused = false;                         //DEBUG
        });                                                  //DEBUG

    };
}                                                    //DEBUG
catch (err)                                          //DEBUG
{                                                    //DEBUG
    alert("Error initializing: " + err.message);     //DEBUG
}                                                    //DEBUG
})();
