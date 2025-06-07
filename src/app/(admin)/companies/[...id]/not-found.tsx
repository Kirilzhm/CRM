import React from "react";
import Link from "next/link";

export interface NotFound {}

export default function NotFound({}: NotFound) {
    return (
        <div>
            <p>Could not found company</p>
            <Link href="/companies" className="text-blue-500">Back to companies</Link>
        </div>
    )
}