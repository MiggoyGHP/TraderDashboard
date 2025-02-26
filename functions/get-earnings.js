const fetch = require('node-fetch');

exports.handler = async () => {
    const today = new Date();
    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000);
    const from = today.toISOString().split('T')[0];
    const to = nextWeek.toISOString().split('T')[0];
    const url = `https://finnhub.io/api/v1/calendar/earnings?from=${from}&to=${to}&apiKey=cuvai09r01qpi6rua520cuvai09r01qpi6rua52g`;
    const response = await fetch(url);
    const data = await response.json();

    return {
        statusCode: 200,
        body: JSON.stringify(data.earningsCalendar)
    };
};