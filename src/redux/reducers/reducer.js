import * as actions from "../actions/types/buttons"
export default function reducer(state, action)
{
    // doesnt get logged
    // console.log("out of if: "+state)
    if(action.type === actions.PRESSED_START)
    {
        // doesnt get logged
        console.log("in if: "+state)
        return  state
    }
    return state
}
