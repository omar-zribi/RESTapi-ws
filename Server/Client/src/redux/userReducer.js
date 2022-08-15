import { ADD, DELETE, EDIT, GET, GETONE } from "./actionTypes";

const init = {
  User: null,
  loading: true,
};
export const userReducer = (state=init,{type, payload}) => {
  switch (type) {
    case GET:
      return {
        ...state,
        loading: false,
        User: payload,
      };
    case DELETE:
      return{
        ...state,loading:false,User:state.User.filter(el=>el._id!==payload)
      };
    case ADD:
      return{
        ...state,loading:false,User:[...state.User,payload]
      }
    case EDIT:
      return{
        ...state,loading:false,User:state.User.map(el=>el._id===payload._id?{...el,...payload}:el)
      };
    case GETONE:
      return{
        //d5alt lel state 7atit loading false bech ntaye7 loading... 
        //state.User.find bech nti7 beli 7achti bih 
        //3ala kol el=>el eli id mte3ou  hiya bidha el id mta3 eli 7achti bih (nzelt 3al button te3ou)
        //n5arej (find) heka el element eli esmou payload sinn n5arej el elemonet lkol 
        ...state,loading:false,User:state.User.find(el=>el._id===payload._id?payload:el)
      };


    default:
      return state;
  }
};
