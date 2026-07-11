namespace AutoLearn
{
    internal sealed class LearningWorkflowOptions
    {
        public LearningWorkflowOptions(bool autoEvaluate, bool autoExam)
        {
            AutoEvaluate = autoEvaluate;
            AutoExam = autoExam;
        }

        public bool AutoEvaluate { get; }

        public bool AutoExam { get; }
    }
}