import Settings from '../app';

test('should return the default settings', () => {
    const mySettings = new Settings;
    
    expect(mySettings.settings).toEqual(mySettings.defaultSettings);
});

test('should return the user settings', () => {
    const mySettings = new Settings;
    mySettings.setUserSettings('theme', 'gray');

    const result = new Map([
        ['theme', 'gray'],
        ['music', 'trance'],
        ['difficulty', 'easy']
    ]);
    
    expect(mySettings.settings).toEqual(result);
});

test('should throw the error "Таких настроек не существует"', () => {
    const mySettings = new Settings;
    
    expect(() => mySettings.setUserSettings('key', 'value')).toThrow('Таких настроек не существует');
});




