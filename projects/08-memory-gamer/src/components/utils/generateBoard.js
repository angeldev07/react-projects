const GRID_SIZE_BOARD = {
    four: [1,2,3,4,5,6,7,8,2,4,1,6,3,5,8,7],
    six: [6, 15, 4, 9, 3, 14, 8, 10, 2, 17, 5, 7, 11, 1, 18, 13, 12, 16, 5, 8, 3, 6, 7, 12, 4, 11, 17, 2, 18, 9, 14, 15, 1, 13, 16, 10]
}


export const generateBoard = (size) => {
    const board = size  == 4 ? GRID_SIZE_BOARD.four : GRID_SIZE_BOARD.six
    return board.sort(() => Math.random() - 0.5).map(option => ({ option, isFlipped: false }))
}

