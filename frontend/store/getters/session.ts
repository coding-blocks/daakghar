export const getUser = () => (state: any) => {
    console.log("state = ",state)
    return state.session.user
};
//FIXME: any type of state
