function main() {
    var canvas = document.getElementById("myCanvas");
    var gl = canvas.getContext("webgl");

    // Left 
    const leaf_L = {
        Batang : [0.51, 0.870, 0.400],
        Daun : [0.0315, 0.500, 0.261],
        // Left Leaf Builder
        titik_1L : [-0.525, 0.40],
        titik_2L : [-0.475, 0.40],
        titik_3L : [-0.52, 0.27],
        titik_4L : [-0.46, 0.27],
        titik_5L : [-0.71, 0.006],
        titik_6L : [-0.43, -0.06],
        titik_7L : [-0.47, 0.06],
        titik_8L : [-0.29, 0.006],
        titik_9L : [-0.77, -0.29],
        titik_10L : [-0.53, -0.009],
        titik_11L : [-0.57, -0.39],
        titik_12L : [-0.25, -0.29],
        titik_13L : [-0.32, -0.11],
        titik_14L : [-0.61, -0.82],
        titik_15L : [-0.55, -0.75],
        titik_16L : [-0.58, -0.35],
        titik_17L : [-0.73, -0.57],
        titik_18L  : [-0.50, -0.57],
        titik_19L : [-0.27, -0.57],
        titik_20L : [-0.27, -0.57],
        titik_21L : [-0.53, -0.01],
        titik_22L : [-0.52, -0.60],
        titik_23L : [-0.65, -0.76],
        titik_24L : [-0.35, -0.76],
        titik_25L : [-0.50, -0.96]
    }

    // Right
    const leaf_R = {
        Batang : [0.51, 0.870, 0.400],
        Daun : [0.0315, 0.500, 0.261],
        // Right Leaf builder
        titik_1R : [-0.525, 0.40],
        titik_2R : [-0.475, 0.40],
        titik_3R : [-0.52, 0.27],
        titik_4R : [-0.46, 0.27],
        titik_5R : [-0.71, 0.006],
        titik_6R : [-0.43, -0.06],
        titik_7R : [-0.47, 0.06],
        titik_8R : [-0.29, 0.006],
        titik_9R : [-0.77, -0.29],
        titik_10R : [-0.53, -0.009],
        titik_11R : [-0.57, -0.39],
        titik_12R : [-0.25, -0.29],
        titik_13R : [-0.32, -0.11],
        titik_14R : [-0.61, -0.82],
        titik_15R : [-0.55, -0.75],
        titik_16R : [-0.58, -0.35],
        titik_17R : [-0.73, -0.57],
        titik_18R  : [-0.50, -0.57],
        titik_19R : [-0.27, -0.57],
        titik_20R : [-0.27, -0.57],
        titik_21R : [-0.53, -0.01],
        titik_22R : [-0.52, -0.60],
        titik_23R : [-0.65, -0.76],
        titik_24R : [-0.35, -0.76],
        titik_25R : [-0.50, -0.96]
    }

    const vertices = [
        // Left Batang
        ...leaf_L.titik_1L, ...leaf_L.Batang,
        ...leaf_L.titik_2L, ...leaf_L.Batang,
        ...leaf_L.titik_4L, ...leaf_L.Batang,
        ...leaf_L.titik_1L, ...leaf_L.Batang,
        ...leaf_L.titik_3L, ...leaf_L.Batang,
        ...leaf_L.titik_4L, ...leaf_L.Batang, // 30
        
        ...leaf_L.titik_3L, ...leaf_L.Batang,
        ...leaf_L.titik_4L, ...leaf_L.Batang,
        ...leaf_L.titik_7L, ...leaf_L.Batang,
        ...leaf_L.titik_3L, ...leaf_L.Batang,
        ...leaf_L.titik_6L, ...leaf_L.Batang,
        ...leaf_L.titik_7L, ...leaf_L.Batang, // 60
        
        ...leaf_L.titik_6L, ...leaf_L.Batang,
        ...leaf_L.titik_7L, ...leaf_L.Batang,
        ...leaf_L.titik_11L, ...leaf_L.Batang,
        ...leaf_L.titik_6L, ...leaf_L.Batang,
        ...leaf_L.titik_10L, ...leaf_L.Batang,
        ...leaf_L.titik_11L, ...leaf_L.Batang, // 90
        
        ...leaf_L.titik_6L, ...leaf_L.Batang,
        ...leaf_L.titik_10L, ...leaf_L.Batang,
        ...leaf_L.titik_17L, ...leaf_L.Batang,
        ...leaf_L.titik_10L, ...leaf_L.Batang,
        ...leaf_L.titik_13L, ...leaf_L.Batang,
        ...leaf_L.titik_14L, ...leaf_L.Batang, // 120

        ...leaf_L.titik_10L, ...leaf_L.Batang,
        ...leaf_L.titik_11L, ...leaf_L.Batang,
        ...leaf_L.titik_14L, ...leaf_L.Batang,
        ...leaf_L.titik_13L, ...leaf_L.Batang,
        ...leaf_L.titik_15L, ...leaf_L.Batang,
        ...leaf_L.titik_16L, ...leaf_L.Batang, // 150

        ...leaf_L.titik_13L, ...leaf_L.Batang,
        ...leaf_L.titik_14L, ...leaf_L.Batang,
        ...leaf_L.titik_16L, ...leaf_L.Batang,
        ...leaf_L.titik_14L, ...leaf_L.Batang,
        ...leaf_L.titik_16L, ...leaf_L.Batang,
        ...leaf_L.titik_20L, ...leaf_L.Batang, // 180

        ...leaf_L.titik_15L, ...leaf_L.Batang,
        ...leaf_L.titik_18L, ...leaf_L.Batang,
        ...leaf_L.titik_19L, ...leaf_L.Batang,
        ...leaf_L.titik_15L, ...leaf_L.Batang,
        ...leaf_L.titik_16L, ...leaf_L.Batang,
        ...leaf_L.titik_19L, ...leaf_L.Batang, // 210

        ...leaf_L.titik_18L, ...leaf_L.Batang,
        ...leaf_L.titik_23L, ...leaf_L.Batang,
        ...leaf_L.titik_21L, ...leaf_L.Batang,
        ...leaf_L.titik_18L, ...leaf_L.Batang,
        ...leaf_L.titik_21L, ...leaf_L.Batang,
        ...leaf_L.titik_22L, ...leaf_L.Batang, // 240

        ...leaf_L.titik_18L, ...leaf_L.Batang,
        ...leaf_L.titik_19L, ...leaf_L.Batang,
        ...leaf_L.titik_22L, ...leaf_L.Batang,
        ...leaf_L.titik_21L, ...leaf_L.Batang,
        ...leaf_L.titik_22L, ...leaf_L.Batang,
        ...leaf_L.titik_25L, ...leaf_L.Batang, // 270
        
        // Left daun
        ...leaf_L.titik_5L, ...leaf_L.Daun,
        ...leaf_L.titik_6L, ...leaf_L.Daun,
        ...leaf_L.titik_9L, ...leaf_L.Daun,
        ...leaf_L.titik_3L, ...leaf_L.Daun,
        ...leaf_L.titik_5L, ...leaf_L.Daun,
        ...leaf_L.titik_6L, ...leaf_L.Daun, // 300
        
        ...leaf_L.titik_4L, ...leaf_L.Daun,
        ...leaf_L.titik_7L, ...leaf_L.Daun,
        ...leaf_L.titik_8L, ...leaf_L.Daun,
        ...leaf_L.titik_7L, ...leaf_L.Daun,
        ...leaf_L.titik_8L, ...leaf_L.Daun,
        ...leaf_L.titik_12L, ...leaf_L.Daun, // 330

        ...leaf_L.titik_6L, ...leaf_L.Daun,
        ...leaf_L.titik_9L, ...leaf_L.Daun,
        ...leaf_L.titik_17L, ...leaf_L.Daun,
        ...leaf_L.titik_10L, ...leaf_L.Daun,
        ...leaf_L.titik_13L, ...leaf_L.Daun,
        ...leaf_L.titik_17L, ...leaf_L.Daun, // 360
        
        ...leaf_L.titik_17L, ...leaf_L.Daun,
        ...leaf_L.titik_13L, ...leaf_L.Daun,
        ...leaf_L.titik_15L, ...leaf_L.Daun,
        ...leaf_L.titik_11L, ...leaf_L.Daun,
        ...leaf_L.titik_20L, ...leaf_L.Daun,
        ...leaf_L.titik_14L, ...leaf_L.Daun, // 390

        ...leaf_L.titik_7L, ...leaf_L.Daun,
        ...leaf_L.titik_20L, ...leaf_L.Daun,
        ...leaf_L.titik_11L, ...leaf_L.Daun,
        ...leaf_L.titik_7L, ...leaf_L.Daun,
        ...leaf_L.titik_12L, ...leaf_L.Daun,
        ...leaf_L.titik_20L, ...leaf_L.Daun, // 420

        ...leaf_L.titik_17L, ...leaf_L.Daun,
        ...leaf_L.titik_15L, ...leaf_L.Daun,
        ...leaf_L.titik_18L, ...leaf_L.Daun,
        ...leaf_L.titik_16L, ...leaf_L.Daun,
        ...leaf_L.titik_19L, ...leaf_L.Daun,
        ...leaf_L.titik_20L, ...leaf_L.Daun, // 450

        ...leaf_L.titik_17L, ...leaf_L.Daun,
        ...leaf_L.titik_18L, ...leaf_L.Daun,
        ...leaf_L.titik_23L, ...leaf_L.Daun,
        ...leaf_L.titik_21L, ...leaf_L.Daun,
        ...leaf_L.titik_23L, ...leaf_L.Daun,
        ...leaf_L.titik_25L, ...leaf_L.Daun, // 480

        ...leaf_L.titik_22L, ...leaf_L.Daun,
        ...leaf_L.titik_24L, ...leaf_L.Daun,
        ...leaf_L.titik_25L, ...leaf_L.Daun,
        ...leaf_L.titik_19L, ...leaf_L.Daun,
        ...leaf_L.titik_24L, ...leaf_L.Daun,
        ...leaf_L.titik_22L, ...leaf_L.Daun, // 510

        ...leaf_L.titik_19L, ...leaf_L.Daun,
        ...leaf_L.titik_20L, ...leaf_L.Daun,
        ...leaf_L.titik_24L, ...leaf_L.Daun, // 525
        
        // Right Batang
        ...leaf_R.titik_1R, ...leaf_R.Batang,
        ...leaf_R.titik_2R, ...leaf_R.Batang,
        ...leaf_R.titik_4R, ...leaf_R.Batang,
        ...leaf_R.titik_1R, ...leaf_R.Batang,
        ...leaf_R.titik_3R, ...leaf_R.Batang,
        ...leaf_R.titik_4R, ...leaf_R.Batang, // 555
        
        ...leaf_R.titik_3R, ...leaf_R.Batang,
        ...leaf_R.titik_4R, ...leaf_R.Batang,
        ...leaf_R.titik_7R, ...leaf_R.Batang,
        ...leaf_R.titik_3R, ...leaf_R.Batang,
        ...leaf_R.titik_6R, ...leaf_R.Batang,
        ...leaf_R.titik_7R, ...leaf_R.Batang, // 585
        
        ...leaf_R.titik_6R, ...leaf_R.Batang,
        ...leaf_R.titik_7R, ...leaf_R.Batang,
        ...leaf_R.titik_11R, ...leaf_R.Batang,
        ...leaf_R.titik_6R, ...leaf_R.Batang,
        ...leaf_R.titik_10R, ...leaf_R.Batang,
        ...leaf_R.titik_11R, ...leaf_R.Batang, // 615
        
        ...leaf_R.titik_6R, ...leaf_R.Batang,
        ...leaf_R.titik_10R, ...leaf_R.Batang,
        ...leaf_R.titik_17R, ...leaf_R.Batang,
        ...leaf_R.titik_10R, ...leaf_R.Batang,
        ...leaf_R.titik_13R, ...leaf_R.Batang,
        ...leaf_R.titik_14R, ...leaf_R.Batang, // 645

        ...leaf_R.titik_10R, ...leaf_R.Batang,
        ...leaf_R.titik_11R, ...leaf_R.Batang,
        ...leaf_R.titik_14R, ...leaf_R.Batang,
        ...leaf_R.titik_13R, ...leaf_R.Batang,
        ...leaf_R.titik_15R, ...leaf_R.Batang,
        ...leaf_R.titik_16R, ...leaf_R.Batang, // 675

        ...leaf_R.titik_13R, ...leaf_R.Batang,
        ...leaf_R.titik_14R, ...leaf_R.Batang,
        ...leaf_R.titik_16R, ...leaf_R.Batang,
        ...leaf_R.titik_14R, ...leaf_R.Batang,
        ...leaf_R.titik_16R, ...leaf_R.Batang,
        ...leaf_R.titik_20R, ...leaf_R.Batang, // 705

        ...leaf_R.titik_15R, ...leaf_R.Batang,
        ...leaf_R.titik_18R, ...leaf_R.Batang,
        ...leaf_R.titik_19R, ...leaf_R.Batang,
        ...leaf_R.titik_15R, ...leaf_R.Batang,
        ...leaf_R.titik_16R, ...leaf_R.Batang,
        ...leaf_R.titik_19R, ...leaf_R.Batang, // 735

        ...leaf_R.titik_18R, ...leaf_R.Batang,
        ...leaf_R.titik_23R, ...leaf_R.Batang,
        ...leaf_R.titik_21R, ...leaf_R.Batang,
        ...leaf_R.titik_18R, ...leaf_R.Batang,
        ...leaf_R.titik_21R, ...leaf_R.Batang,
        ...leaf_R.titik_22R, ...leaf_R.Batang, // 765

        ...leaf_R.titik_18R, ...leaf_R.Batang,
        ...leaf_R.titik_19R, ...leaf_R.Batang,
        ...leaf_R.titik_22R, ...leaf_R.Batang,
        ...leaf_R.titik_21R, ...leaf_R.Batang,
        ...leaf_R.titik_22R, ...leaf_R.Batang,
        ...leaf_R.titik_25R, ...leaf_R.Batang, // 795
        
        // Right Daun
        ...leaf_R.titik_5R, ...leaf_R.Daun,
        ...leaf_R.titik_6R, ...leaf_R.Daun,
        ...leaf_R.titik_9R, ...leaf_R.Daun,
        ...leaf_R.titik_3R, ...leaf_R.Daun,
        ...leaf_R.titik_5R, ...leaf_R.Daun,
        ...leaf_R.titik_6R, ...leaf_R.Daun, // 825
        
        ...leaf_R.titik_4R, ...leaf_R.Daun,
        ...leaf_R.titik_7R, ...leaf_R.Daun,
        ...leaf_R.titik_8R, ...leaf_R.Daun,
        ...leaf_R.titik_7R, ...leaf_R.Daun,
        ...leaf_R.titik_8R, ...leaf_R.Daun,
        ...leaf_R.titik_12R, ...leaf_R.Daun, // 855

        ...leaf_R.titik_6R, ...leaf_R.Daun,
        ...leaf_R.titik_9R, ...leaf_R.Daun,
        ...leaf_R.titik_17R, ...leaf_R.Daun,
        ...leaf_R.titik_10R, ...leaf_R.Daun,
        ...leaf_R.titik_13R, ...leaf_R.Daun,
        ...leaf_R.titik_17R, ...leaf_R.Daun, // 885
        
        ...leaf_R.titik_17R, ...leaf_R.Daun,
        ...leaf_R.titik_13R, ...leaf_R.Daun,
        ...leaf_R.titik_15R, ...leaf_R.Daun,
        ...leaf_R.titik_11R, ...leaf_R.Daun,
        ...leaf_R.titik_20R, ...leaf_R.Daun,
        ...leaf_R.titik_14R, ...leaf_R.Daun, // 915

        ...leaf_R.titik_7R, ...leaf_R.Daun,
        ...leaf_R.titik_20R, ...leaf_R.Daun,
        ...leaf_R.titik_11R, ...leaf_R.Daun,
        ...leaf_R.titik_7R, ...leaf_R.Daun,
        ...leaf_R.titik_12R, ...leaf_R.Daun,
        ...leaf_R.titik_20R, ...leaf_R.Daun, // 945

        ...leaf_R.titik_17R, ...leaf_R.Daun,
        ...leaf_R.titik_15R, ...leaf_R.Daun,
        ...leaf_R.titik_18R, ...leaf_R.Daun,
        ...leaf_R.titik_16R, ...leaf_R.Daun,
        ...leaf_R.titik_19R, ...leaf_R.Daun,
        ...leaf_R.titik_20R, ...leaf_R.Daun, // 975

        ...leaf_R.titik_17R, ...leaf_R.Daun,
        ...leaf_R.titik_18R, ...leaf_R.Daun,
        ...leaf_R.titik_23R, ...leaf_R.Daun,
        ...leaf_R.titik_21R, ...leaf_R.Daun,
        ...leaf_R.titik_23R, ...leaf_R.Daun,
        ...leaf_R.titik_25R, ...leaf_R.Daun, // 1005

        ...leaf_R.titik_22R, ...leaf_R.Daun,
        ...leaf_R.titik_24R, ...leaf_R.Daun,
        ...leaf_R.titik_25R, ...leaf_R.Daun,
        ...leaf_R.titik_19R, ...leaf_R.Daun,
        ...leaf_R.titik_24R, ...leaf_R.Daun,
        ...leaf_R.titik_22R, ...leaf_R.Daun, // 1035

        ...leaf_R.titik_19R, ...leaf_R.Daun,
        ...leaf_R.titik_20R, ...leaf_R.Daun,
        ...leaf_R.titik_24R, ...leaf_R.Daun, // 1050
        
    ]
    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard
    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);


    //Kecepatan sesuai 0.0xxx dengan xxx merupakan
    //NRP yaitu 039
    var speed = 0.0039;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (vertices[626] < -1.0 || vertices[701] > 1.0) {
            speed = speed * -1;
        }

        for (let i = 526; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }




    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(1.0, 1.0, 1.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 210;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
}