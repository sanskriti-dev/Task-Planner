
export const saveBoardsToLS = (boards) => {
    localStorage.setItem('boards', JSON.stringify(boards));
}

export const getBoardsFromLS = () => {
    let boards = localStorage.getItem('boards');
    return JSON.parse(boards)
};
