import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="flex">
            <div className="justify-center">
                <h1>On Building</h1>
                <p>try again another time</p>
            </div>
            <a className="btn btn-primary" href="#/projects/bullying">click meee</a>
        </div>
    );
}