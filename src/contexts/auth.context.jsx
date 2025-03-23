"use client";

import { useState, useEffect, createContext } from "react";
import UserService from "services/user.service";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import app from "configs/firebase.config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const auth = getAuth(app);

  const logout = () => {
    return signOut(auth);
  };

  const GoogleLogin = () => {
    const provider = new GoogleAuthProvider();
    // provider.setCustomParameters({ hd: "bangpaeschool.ac.th" });
    return signInWithPopup(auth, provider);
    // .then((result) => {
    //   const email = result.user.email;
    //   if (!email.endsWith("@bangpaeschool.ac.th")) {
    //     auth.signOut();
    //     throw new Error("กรุณาใช้บัญชี @bangpaeschool.ac.th ในการเข้าสู่ระบบ");
    //   }
    //   return result;
    // });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        setUser(currentUser);
        setIsLoggingIn(true);
        const { email } = currentUser;
        console.log("email", email);

        await UserService.login({ email: "bp999@bangpaeschool.ac.th" }).then(
          (res) => {
            const { user } = res.data;
            setUser((userInfo) => ({ ...userInfo, user }));
          }
        );
      }
      setIsLoggingIn(true);
    });
    return unsubscribe;
  }, [auth]);

  const authInfo = {
    user,
    isLoggingIn,
    logout,
    GoogleLogin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
