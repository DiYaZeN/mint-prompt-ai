"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders, ClientSafeProvider, LiteralUnion } from "next-auth/react";
import { BuiltInProviderType } from "next-auth/providers";

const Nav = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState<null | Record<LiteralUnion<BuiltInProviderType, string>, ClientSafeProvider>>(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);
  
  return (
    <nav className="flex-between  w-full mb-16 pt-3 ">
      <Link href="" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo1.png"
          alt="logo"
          className="object-contain"
          width={140}
          height={140}
        />
      </Link>

      {/* Desktop nav */}

      <div className="sm:flex hidden">
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5 ">
            <Link href="/creat-prompt" className="black_btn">
              Create a Post
            </Link>

            {/* onClick={signOut} */}
            <button type="button" className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image
                className="rounded-full"
                src="/assets/images/minol.png"
                alt="profile"
                width={37}
                height={37}
              />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}

        </div>

        {/* Mobile nav  */}

        <div className="sm:hidden flex relative">
          {isUserLoggedIn ? (
            <div className="flex ">
              <Image
                className="rounded-full"
                src="/assets/images/minol.png"
                alt="profile"
                width={37}
                height={37}
                onClick={() => setToggleDropdown((prev) => !prev)}
              />

              {toggleDropdown && (
                <div className="dropdown">
                  <Link
                    href="/profile"
                    className="dropdown_link"
                    onClick={() => setToggleDropdown(false)}
                  >
                    My Profile{" "}
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => {
                      signIn(provider.id);
                    }}
                    className="black_btn"
                  >
                    Sign in
                  </button>
                ))}
            </>
          )}
        </div>
  
    </nav>
  );
};

export default Nav;
