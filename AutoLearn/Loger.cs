using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Diagnostics;

namespace AutoLearn
{
    internal class Loger
    {
        public ListBox IListBox { get; set; }
        public Loger(ListBox iListBox)
        {
            IListBox = iListBox;
        }
        public void Log(string log)
        {
            string msg = DateTime.Now.ToString() + ":" + log;
            //Action logAction = () =>_Log(msg);
            //logAction.Invoke();
            IListBox.Invoke(new Action<string>(_Log), msg);
        }
        public void Save()
        {
            string filename = string.Format("log/AutoLearnLog{0}.log", DateTime.Now.ToString("yyyyMMddHHmmss"));
            string? dir = Path.GetDirectoryName(filename);
            if (dir == null)
            {
                return;
            }
            if(!Directory.Exists(dir))
            {
                Directory.CreateDirectory(dir);
            }
            using StreamWriter writer = new StreamWriter(filename);
            foreach(string item in IListBox.Items)
            {
                writer.WriteLine(item);
            }
            writer.Close();
        }
        private void _Log(string log)
        {
            IListBox.Items.Add(log);
            IListBox.TopIndex = IListBox.Items.Count - (IListBox.Height / IListBox.ItemHeight);
            Debug.WriteLine(log);
        }
    }
}
