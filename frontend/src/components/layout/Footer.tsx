export default function Footer() {
  return (
    <footer
      className="
        border-t
        py-10
      "
    >
      <div
        className="
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          gap-4
          px-6
          text-center
        "
      >
        <p className="text-muted-foreground">
          Built with Next.js, FastAPI, Scikit-learn,
          and Random Forest Regression.
        </p>

        <p
          className="
            text-sm
            text-muted-foreground
          "
        >
          © 2026 Firas | Smart Property AI
        </p>
      </div>
    </footer>
  )
}