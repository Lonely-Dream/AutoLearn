namespace AutoLearn
{
    internal sealed class CourseTask
    {
        public required string CourseStandard { get; init; }

        public required string Id { get; init; }

        public required string Name { get; init; }

        public required string Code { get; init; }

        public required string StepToGetScore { get; init; }

        public required string CurrentStep { get; init; }

        public float ShouldGetScore { get; init; }

        public float CoursePeriod { get; init; }

        public bool Limited { get; init; }
    }
}