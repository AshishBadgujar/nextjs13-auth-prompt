"use client"

import Image from "next/image"
import Link from "next/link"
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useState, useEffect } from "react";

export default function Nav() {
    const { data: session } = useSession()

    const [providers, setProviders] = useState(null)
    useEffect(() => {
        const setAuthProviders = async () => {
            const response = await getProviders()
            setProviders(response)
        }
        setAuthProviders()
    }, [])
    return (
        <nav >
            <Link href='/' >
                <p >Promptopia</p>
            </Link>

            <div >
                {session?.user ? (
                    <div >
                        <Link href='/create-prompt' >Create Post</Link>
                        <button type="button" onClick={signOut} >Sign Out</button>
                        <Link href='/profile'>
                            <Image
                                src={session?.user.image}
                                width={37}
                                height={37}

                                alt="profile"
                            />
                        </Link>
                    </div>
                ) : (
                    <>
                        {providers &&
                            Object.values(providers).map((provider) => (
                                <button type="button" key={provider.name} onClick={() => signIn(provider.id)} >Sign In</button>
                            ))
                        }
                    </>
                )}
            </div>

        </nav>
    )
}
