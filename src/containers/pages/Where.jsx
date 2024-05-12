import { useNavigate } from 'react-router-dom';

const bunsetsu = [
  '404',
  'where am i',
  'lost?',
  'dead end',
  'take a u-turn',
  '迷ってますか？',
  '助けてくれ',
];

const rng = () => bunsetsu[Math.floor(Math.random() * bunsetsu.length)];

const Where = () => {
  const navigate = useNavigate();
  return (
    <div className="page where">
      <p>{rng()}</p>
      <p>
        <button className="a" type="button" onClick={() => navigate(-1)}>
          back
        </button>
      </p>
    </div>
  );
};

Where.propTypes = {};

export default Where;
