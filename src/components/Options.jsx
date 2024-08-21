const Options = ({ data, updateFeedback, totalFeedback }) => {
  return (
    <div>
      <button onClick={() => updateFeedback('good')}>Good {data.good}</button>
      <button onClick={() => updateFeedback('neutral')}>Neutral {data.neutral}</button>
      <button onClick={() => updateFeedback('bad')}>Bad {data.bad}</button>
      {totalFeedback > 0 && (
        <button onClick={() => updateFeedback('reset')}>Reset</button>
      )}
    </div>
  );
};

export default Options;