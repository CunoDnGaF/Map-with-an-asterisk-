export default class Settings {
    constructor () {
      this.defaultSettings = new Map([
        ['theme', 'dark'],
        ['music', 'trance'],
        ['difficulty', 'easy']
      ]);

      this.userSettings = new Map();
    }

    setUserSettings(key, value) {
      const availableSettings = new Map([
        ['theme', ['dark', 'light', 'gray']],
        ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
        ['difficulty', ['easy', 'normal', 'hard', 'nightmare']]
      ]);

      if(!availableSettings.has(key) || !availableSettings.get(key).includes(value)) {
        throw new Error('Таких настроек не существует');
    }

      this.userSettings.set(key, value);
  }

    get settings() {
      let finalSettings = new Map();

      this.defaultSettings.forEach((value, key) => {
        if(this.userSettings.has(key)) {
          finalSettings.set(key, this.userSettings.get(key));
        } else {
          finalSettings.set(key, value);
        }
      });

      return finalSettings;
    }
}