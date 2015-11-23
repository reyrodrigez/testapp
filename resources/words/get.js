// cancel request if userId is undefined
if (!query.userId) {
    cancel();
} else {
    dpd.users.get({id: query.userId}, function (user) {
        if (!user) {
            cancel();
        } else {
            
            dpd.attempts.get({wordId: this.id, userId: query.userId}, function (attempts) {
                this.attempts  = attempts;
            });
            
        }
    });
}