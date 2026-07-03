import Link from "next/link"

export default function Navbar() {
  return (
    <div className="sticky top-4 left-0 right-0 z-50 px-4 md:px-8">
      <header
        className="
          mx-auto
          max-w-2xl
          rounded-2xl
          border
          border-white/20
          bg-white/10
          dark:bg-black/20
          backdrop-blur-xl
          shadow-[0_8px_32px_0_rgba(0,0,0,0.2)]
          before:absolute
          before:inset-0
          before:-z-10
          before:rounded-2xl
          before:bg-gradient-to-b
          before:from-white/20
          before:to-transparent
          before:opacity-50
        "
      >
        <nav
          className="
            grid
            h-16
            grid-cols-3
            items-center
            px-6
          "
        >
          {/* KIRI: Tempat untuk Logo */}
          <div className="flex justify-start">
            <Link href="/" className="font-semibold text-muted-foreground hover:text-foreground">
              [Logo]
            </Link>
          </div>

          {/* TENGAH: Judul Utama */}
          <div className="flex justify-center">
            <Link
              href="/"
              className="
                text-xl
                font-bold
                whitespace-nowrap
                tracking-wide
              "
            >
              Smart Property AI
            </Link>
          </div>

          {/* KANAN: Menu About */}
          <div className="flex justify-end">
            <Link href="/about" className="font-semibold text-muted-foreground hover:text-foreground">
              About
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}