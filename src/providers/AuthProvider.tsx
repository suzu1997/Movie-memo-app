import { createContext, FC, useEffect, useState } from 'react';
import { auth } from 'src/firebase/index';

export const AuthContext = createContext({
  currentUser: undefined,
  currentUserUid: undefined,
});

export const AuthProvider: FC = (props) => {
  const { children } = props;
  const [currentUser, setCurrentUser] = useState(undefined);
  const [currentUserUid, setCurrentUserUid] = useState(undefined);

  useEffect(() => {
    // ログイン状態が変化するとfirebaseのauthメソッドを呼び出す
    auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
        setCurrentUserUid(user.uid);
      } else {
        setCurrentUser(undefined);
        setCurrentUserUid(undefined);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, currentUserUid }}>
      {children}
    </AuthContext.Provider>
  );
};
