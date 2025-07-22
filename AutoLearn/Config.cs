using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AutoLearn
{
    public class Config
    {
        public static readonly int CF_ROW = 5;
        public static readonly int CF_COL = 4;
        public static readonly string VERSION = "V0.2.0";

        public static void SetConfig(Configuration configuration, string key, string value)
        {
            if (configuration.AppSettings.Settings.AllKeys.Contains(key))
            {
                configuration.AppSettings.Settings[key].Value = value;
            }
            else
            {
                configuration.AppSettings.Settings.Add(key, value);
            }
        }

        public static string GetConfig(string key)
        {
            string? temp_item = ConfigurationManager.AppSettings[key];
            temp_item ??= "";
            return temp_item;
        }
    }
}
