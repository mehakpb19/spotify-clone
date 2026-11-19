"use client";
export default function Btnnn({innercontext,css}: {innercontext: React.ReactNode | string, css: string}) {
    return (
        <div className={css}>
            {innercontext}
        </div>
    );
}