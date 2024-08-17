export const getImageURL=(path) =>{
    return new URL(`/src/Assets/${path}`,import.meta.url).href;

};