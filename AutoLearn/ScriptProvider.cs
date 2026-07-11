using System.Reflection;

namespace AutoLearn
{
    internal sealed class ScriptProvider
    {
        private readonly string baseDirectory;
        private readonly Assembly assembly;
        private readonly Dictionary<string, ScriptEntry> scripts;

        public ScriptProvider()
        {
            baseDirectory = AppDomain.CurrentDomain.BaseDirectory;
            assembly = typeof(ScriptProvider).Assembly;
            scripts = new Dictionary<string, ScriptEntry>
            {
                [ScriptIds.Xhr] = new ScriptEntry("JSCodeXHR.js", "AutoLearn.JSCodeXHR.js"),
                [ScriptIds.Workflow] = new ScriptEntry("JSCodeTest.js", "AutoLearn.JSCodeTest.js"),
                [ScriptIds.OnlineVideoCourse] = new ScriptEntry("JSCodeOnlineVideoCourse.js", "AutoLearn.JSCodeOnlineVideoCourse.js"),
                [ScriptIds.OneScreenCourse] = new ScriptEntry("JSCodeOneScreenCourse.js", "AutoLearn.JSCodeOneScreenCourse.js"),
                [ScriptIds.TwoScreenCourse] = new ScriptEntry("JSCodeTwoScreenCourse.js", "AutoLearn.JSCodeTwoScreenCourse.js"),
                [ScriptIds.OnlineDocCourse] = new ScriptEntry("JSCodeOnlineDoc.js", "AutoLearn.JSCodeOnlineDoc.js")
            };
        }

        public string Get(string scriptId)
        {
            if (!scripts.TryGetValue(scriptId, out ScriptEntry? scriptEntry))
            {
                throw new InvalidOperationException("未定义的脚本资源：" + scriptId);
            }

            string externalPath = Path.Combine(baseDirectory, scriptEntry.FileName);
            if (File.Exists(externalPath))
            {
                return File.ReadAllText(externalPath);
            }

            using Stream? stream = assembly.GetManifestResourceStream(scriptEntry.ResourceName);
            if (stream == null)
            {
                throw new FileNotFoundException("脚本资源未找到", scriptEntry.ResourceName);
            }

            using StreamReader reader = new StreamReader(stream);
            return reader.ReadToEnd();
        }

        private sealed record ScriptEntry(string FileName, string ResourceName);
    }
}