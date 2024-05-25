import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Container, Loader, Info, Div, DivII, DivIII, DivIV, Flex, Temp, Desc, MinMax, Next, Title, TitleII, Linha } from './styles';


const Weather = () => {
    const { city } = useParams();
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather`,
                    {
                        params: {
                            q: city,
                            appid: '76d359cad8e49bf7bd158820e9b2e5ec',
                            units: 'metric',
                            lang: 'pt'
                        }
                    }
                );
                setWeatherData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        const fetchForecastData = async () => {
            try{
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/forecast`,
                    {
                        params: {
                            q: city,
                            appid: '76d359cad8e49bf7bd158820e9b2e5ec',
                            units: 'metric',
                            lang: 'pt'
                        }
                    }
                );
                setForecastData(response.data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchWeatherData();
        fetchForecastData();

    }, [city]);

    if (loading) return <Container><Loader /></Container>;
    if (error) return <div>Erro: {error}</div>;

    return (
        <Container>
            {weatherData && (
                <Div>
                    <DivIII>
                        <Title>{city}</Title>
                        <Temp>{String(weatherData.main.temp).split('.')[0]}ºC</Temp>
                        <Desc>{weatherData.weather[0].description}</Desc>
                        <Flex>
                            <MinMax>Máx.: {String(weatherData.main.temp_max).split('.')[0]}ºC</MinMax>
                            <MinMax>Min.: {String(weatherData.main.temp_min).split('.')[0]}ºC</MinMax>
                        </Flex>
                    </DivIII>
                </Div>
            )}
            {forecastData && (
                <DivIV>
                    <TitleII>Próximas horas</TitleII>
                    <Linha />
                    <DivII>
                        {forecastData.list.slice(0, 5).map((forecast, index) => (
                            <Next key={index}>
                                <Info>{new Date(forecast.dt * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</Info>
                                <Info>
                                    <img width='50rem'
                                        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                                        alt={forecast.weather[0].description}
                                    />
                                </Info>
                                <Info>{String(forecast.main.temp).split('.')[0]} ºC</Info>
                            </Next>
                        ))}
                    </DivII>
                </DivIV>
            )}
            <br />
            {forecastData && (
                <DivIV>
                    <TitleII>Próximos 5 dias</TitleII>
                    <Linha />
                    <DivII>
                        {forecastData.list.filter((forecast, index) => index % 8 === 0).map((forecast, index) => (
                            <Next key={index}>
                                <Info>{new Date(forecast.dt * 1000).toLocaleDateString('pt-BR', { weekday: 'short' })}</Info>
                                <Info>
                                    <img width='50rem'
                                        src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`}
                                        alt={forecast.weather[0].description}
                                    />
                                </Info>
                                <Info>{String(forecast.main.temp).split('.')[0]} ºC</Info>
                            </Next>
                        ))}
                    </DivII>
                </DivIV>
            )}
        </Container>
    );
};

export default Weather;