import AuhContext from "@/contexts/AuthContext";
import useAuth from "@/hooks/useAuth";

export default function AuthProvider({ children }) {
  const { user, isLoading, isLoggedIn, login, logout } = useAuth();

  return (
    <AuhContext.Provider value={{ user, isLoading, isLoggedIn, login, logout }}>
      {children}
    </AuhContext.Provider>
  );
}
