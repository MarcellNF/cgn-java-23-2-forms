import './App.css'
import {Visitor} from "./Visitor.ts";
import {ChangeEvent, FormEvent, useState} from "react";

function App() {

    const visitor: Visitor = {
        id: "1",
        firstName: "Sara",
        lastName: "Doe",
    }

    const [visitors, setVisitors] = useState<Visitor[]>([visitor])
    const [newVisitor, setNewVisitor] = useState<Visitor>({
        id: "",
        firstName: "",
        lastName: "",
    })

    function handleNewVisitor(event: ChangeEvent<HTMLInputElement>) {
        const id = Math.random().toString(36).substr(2, 9)
        setNewVisitor({
            ...newVisitor,
            id,
            [event.target.name]: event.target.value
        })
    }

    function addVisitor(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setVisitors([...visitors, newVisitor])
        setNewVisitor({
            id: "",
            "firstName": "",
            "lastName": "",
        })
    }

    return (
        <>
            <form onSubmit={addVisitor}>
                <label htmlFor="firstName">First Name</label>
                <input type="text" value={newVisitor.firstName} id="firstName" onChange={handleNewVisitor} name="firstName"/>
                <br/>
                <label htmlFor="lastName">Last Name</label>
                <input type="text" id="lastName" value={newVisitor.lastName} onChange={handleNewVisitor} name="lastName"/>
                <br/>
                <button type="submit">Add Visitor</button>
            </form>
            {
                visitors.map((visitor) => {
                    return (
                        <div key={visitor.id}>
                            <p>{visitor.firstName} {visitor.lastName}</p>
                        </div>
                    )
                })
            }
        </>
    )
}

export default App
