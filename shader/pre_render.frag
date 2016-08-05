varying vec4 position;

uniform mat4 unif_matrix;
uniform sampler2D tex;
uniform sampler2D logo_texture;

const float M_PI = 3.1415926535;
const float image_r = 0.85;
const vec2 center1 = vec2(0.50, 0.50);

void main(void) {
        float u = 0.0;
        float v = 0.0;
        vec4 pos = unif_matrix * position;
        float roll = asin(pos.y);
        float yaw = atan(pos.x, pos.z);
        float r = (M_PI / 2.0 - roll) / M_PI;
        if(r < 0.6) {
	        float yaw2 = yaw;
	        u = image_r * r * cos(yaw2) + center1.x;
	        v = image_r * r * sin(yaw2) + center1.y;
	        //gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
	        gl_FragColor = texture2D(tex, vec2(u, v));
	    } else {
	    	u = position.x / position.y * 0.2;
	    	v = position.z / position.y * 0.2;
	    	u = (u + 1.0) / 2.0;
	    	v = (v + 1.0) / 2.0;
	        gl_FragColor = texture2D(logo_texture, vec2(u, v));
	    }
}
