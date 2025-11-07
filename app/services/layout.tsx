

export default function Layout({children}: {children: React.ReactNode}) {
    return (
        <main className="flex w-screen h-screen">
            <div className="flex w-fit">
                This is where the sidebar is going
            </div>
            <div className="flex w-full h-full">{children}</div>
        </main>
    )
}