using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutoLearn
{
    internal class Logger
    {
        private static readonly Lazy<Logger> _instance = new(() => new Logger());
        public static Logger Instance => _instance.Value;

        private ListBox _listBox;
        private readonly string _logDirPath;
        private readonly string _logFilePath;
        private readonly object _fileLock = new();

        private Logger()
        {
            _logDirPath = Path.Combine(AppDomain.CurrentDomain.BaseDirectory, "logs");
            _logFilePath = Path.Combine(_logDirPath, $"AutoLearnLog_{DateTime.Now:yyyyMMdd}.log");

            if (!Directory.Exists(_logDirPath))
            {
                Directory.CreateDirectory(_logDirPath);
            }
        }

        /// <summary>
        /// 窗口初始化时调用，绑定 ListBox 控件以显示日志
        /// </summary>
        /// <param name="listBox"></param>
        public void RegisterTextBox(ListBox listBox)
        {
            _listBox = listBox;
        }

        public void Info(string message) => Log("INFO", message);
        public void Error(string message, Exception? ex = null) => Log("ERROR", ex != null ? $"{message} | {ex.Message}" : message);

        private void Log(string level, string message)
        {
            string fullLog = $"[{DateTime.Now:yyyy-MM-dd HH:mm:ss.fff}] [{level}] {message}";

            Debug.WriteLine(fullLog);
            if (_listBox != null)
            {
                if (_listBox.InvokeRequired)
                {
                    _listBox.BeginInvoke(new(() => WriteToUI(fullLog)));
                }
                else
                {
                    WriteToUI(fullLog);
                }
            }
            WriteToFile(fullLog);
        }

        private void WriteToUI(string fullLog)
        {
            try
            {
                _listBox.Items.Add(fullLog);
                _listBox.TopIndex = _listBox.Items.Count - 1;
                if (_listBox.Items.Count > 500) _listBox.Items.RemoveAt(0);
            }
            catch
            {
                // 忽略UI异常
            }
        }

        private void WriteToFile(string fullLog)
        {
            Task.Run(() =>
            {
                lock (_fileLock)
                {
                    try
                    {
                        using (StreamWriter sw = File.AppendText(_logFilePath))
                        {
                            sw.WriteLine(fullLog);
                        }
                    }
                    catch { }
                }
            });
        }
    }

    internal static class Log
    {
        public static void RegisterTextBox(ListBox listBox) => Logger.Instance.RegisterTextBox(listBox);
        public static void Info(string msg) => Logger.Instance.Info(msg);
        public static void Error(string msg, Exception? ex = null) => Logger.Instance.Error(msg, ex);
    }
}