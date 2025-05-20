import { AppRouter } from "./router/AppRouter"
import { AuthProvider } from "./auth"

export const HeroApp = () => {
  return (
    <>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  )
}
