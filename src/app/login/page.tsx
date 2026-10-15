import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF] text-charcoal">
      <Header />
      
      <main className="flex flex-1 items-center justify-center bg-radial-[circle_at_center,_var(--tw-gradient-stops)] from-[#F7FAF7] to-[#FFFFFF] py-20 px-4">
        <div className="w-full max-w-md rounded-3xl border border-[#EAEFEA] bg-white p-8 lg:p-10 shadow-2xl">
          <div className="mb-8 text-center">
            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold block mb-2">Private Access</span>
            <h1 className="font-serif text-3xl text-[#1C2921]">Welcome back</h1>
            <p className="mt-2 text-sm text-charcoal/70">Sign in to manage your bookings and wishlists</p>
          </div>
          
          <form className="space-y-5">
            <div>
              <label className="mb-2 block text-xs uppercase tracking-wider text-charcoal/80 font-bold">Email address</label>
              <Input type="email" placeholder="name@example.com" />
            </div>
            
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs uppercase tracking-wider text-charcoal/80 font-bold">Password</label>
                <Link href="/forgot-password" className="text-xs font-medium text-gold hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input type="password" placeholder="••••••••" />
            </div>
            
            <Button variant="default" className="mt-6 w-full rounded-full py-3.5">
              Sign in
            </Button>
          </form>
          
          <div className="my-6 flex items-center">
            <div className="flex-1 border-t border-[#EAEFEA]"></div>
            <span className="mx-4 text-xs font-medium uppercase tracking-wider text-charcoal/40">Or continue with</span>
            <div className="flex-1 border-t border-[#EAEFEA]"></div>
          </div>
          
          <Button variant="outline" className="w-full rounded-full border-[#EAEFEA] text-[#1C2921] hover:bg-[#F7FAF7]">
            <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Google
          </Button>
          
          <p className="mt-8 text-center text-sm text-charcoal/70">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-gold hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
