if (!me) {
    var userId = this.id;
    dpd.words.post({
        origin: 'cheers (in Hungarian)',
        target: 'egészségedre',
        userId: userId
    });
    dpd.words.post({
        origin: 'hello (in French)',
        target: 'bonjour',
        userId: userId
    });
    dpd.words.post({
        origin: 'let\'s go to the beach (in Spanish)',
        target: 'vamos a la playa',
        userId: userId
    });
}