import chalk from 'chalk';
import dedent from 'dedent-js';

const tempKelvenToCelsius = (temp) => {
    return (temp - 273.15).toFixed(0);
}

const printError = (error) => {
    console.log(`${chalk.bgRed('ERROR')} ${error}`);
}

const printSuccess = (message) => {
    console.log(`${chalk.bgGreen('SUCCESS')} ${message}`);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan('HELP')}
        Без параметров - вывод погоды
        -s [CITY] для установки города
        -h для вывода помощи
        -t [API_KEY] для сохранения токена`
    );
}

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} Погода в городе ${res.name}
        ${icon}  ${res.weather[0].description}
        Температура: ${tempKelvenToCelsius(res.main.temp)}°C (ощущается как ${tempKelvenToCelsius(res.main.feels_like)}°C)
        Влажность: ${res.main.humidity}%
        Скорость ветка: ${res.wind.speed}`
    );
}

export { printError, printSuccess, printHelp, printWeather };