$(document).ready(function () {
    const $timeElement = $('#time');
    const $contentElement = $('#content');
    const $authorElement = $('#author');
    const $greetingElement = $('#greeting');

    fetchCurrentTime().then(time => $timeElement.text(time));
    fetchQuote().then(data => {
        $authorElement.text(data['author']);
        $contentElement.text(data['content']);
    });

    $greetingElement.text(getRandomGreeting());
});

function fetchCurrentTime() {
    let url = 'https://worldtimeapi.org/api/timezone/Asia/Seoul';
    return fetch(url).then(res => res.json()).then(data => data['datetime'].substr(11,5));
}

function fetchQuote() {
    let url = `https://api.quotable.io/random`;
    return fetch(url).then(res => res.json())
}

function getRandomGreeting() {
    const greetings = [
        'Best wishes.',
        'Have a nice day!',
        'Good luck.',
        'How do you do?',
        'Pleased to meet you.',
        'Happy to meet you',
        'What have you been up to?',
        'How are you?',
        'How are things?',
        'How are you feeling today?',
    ]
    const index = Math.floor(Math.random() * greetings.length);
    return greetings[index];
}