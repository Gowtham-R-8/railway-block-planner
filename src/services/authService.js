import { mockUsers, mockAdmins } from "../data/mockUsers";

const STORAGE_KEY = "railway_logged_user";

export function loginUser(userId, password) {
  const user = mockUsers.find(
    (item) =>
      item.userId === userId &&
      item.password === password
  );

  if (!user) {
    return {
      success: false,
      message: "Invalid user ID or password"
    };
  }

  const sessionUser = {
    ...user,
    role: "user"
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(sessionUser)
  );

  return {
    success: true,
    user: sessionUser
  };
}


export function loginAdmin(adminId, password) {
  const admin = mockAdmins.find(
    (item) =>
      item.adminId === adminId &&
      item.password === password
  );

  if (!admin) {
    return {
      success: false,
      message: "Invalid admin ID or password"
    };
  }

  const sessionAdmin = {
    ...admin,
    role: "admin"
  };

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(sessionAdmin)
  );

  return {
    success: true,
    user: sessionAdmin
  };
}


export function getCurrentUser() {
  const user = localStorage.getItem(STORAGE_KEY);

  if (!user) {
    return null;
  }

  try {
    return JSON.parse(user);
  } catch {
    return null;
  }
}


export function logout() {
  localStorage.removeItem(STORAGE_KEY);
}


export function isAuthenticated() {
  return !!getCurrentUser();
}