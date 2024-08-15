export const getImageURL=(path) =>{
    return new URL(`/Assets/${path}`,import.meta.url).href;

};