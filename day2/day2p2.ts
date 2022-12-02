import { readFileSync } from 'fs';

// Part 1
const input = readFileSync('./day2/input.txt');
const inputStr = input.toString('utf-8');

// Remove the last element of the array b/c it will be an empty string
const rounds = inputStr.split('\n').slice(0, -1);

type RpsOptions = 'rock' | 'paper' | 'scissors';
type OpponentOptions = 'A' | 'B' | 'C';
type OutcomeOptions = 'X' | 'Y' | 'Z';
type OutcomeValues = 'win' | 'draw' | 'lose';

const opponentMap: Record<OpponentOptions, RpsOptions> = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
};

const outcomeMap: Record<OutcomeOptions, OutcomeValues> = {
  X: 'lose',
  Y: 'draw',
  Z: 'win',
};

const choiceValue: Record<RpsOptions, number> = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

// key: what opponenet picks | val: what to pick to lose
const lose: Record<RpsOptions, RpsOptions> = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

// key: what opponenet picks | val: what to pick to win
const win: Record<RpsOptions, RpsOptions> = {
  rock: 'paper',
  paper: 'scissors',
  scissors: 'rock',
};

// const rpsLosses: Record<RpsOptions, RpsOptions> = {
//   rock:
// }

let score = 0;

for (let i = 0; i < rounds.length; i++) {
  const round = rounds[i];

  const opponent = round[0] as OpponentOptions;
  const opponentChoice = opponentMap[opponent];

  const outcome = round[round.length - 1] as OutcomeOptions;
  const outcomeChoice = outcomeMap[outcome];

  let playerChoice: RpsOptions;
  if (outcomeChoice === 'win') {
    playerChoice = win[opponentChoice];
  } else if (outcomeChoice === 'draw') playerChoice = opponentChoice;
  else playerChoice = lose[opponentChoice];

  // The points you get based on your choice of rock, paper, or scissors
  let choiceScore = choiceValue[playerChoice];

  let matchScore;
  if (outcomeChoice === 'draw') matchScore = 3;
  else if (outcomeChoice === 'win') matchScore = 6;
  else matchScore = 0;

  score += choiceScore + matchScore;
}

console.log(`Part 2: ${score}`);
