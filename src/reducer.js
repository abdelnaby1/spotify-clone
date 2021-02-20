export const initialState = {
    user:null,
    playlists:[],
    playing:false,
    item:null,
    discover_weekly:null,
    // token:"BQBoyglLW3mKiKa13SM1k1o7hZEMVAlklApXUhPL_anrGUr5XEzWk3skItKz7akKDHdZPOjEz1y_bk4JfE0BjK8EJmIAyXy3JdMV5SOi_HRlhiz406KmYhUOQatHn1gOPFvQVmcUf7d0UPQroVvBFSyg0Fr34dbT_oOfhCVlb45JIwDF6VMvAYVM"
}

const reducer = (state,action) => {
    console.log(action);
    

    switch (action.type) {
        case 'SET_USER':
            return{
                ...state,
                user:action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token:action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists:action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly:action.discover_weekly
            };

            
        default:
            return state;
    }
}
export default reducer