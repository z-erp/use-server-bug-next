'use client';
import {useTest} from "@/contexts/TestContext";

export default function TestComponent() {
    const {testData, dispatch} = useTest();
    return (
        <div>
            <h2>Test component</h2>
            <p>Test data: {testData.count}</p>
            <button onClick={() => dispatch({type: 'INCREMENT'})}>Increment</button>
        </div>
    )
}