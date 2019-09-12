export const isClient = new Function('try {return this===window;}catch(e){ return false;}') // tests if global scope is binded to "window" if(isBrowser()) console.log("running under browser");

export const isServer = new Function('try {return this===global;}catch(e){return false;}') // tests if global scope is binded to "global" if(isNode()) console.log("running under node.js");

export const isProduction = process.env.NODE_ENV === 'production'
