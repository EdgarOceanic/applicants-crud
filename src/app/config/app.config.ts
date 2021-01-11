export class AppConfig {

  static readonly validationPatterns = {
    names: '^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\\s]*)$',
    email: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  };

}
