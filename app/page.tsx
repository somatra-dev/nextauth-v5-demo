import Link from "next/link"

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="space-x-3">
        <Link href="/signin" className="underline">
          Sign in
        </Link>
        <Link href="/dashboard" className="underline">
          Go to dashboard
        </Link>
      </div>
    </main>
  )
}
