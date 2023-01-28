import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";

const initialState = {
	dataMahasiswa: [],
};

const rootReducer = (state = initialState, action) => {
	if (action.type === "getmhs") {
		return {
			...state,
			dataMahasiswa: action.payload,
		};
	}

	return state;
};

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export async function getData(dispatch, getState) {
	const res = await fetch("http://localhost:3000/mahasiswa/");
	const data = await res.json();

	dispatch({ type: "getmhs", payload: data });
}

export default store;
