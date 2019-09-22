function average(testScores) {
    var count = 0;
    testScores.forEach(function(score){
        count += score;
    });
    console.log(Math.round(count/testScores.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];
average(scores);

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
average(scores2);