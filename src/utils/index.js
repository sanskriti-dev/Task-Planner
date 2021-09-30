export const getUserInitials = (user) => {
    let first, second = null;
    if(user.firstName) {
        first = user.firstName[0];
    }
    if(user.lastName) {
        second = user.lastName[0];
    }
    return [first, second];
}