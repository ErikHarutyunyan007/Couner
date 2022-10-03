import { Component } from "react";
import Counter from "../Counter";
const users = ['userN1','userN2','userN3','userN4','userN5'];

class List extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
        <ul>
            {users.map((user, index) => <Counter user={user} key={index} />)}
        </ul>
        )
    }
};

export default List;