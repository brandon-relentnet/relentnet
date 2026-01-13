import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/portal')({
  head: () => ({
    meta: [
      { title: 'Client Portal | RelentNet' },
      {
        name: 'description',
        content: 'Secure client access for RelentNet services.',
      },
    ],
  }),
  component: Portal,
})

function Portal() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans selection:bg-[#E1BE4C] selection:text-black overflow-hidden flex flex-col justify-center items-center px-4">
      <div className="w-full max-w-md bg-neutral-900/30 border border-white/5 p-8 md:p-12 backdrop-blur-sm animate-fade-in-up">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            Client <span className="italic text-[#E1BE4C]">Access</span>
          </h1>
          <p className="text-neutral-400 text-sm font-light">
            Enter your credentials to manage your account.
          </p>
        </div>

        <form
          method="post"
          action="https://clients.relentnet.com/dologin.php"
          className="space-y-6"
        >
          <div className="space-y-2">
            <label
              htmlFor="username"
              className="text-xs uppercase tracking-widest text-neutral-500"
            >
              Email Address
            </label>
            <input
              type="text"
              name="username"
              id="username"
              size={50}
              className="w-full bg-black/20 border border-white/10 p-3 text-sm focus:border-[#E1BE4C] focus:outline-hidden transition-colors text-white autofill:bg-neutral-900"
            />
          </div>

          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-xs uppercase tracking-widest text-neutral-500"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              size={20}
              autoComplete="off"
              className="w-full bg-black/20 border border-white/10 p-3 text-sm focus:border-[#E1BE4C] focus:outline-hidden transition-colors text-white"
            />
          </div>

          <div className="pt-4">
            <input
              type="submit"
              value="Login"
              className="w-full bg-[#E1BE4C] text-black font-bold uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors duration-300 cursor-pointer"
            />
          </div>
        </form>

        <div className="mt-8 text-center">
          <a
            href="https://clients.relentnet.com/pwreset.php"
            className="text-xs text-neutral-500 hover:text-[#E1BE4C] transition-colors uppercase tracking-widest"
          >
            Forgot Password?
          </a>
        </div>
      </div>
    </div>
  )
}
