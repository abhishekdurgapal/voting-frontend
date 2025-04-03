let votesA = 0;
let votesB = 0;

function vote(candidate) {
    if (candidate === 'Candidate A') {
        votesA++;
        document.getElementById('votesA').innerText = votesA;
    } else if (candidate === 'Candidate B') {
        votesB++;
        document.getElementById('votesB').innerText = votesB;
    }
}
