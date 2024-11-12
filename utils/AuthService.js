class AuthService {
    login(role) {
      localStorage.setItem("userRole", role);
    }
  
    logout() {
      localStorage.removeItem("userRole");
    }
  
    getRole() {
      return localStorage.getItem("userRole");
    }
  }
  
  export default new AuthService();
  