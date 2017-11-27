class Session {
  static has() {
    return !!sessionStorage.length;
  }

  static put(key, val) {
    sessionStorage[key] = JSON.stringify(val);
  }

  static get(key) {
    if (this.has()) {
      return JSON.parse(sessionStorage[key]);
    }
    return null;
  }
}

export default Session;