import { proxy } from "valtio";

const state = proxy({
    // are we on the home page?
    intro: true,
    // default color
    color: "#5c35a1",
    // default logo on shirt before customized
    logoDecal: "./threejs.png",
    // default texture on shirt before customized
    fullDecal: "./threejs.png",
    // is logo on shirt?
    isLogoTexture: true,
    // is texture on shirt?
    isFullTexture: false,
});

export default state;