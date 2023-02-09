import "./ScoreBoard.css";

export default function ScoreBoard({ score, hiScore }) {
    return (
        <div className="score">
            <div>
                <p className="current-score">Score: {score}</p>
                <p className="hi-score">Hi-score: {hiScore}</p>
            </div>
        </div>
    );
}
