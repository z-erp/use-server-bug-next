'use client';
import {TestProvider} from "@/contexts/TestContext";
import TestComponent from "@/components/test/TestComponent";
import Link from "next/link";


export default function TestPage() {
    return (
        <div>
            <h1>Test</h1>
            <TestProvider>
                <TestComponent/>
                <Link href={`/`}>Home</Link>
            </TestProvider>
        </div>
    )
}