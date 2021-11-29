var VSHADER_SOURCE =
    'attribute vec4 a_Position;\n' +
    'attribute float a_PointSize;\n' +
    'void main() {\n' +
    '  gl_Position = a_Position;\n' +
    '  gl_PointSize = a_PointSize;\n' +
    '}\n';
var FSHADER_SOURCE =
    'precision mediump float;\n' +
    'uniform vec4 u_Color;\n' +
    'void main() {\n' +
    '  gl_FragColor = u_Color;\n' +
    '}\n';

function main() {
    var canvas = document.getElementById('webgl');
    var gl = getWebGLContext(canvas);
    initShaders(gl, VSHADER_SOURCE, FSHADER_SOURCE);
    var a_PointSize = gl.getAttribLocation(gl.program, 'a_PointSize');
    gl.vertexAttrib1f(a_PointSize, 20.0);
    var a_Position = gl.getAttribLocation(gl.program, 'a_Position');
    //gl.vertexAttrib3f(a_Position, 0.0, 0.0, 0.0);
    var u_Color = gl.getUniformLocation(gl.program, 'u_Color');
    gl.uniform4f(u_Color, 1.0, 1.0, 0.0, 1.0);
    canvas.onmousedown = function(ev) { // đọc tài liệu hàm ẩn danh trong ebook
        click(ev, gl, canvas, a_Position);
    };
    gl.clearColor(0.0, 0.0, 1.0, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    //draw?
    //gl.drawArrays(gl.POINTS, 0, 1);
}
var g_points = [];

function click(ev, gl, canvas, a_Position) {
    var x = ev.clientX;
    var y = ev.clientY;
    //đổi giá trị x, y trong HTĐ window sang HTĐ webGL
    var rect = ev.target.getBoundingClientRect();
    x = ((x - rect.left) - canvas.width / 2) / (canvas.width / 2);
    //x= ((80-10) - 200)/200 = -0.65
    y = (canvas.height / 2 - (y - rect.top)) / (canvas.height / 2);
    //y = (200 - (50-10))/200 = 0.8
    g_points.push(x);
    g_points.push(y);
    gl.clear(gl.COLOR_BUFFER_BIT);
    var len = g_points.length;
    if (len < 5) {
        for (var i = 0; i < len; i += 2) {
            gl.vertexAttrib3f(a_Position, g_points[i], g_points[i + 1], 0.0);
            gl.drawArrays(gl.POINTS, 0, 1);
        }
    } else {
        gl.clearColor(1.0, 1.0, 0.0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
    }

}