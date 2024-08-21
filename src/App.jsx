import './App.css';
import Feedback from "./components/Feedback";
import Options from "./components/Options";
import Description from './components/Description';
import Notifications from './components/Notifications'; 
import { useState, useEffect } from 'react';

function App() {

  const [feedbackData, setFeedbackData] = useState(() => {
    const savedData = localStorage.getItem('feedbackData');
    return savedData ? JSON.parse(savedData) : { good: 0, neutral: 0, bad: 0 };
  });

  const totalFeedback = feedbackData.good + feedbackData.neutral + feedbackData.bad;
  const positivePercentage = totalFeedback === 0
    ? 0
    : Math.round(((feedbackData.good + feedbackData.neutral) / totalFeedback) * 100);

  const updateFeedback = feedbackType => {
    if (feedbackType === 'reset') {
      const resetData = { good: 0, neutral: 0, bad: 0 };
      setFeedbackData(resetData);
      localStorage.setItem('feedbackData', JSON.stringify(resetData));
    } else {
      const updatedData = { ...feedbackData, [feedbackType]: feedbackData[feedbackType] + 1 };
      setFeedbackData(updatedData);
      localStorage.setItem('feedbackData', JSON.stringify(updatedData));
    }
  };

  useEffect(() => {
    localStorage.setItem('feedbackData', JSON.stringify(feedbackData));
  }, [feedbackData]);

  return (
    <div>
      <Feedback
        total={totalFeedback}
        positivePercentage={positivePercentage}
      />
      <Options
        data={feedbackData}
        updateFeedback={updateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notifications />
      ) : (
        <Description
          data={feedbackData}
          positivePercentage={positivePercentage}
        />
      )}
    </div>
  );
}

export default App;
