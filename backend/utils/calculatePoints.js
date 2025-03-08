module.exports = {
    calculatePlayerPoints: function (battingStats, bowlingStats) {
        const { totalRuns, totalBallsFaced, inningsPlayed } = battingStats;
        const { totalWickets, totalBallsBowled, totalRunsConceded } = bowlingStats;

        const battingStrikeRate = (totalRuns / totalBallsFaced) * 100;
        const battingAverage = inningsPlayed > 0 ? totalRuns / inningsPlayed : 0;
        const bowlingStrikeRate = totalWickets > 0 ? totalBallsBowled / totalWickets : 0;
        const economyRate = totalBallsBowled > 0 ? (totalRunsConceded / totalBallsBowled) * 6 : 0;

        const playerPoints = ((battingStrikeRate / 5) + (battingAverage * 0.8)) + 
                             ((500 / bowlingStrikeRate) + (140 / economyRate));

        return playerPoints;
    },

    calculatePlayerValue: function (points) {
        const valueInRupees = Math.round((9 * points + 100) * 1000 / 50000) * 50000;
        return valueInRupees;
    }
};