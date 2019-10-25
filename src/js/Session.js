class Session {
  static has() {
    return !!sessionStorage.length;
  }

  static put(key, val) {
    sessionStorage[key] = JSON.stringify(val);
  }

  static get(key, key2) {
    if (this.has()) {
      if (key2 === undefined) {
        return JSON.parse(sessionStorage[key]);
      }

      return JSON.parse(sessionStorage[key])[key2];
    }

    return null;
  }
}

export default Session;
