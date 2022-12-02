import { readFileSync } from 'fs';

// Part 1
const input = readFileSync('./day2/input.txt');
const inputStr = input.toString('utf-8');

// Remove the last element of the array b/c it will be an empty string
const rounds = inputStr.split('\n').slice(0, -1);

type RpsOptions = 'rock' | 'paper' | 'scissors';
type OpponentOptions = 'A' | 'B' | 'C';
type PlayerOptions = 'X' | 'Y' | 'Z';

const opponentMap: Record<OpponentOptions, RpsOptions> = {
  A: 'rock',
  B: 'paper',
  C: 'scissors',
};

const playerMap: Record<PlayerOptions, RpsOptions> = {
  X: 'rock',
  Y: 'paper',
  Z: 'scissors',
};

const choiceValue: Record<RpsOptions, number> = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const rpsWins: Record<RpsOptions, RpsOptions> = {
  rock: 'scissors',
  paper: 'rock',
  scissors: 'paper',
};

let score = 0;

for (let i = 0; i < rounds.length; i++) {
  const round = rounds[i];

  const opponent = round[0] as OpponentOptions;
  const opponentChoice = opponentMap[opponent];

  const player = round[round.length - 1] as PlayerOptions;
  const playerChoice = playerMap[player];

  // The points you get based on your choice of rock, paper, or scissors
  let choiceScore = choiceValue[playerChoice];

  let matchScore;
  if (opponentChoice === playerChoice) matchScore = 3;
  else if (rpsWins[playerChoice] === opponentChoice) matchScore = 6;
  else matchScore = 0;

  score += choiceScore + matchScore;
}

console.log(`Part 1: ${score}`);
