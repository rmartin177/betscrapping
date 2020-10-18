import React from 'react';
import Link from "next/link";

const Navigation = () => {
    return (
        <nav>
            <Link href="/">Inicio</Link>
            <Link href="/">Historial</Link>
        </nav>
    )
}

export default Navigation;