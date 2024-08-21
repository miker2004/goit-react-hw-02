const Description = ({ data, positivePercentage }) => {
  return (
    <div>
      <h2>Additional Information</h2>
      <ul>
        <li>Good: {data.good}</li>
        <li>Neutral: {data.neutral}</li>
        <li>Bad: {data.bad}</li>
        <li>Positive feedback percentage: {positivePercentage}%</li>
      </ul>
    </div>
  );
};

export default Description;