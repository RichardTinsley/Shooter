export function create2DArray(tileMap, size){
    const TileMapArray = [];
    for (let i = 0; i < tileMap.length; i+= size)
        TileMapArray.push(tileMap.slice(i, i + size));
    return TileMapArray;
}